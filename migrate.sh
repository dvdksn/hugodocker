#!/bin/bash

# dumb script to clean markup artifacts

for file in $(fd -e=md); do
  # sed -i "" 's/redirect_from/aliases/g' $file
  # sed -i "" 's/{:.*}//g' $file
  # sed -i "" 's/target=".*}//g' $file
  # sed -i "" 's/target=".*"//g' $file
  # sed -i "" 's/rel=".*"//g' $file
  # sed -i "" 's/class=""//g' $file
  # sed -i "" 's/class="_"//g' $file
  # sed -i "" 's/class="_"//g' $file
done
