init:
	@echo "Init the project"
	@echo "Install the dependencies"
	@npm install
	@echo "Install the dependencies done"
	@echo "Up the containers"
	@docker-compose up -d
	@echo "Create the database"
	@npm run migrate
	@echo "Database created"
	@echo "Create seed data"
	@npm run seed
	@echo "Seed data created"
	@echo "Init the project done"
	@echo "Start the project"
	@npm run start