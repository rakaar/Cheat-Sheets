from bs4 import BeautifulSoup
import requests
import csv

#get the source from the internet using requests library's get method
source = requests.get("https://coreyms.com/").text

#parse it through beautiful soup to get an object
soupObject = BeautifulSoup(source,'lxml') 

#lets create a csv file and file obj in which things are going to be stored
csv_file = open('scrap.csv','w')
#a writer obj to write into csv files
csv_writer = csv.writer(csv_file)
#start writing
csv_writer.writerow(['title','date','intro','youtube-link'])

#get all the articles
articles = soupObject.find_all('article')
for article in articles:
	title = article.header.h2.a.text
	date_of_article = article.header.p.time.text
	intro = article.find('div',class_='entry-content').p.text
	iframe_link = article.find('iframe')['src']
	video_id = iframe_link.split('/')[4].split('?')[0]
	youtube_link = "https://www.youtube.com/watch?v="+video_id
	print('TITLE IS ',title)
	print('DATE IS ',date_of_article)
	print('INTRO IS ',intro)
	print('YOUTUBE LINK ',youtube_link)
	print('\n \n')
	csv_writer.writerow([title,date_of_article,intro,youtube_link])

csv_file.close()
###################################################################################
############# here is the way we  found the proper youtube link ####################
###################################################################################

#to get the attributes just access them as dict and key value pairs
#here lets try to get a video id from by scrapping
firstArticle = soupObject.find('article')
#print(firstArticle)

link = firstArticle.find('iframe')['src']
print(link)

#the link works but...
#since its the link in an iframe the problem is when u open it in a seperate window it occupies completly
#lets open it properly in youtube
#'by using the id'
video_id = link.split('/')[4].split('?')[0]
proper_video_link = "https://www.youtube.com/watch?v="+video_id
print(proper_video_link)