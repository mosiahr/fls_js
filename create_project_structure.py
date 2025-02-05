#!/usr/bin/env python

import os
import sys
from datetime import datetime

DEFAULT_YEAR = datetime.now().year
DEFAULT_DIR_NAME = 'new_project'
DIR_LIST = ['css', 'fonts', 'img', 'js']
DEFAULT_TITLE_NAME = 'Document'

DEFAULT_INDEX_HTML = '''<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>{}</title>
</head>

<body>
   <div class="wrapper">
      <header class="header">
         <div class="header__container">
            Header
         </div>
      </header>
      <main class="page">
         <div class="page__el el">
            <div class="el__container">
               <div class="el__">
                  Main
               </div>
			</div>
		 </div>
      </main>
      <footer class="footer">
         <div class="footer__container">
            <span>© {} Gregory Mosia</span>
         </div>
      </footer>
   </div>
   <script src="js/script.js"></script>
</body>

</html>'''

DEFAULT_STYLE_CSS = \
'''/* Local fonts */
@import url('fonts.css');

/* Reset */
@import url('reset.css');

/* Keyframes */
@import url('keyframes.css');

body {
    font-family: none, sans-serif;
}
textarea {
    resize: vertical;
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow: clip;
}
.wrapper > main {
    flex-grow: 1;
}
[class*="__container"] {
    max-width: 1170px;
	margin: 0 auto;
	padding-inline: 15px;
}

/** FOOTER */
.footer {
    background-color: #fdf0e9;
    color: #391400;
    font-weight: 700;
    text-align: center;
	padding-block: 15px;
}
'''

DEFAULT_RESET_CSS = \
'''*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	border: none;

	box-sizing: border-box;
}
*::before,
*::after {
	display: inline-block;
}

a {
	text-decoration: none;
	display: inline-block;
	color: inherit;
}
li {
	list-style: none;
}
img {
	vertical-align: top;
}
html,
body {
	line-height: 1;
	height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}

/* FORM */
input,
button,
textarea {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	color: inherit;
	background-color: transparent;
}
input,
textarea {
	width: 100%;
}
button,
select,
option {
	cursor: pointer;
}
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
	appearance: none;
}
/* Для Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Для Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
'''

DEFAULT_STYLE_JS = \
'''
"use strict"
'''

def ispath(path):
    if os.path.exists(path):
        return True
    return False

def create_file(path, text=''):
    if ispath(path):
        print(f"The '{path}' file already exists! The file isn't created!")
    else:
        with open(path, 'w') as f:
            f.write(text)
            print(f"The '{path}' file is created successfully!")

def create_folder(path):
    if ispath(path):
        print(f"The '{path}' folder already exists! The folder isn't created!")
    else:
        os.makedirs(path)
        print(f"The '{path}' folder is created successfully!")


if __name__ == '__main__':
    try:
        project_dir = sys.argv[1]
        is_args = True
    except IndexError:
        project_dir = DEFAULT_DIR_NAME
        is_args = False

    for item in DIR_LIST:
        path = os.path.join(project_dir, item)
        create_folder(path)
        create_file(os.path.join(path, '.gitignore'))

    # Note: Create HTML file require project directory is created.
    if is_args:
        create_file(os.path.join(project_dir, 'index.html'), 
                    DEFAULT_INDEX_HTML.format(project_dir.capitalize(), DEFAULT_YEAR))
    else:
        create_file(os.path.join(project_dir, 'index.html'), 
                    DEFAULT_INDEX_HTML.format(DEFAULT_TITLE_NAME, DEFAULT_YEAR))

    create_file(os.path.join(project_dir, 'css/style.css'), DEFAULT_STYLE_CSS)
    create_file(os.path.join(project_dir, 'css/reset.css'), DEFAULT_RESET_CSS)
    create_file(os.path.join(project_dir, 'css/fonts.css'))
    create_file(os.path.join(project_dir, 'css/keyframes.css'))
    create_file(os.path.join(project_dir, 'js/script.js'), DEFAULT_STYLE_JS)
