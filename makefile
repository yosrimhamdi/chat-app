git:
	git add .
	git commit -m "$m"
	git push origin master

deploy:
	npm run build
	firebase login
	firebase deploy
	firebase hosting:channel:open live