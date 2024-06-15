docker build buildenv -t cosmos 
echo "Type in 'make build-x86_64' into the following input and then type exit: "
docker run --rm -it -v "%cd%":/root/env cosmos
"C:\Program Files\qemu\qemu-system-x86_64.exe" -cdrom dist/x86_64/kernel.iso