#!/bin/bash

# 명령어를 포함한 파일 경로
command_file="run.txt"

# 명령어 읽기
command=$(cat "$command_file")

# 명령어 실행
eval "$command"