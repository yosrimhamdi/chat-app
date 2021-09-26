git:
	git add .
	git commit -m "$m"
	git push origin master

deploy:
	npm run build
	firebase login
	firebase deploy
	$(MAKE) open

open:
	firebase hosting:channel:open live