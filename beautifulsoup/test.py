from bs4 import BeautifulSoup	
import requests

with open('sample.html','r') as htmlFile :
	soupObject = BeautifulSoup(htmlFile,'lxml')

articles = soupObject.find_all('div',id='articles')
for article in articles:
	print('heading: ',article.h2.text)
	print('content: ',article.h3.text)
	print()
# for article in articles:
# 	print('heading: ',article.h2.text)
# 	print('content: ',article.h3.text)
# 	print()