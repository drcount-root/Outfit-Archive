#!/bin/bash

git add .

while true; do
    # Take message
    read -p "Add Commit message: " message

    # Check if message is empty
    if [[ -z "$message" ]]; then
        echo "Message cannot be empty. Please enter some message."
    else
        git commit -m "$message"
        git push -u origin backup1-styled-component-added-deployment
        break
    fi
done

echo "OK! ✅"

for i in 5 4 3 2 1; do
    echo "Exiting in $i seconds..."
    sleep 1
done