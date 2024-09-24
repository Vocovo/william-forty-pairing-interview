#!/bin/bash

# Function to change port visibility
change_port_visibility() {
  local port=$1
  local visibility=$2
  gh codespace ports visibility $port:$visibility -c $CODESPACE_NAME
}

# Usage: change_port_visibility <port> <visibility>
if [[ -z $CODESPACE_NAME ]]; then
  echo "Github codespace not detected so not changing the Server ports visibility"
elif [[ -n $CODESPACE_NAME ]]; then
  change_port_visibility $1 $2
fi