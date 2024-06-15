import os
import time

# this file removes all includes like:
# #include <somewhere/something.h>
# and replaces them with:
# #include "full-path-from-impl/somewhere/something.h"

# walk through all files in the current directory
for root, dirs, files in os.walk("."):
    for file in files:
        # if the file is a header file
        if file.endswith(".h"):
            # open the file
            with open(os.path.join(root, file), "r") as f:
                # read the file
                content = f.read()
            # replace all includes with the full path from the current directory
            # eg: #include <somewhere/something.h>
            #     #include "impl/include/blabla/somewhere/something.h"

            # split content into lines
            lines = content.split("\n")
            # iterate over all lines
            for i in range(len(lines)):
                if "#include" in lines[i]:
                    line = lines[i]
                    ret = line
                    type = ""
                    if "<" in line and ">" in line:
                        filename = line.split("<")[1].split(">")[0]
                        # get the relative path to the file from this directory
                        rel_path = os.path.relpath(os.path.join(root, filename), ".").replace("\\", "/").replace(".\\", "").replace("//", "/").replace("./", "")
                        type = "<> "
                    else:
                        filename = line.replace("\"", "").split(" ")[1]
                        # get the relative path to the file from this directory
                        rel_path = os.path.relpath(os.path.join(root, filename), ".").replace("\\", "/").replace(".\\", "").replace("//", "/").replace("./", "")
                        type = "\"\" "
                    rel_path = rel_path.replace("src/intf/", "")
                    ret = "#include \"" + rel_path + "\""
                    print(type + ret)
                    lines[i] = ret
            # join the lines
            content = "\n".join(lines)
            # write the file
            with open(os.path.join(root, file), "w") as f:
                f.write(content)
