import os
from pelican import signals
from pelican.readers import MarkdownReader
from pelican.contents import Content

AUTHOR = 'John Lee'
SITENAME = 'Python AI Solutions'

PATH = "content"

TIMEZONE = 'Asia/Ho_Chi_Minh'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# # Blogroll
# LINKS = (
#     ("Pelican", "https://getpelican.com/"),
#     ("Python.org", "https://www.python.org/"),
#     ("Jinja2", "https://palletsprojects.com/p/jinja/"),
#     ("You can modify those links in your config file", "#"),
# )

# # Social widget
# SOCIAL = (
#     ("You can add links in your config file", "#"),
#     ("Another social link", "#"),
# )

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

THEME = "themes/python-ai-solutions-theme"
STATIC_PATHS = ['images', 'static']

MARKDOWN = {
    'extensions': ['extra', 'codehilite', 'toc'],
    'output_format': 'html5',
}


# Activate the plugin
PLUGINS = ['plugins.timer', 'plugins.generate-services']
SITEURL = 'http://localhost:8000'

# Add EXTRA_PATH_METADATA to ensure favicon.ico is copied to the root
EXTRA_PATH_METADATA = {
    'static/favicon.ico': {'path': 'favicon.ico'}
}

