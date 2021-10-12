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
	start chrome https://chat-app-41bde.web.app