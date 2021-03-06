MANAGE=django-admin.py
ROOT_DIR=`pwd`

test:
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) test hello

run:
	. $(ROOT_DIR)/.env/bin/activate; PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) runserver

syncdb:
	PYTHONPATH=`pwd` DJANGO_SETTINGS_MODULE=django_angular_backend.settings $(MANAGE) syncdb --noinput


install:
	virtualenv --no-site-packages .env
	. $(ROOT_DIR)/.env/bin/activate; pip install -r $(ROOT_DIR)/requirements.txt
	. $(ROOT_DIR)/.env/bin/activate; make syncdb

bower-install: 
	cd django_angular_backend/static; bower install
	
test-install: 
	cd django_angular_backend/static; npm install 
	
karma-test: test-install
	cd django_angular_backend/static; karma start test/karma.conf.js
