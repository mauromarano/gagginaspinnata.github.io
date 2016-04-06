#!/bin/bash

#---------/---------------------\---------#
#--------|- Jekyll Post Creator -|--------#
#---------\---------------------/---------#
# Ripped and tweaked from https://gist.github.com/kabrooski/6107707

# Simply put the script in your site directory, edit the configs to fit your setup, and run it with:
# ./post "post title"

# What is does:
# - creates the post with the correct format of date and title
# - adds YAML front-matter (layout, title, date, tags)
# - opens the post file in editor chosen


#Set Script Name variable
SCRIPT=`basename ${BASH_SOURCE[0]}`



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
read -p "Tags: " tags

#creatin the filename
filename=$( echo ${title// /-} | awk '{print tolower($0)}'| sed 's/[^a-z\-]*//g')

# adding date and extension
filename="$folder`date +%F`-$filename.md"


########## Adding to file ##########
echo "---" >> $filename
echo "layout: $layout" >> $filename
echo "title: $title" >> $filename
echo "author: $author" >> $filename
echo "date: `date +%F\ %H:%M:%S`" >> $filename


# ### Adding tags on new lines with a dash in front (separated with comma)

if [ "$tags" ]; then
  echo "tags:
- $tags" | sed 's/,/\
-/g' >> $filename
fi

echo "---" >> $filename
echo >> $filename

# open in chosen editor
$editor $filename