#!/bin/bash


# ########## Configs ##########

# Post layout
layout=post

# Post text editor
editor=sublime

# Post directory
folder=_posts/

# Author
author="Mauro Marano"


read -p "Title: " title
# read -p "Tags: " tags
# read -p "Categries : " categories

#creatin the filename
filename=$( echo ${title// /-} | awk '{print tolower($0)}'| sed 's/[^a-z\-]*//g')

# adding date and extension
filename="$folder`date +%F`-$filename.md"


########## Adding to file ##########
echo "---" >> $filename
echo "layout: $layout" >> $filename
echo "title: \"$title\"" >> $filename
echo "date: `date +%F`" >> $filename


# ### Adding tags on new lines with a dash in front (separated with comma)

# if [ "$tags" ]; then
#   echo "tags:
# - $tags" | sed 's/,/\
# -/g' >> $filename
# fi
# if [ "$categories" ]; then
#   echo "categories:
# - $tags" | sed 's/,/\
# -/g' >> $filename
# fi

echo "---" >> $filename
echo >> $filename

# open in chosen editor
$editor $filename