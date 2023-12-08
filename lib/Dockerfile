FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/excelottah6/IZUKU-MD /root/excelottah6
WORKDIR /root/excelottah6/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
