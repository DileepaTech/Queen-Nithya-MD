FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/DileepaTech/Queen-Nithya-MD /root/DileepaTech
WORKDIR /root/DileepaTech/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
