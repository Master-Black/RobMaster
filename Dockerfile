FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Master-Black/RobMaster /root/RobMaster
WORKDIR /root/RobMaster/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
