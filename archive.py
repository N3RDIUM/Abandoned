import os

with open("repos.txt") as f:
    repos = f.read().splitlines()

def archive(reponame):
    os.system(f"git clone https://github.com/n3rdium/{reponame} && sudo rm ./{reponame}/.git -r")
    # rm the .git too because we dont want it to be a submodule.

for i in range(len(repos)):
    print(f"PROGRESS: {i}/{len(repos)}")
    archive(repos[i])

