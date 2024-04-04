#!/bin/bash

cd images; for f in ./*.webp ; do convert "$f" -resize 450 -gravity Center -extent 450x220 "../images_resized/${f%.webp}.webp.avif" ; done ; cd ..