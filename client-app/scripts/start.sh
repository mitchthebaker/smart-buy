#!/bin/sh

if [ "$NODE_ENV" == "production"] ; then
  npm start && 
  npm compile-sass
else
  npm start
fi