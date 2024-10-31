# Makefile

install:
	pip3 install -r requirements.txt

ai:
	python3 search_with_lepton.py

env:
	python3 -m venv .venv

activate:
	source ./.venv/bin/activate

build:
	cd web && npm install && npm run build

# Optional: Add a clean target to remove installed packages (if needed)
clean:
	pip uninstall -r requirements.txt -y