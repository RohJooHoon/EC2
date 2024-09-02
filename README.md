# EC2

**node.js** **api** 제작 **AWS EC2 Ubuntu** 웹서버 입니다.

## 개요

- **인스턴스 스펙** : Ubuntu 64비트(x86) t2.micro
- **스팟 인스턴스** : 시간당 0.1$ 제한
- **my sql** : SQL 데이터 관리
- **node.js** : API 개발
- **caddy** : HTTPS연결을 위해 caddy로 SSL인증 서버 실행
- **Nginx** : SSL 인증 서버 경로 접근시 내부 HTTPS 포트 연결

## 명령어

- **./run.sh** : 세팅해둔 EC2 SSH 접속 단축 스크립트
- **pm2 start yarn --name "EC2" -- start** : EC2 어플리케이션 실행
- **pm2 list** : 실행중인 어플리케이션 리스트 확인
- **pm2 stop EC2** : 실행중인 EC2 어플리케이션 종료
- **pm2 delete EC2** : 실행중인 EC2 어플리케이션 제거
- **sudo nano /etc/nginx/sites-available/default** : Nginx 파일 수정
- **sudo nano /etc/caddy/Caddyfile** : Caddyfile 파일 수정
- **sudo lsof -i :2019** : 2019번 포트 사용중인 서버 확인
- **sudo pkill -f caddy** : Command명 "caddy" 서버 종료

## API

- [**/send-email**](http://ec2-52-78-160-140.ap-northeast-2.compute.amazonaws.com:3100/send-email): node.js 이메일 전송 시스템
