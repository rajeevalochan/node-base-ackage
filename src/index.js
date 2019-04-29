import { start } from './server'
/* eslint-disable prettier/prettier */
require("@babel/register")({
  presets: ["@babel/preset-env"]
})

start()
