import torch
import zipfile
import torchaudio
from glob import glob
import time

import speech_recognition as sr
import os
import playsound
import shutil

# gpu also works, but our models are fast enough for CPU
device = torch.device('cpu')
language = 'en'
speaker = 'lj_16khz'
model, symbols, sample_rate, example_text, apply_tts = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                                                      model='silero_tts',
                                                                      language=language,
                                                                      speaker=speaker)
model = model.to(device)  # gpu or cpu
audio = apply_tts(texts=[example_text],
                  model=model,
                  sample_rate=sample_rate,
                  symbols=symbols,
                  device=device)

print(audio)

model, decoder, utils = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                       model='silero_stt',
                                       language='en',  # also available 'de', 'es'
                                       device=device)
(read_batch, split_into_batches,
 read_audio, prepare_model_input) = utils  # see function signature for details

print("testing...")
# download a single file, any format compatible with TorchAudio (soundfile backend)
if not os.path.isfile('./speech_orig.wav'):
    torch.hub.download_url_to_file('https://opus-codec.org/static/examples/samples/speech_orig.wav',
                               dst='speech_orig.wav', progress=True)
else:
    print('Already have files; Skipping download.')

test_files = glob('speech_orig.wav')
batches = split_into_batches(test_files, batch_size=10)
input = prepare_model_input(read_batch(batches[0]),
                            device=device)

output = model(input)
for example in output:
    print(decoder(example.cpu()))

try:
    shutil.rmtree('spoken')
except:
    print("first-time initialization")

os.mkdir('spoken')

speeches = []

def callback(recognizer, audio):
    speeches.append(1)
    with open('spoken/'+str(len(speeches))+'.wav', 'wb') as file:
        file.write(audio.get_wav_data())
        file.close()

    #playsound.playsound('spoken/'+str(len(speeches))+'.wav')
    try:
        #print('File:   '+'spoken/'+str(len(speeches))+'.wav')
        files = glob('spoken/'+str(len(speeches))+'.wav')

        batches = split_into_batches(files, batch_size=10)
        input_ = prepare_model_input(read_batch(batches[0]),
                                    device=device)

        output = model(input_)
        for transcript in output:
            if not decoder(transcript.cpu()) == '' :
                print(decoder(transcript.cpu()),end=" ")
        if len(speeches) > 5:
            try:
                shutil.rmtree('spoken')
            except:
                print("",end="")

            os.mkdir('spoken')
            speeches.clear()
    except:
        print("Couldn't hear that. Please try again.")

r = sr.Recognizer()
m = sr.Microphone()
with m as source:
    r.adjust_for_ambient_noise(source)

stop_listening = r.listen_in_background(m, callback)
print('say something:')

while True:
    time.sleep(0.1)
