const data = [
  {
      "type": "keyboard",  
     "topic": "Working with lists",
    "header": {"c1": "Action", "c2": "Windows", "c3": "Mac" },
     "items": [
      { "c1": "Search bar",             "c2": "Ctrl-u",     "c3": "⌘-u"          },
      { "c1": "Return to page",         "c2": "Ctrl-Enter", "c3": "⌘-Enter"      },
      { "c1": "Daily Notes Page",       "c2": "Alt-d",      "c3": "Ctrl-Shift-d"  },
      { "c1": "Follow link under cursor", "c2": "Ctrl-o",     "c3": "Ctrl-o"        },
      { "c1": "Move to start of block", "c2": "Ctrl-Home",  "c3": "Ctrl-a"       },
      { "c1": "Move to end of block",   "c2": "Ctrl-End",   "c3": "Ctrl-e"        }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Blocks",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "New block",                          "c2": "Enter",          "c3": "Enter"          },
      { "c1": "Indent block",                       "c2": "Tab",            "c3": "Tab"      },
      { "c1": "Unindent block",                     "c2": "Shift-Tab",      "c3": "Shift-Tab"  },
      { "c1": "Move block up",                      "c2": "Alt-Shift-Up↑",   "c3": "⌘-Shift-Up↑"  },
      { "c1": "Move block down",                    "c2": "Alt-Shift-Down", "c3": "⌘-Shift-Down"  },
      { "c1": "Newline within block",               "c2": "Shift-Enter",    "c3": "Shift-Enter"  },
      { "c1": "Zoom in to block",                   "c2": "Alt-Right",      "c3": "⌘-. ⌘-Shift-. (Safari / Firefox)"  },
      { "c1": "Zoom out of block",                  "c2": "Alt-Left",       "c3": "⌘-, ⌘-Shift-, (Safari / Firefox)"  },
      { "c1": "Expand subordinate blocks",          "c2": "Ctrl-Down",      "c3": "⌘-Down"  },
      { "c1": "Select text in current block",       "c2": "Ctrl-a",         "c3": "⌘-a"  },
      { "c1": "Select current block",               "c2": "Shift-Up↑-Up↑ or Shift-Down-Down",      "c3": "Shift-Up↑-Up↑ or Shift-Down↓-Down"  },
      { "c1": "Select current block + block above", "c2": "Shift-Up↑-Up↑-Up↑", "c3": "Shift-Up↑-Up↑-Up↑"  },
      { "c1": "Select current block + block below", "c2": "Shift-Down-Down-Down", "c3": "Shift-Down↓-Down↓-Down"  },
      { "c1": "Select all blocks on page",          "c2": "Ctrl-Shift-a",   "c3": "⌘-Shift-a"  },
      { "c1": "Jump to start / end of block",       "c2": "Ctrl-Home / Ctrl-End", "c3": "Ctrl-a / Ctrl-e"  },
      { "c1": "Delete to end of block",             "c2": "Ctrl-k",         "c3": "Ctrl-k"  },
      { "c1": "Paste the last text deleted using Ctrl-k", "c2": "Ctrl-y",   "c3": "Ctrl-y"  }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Sidebar",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Open/create page in Sidebar (from Search bar)",             "c2": "Shift-Enter",     "c3": "Shift-Enter"          },
      { "c1": "Open link in Sidebar",         "c2": "Shift-click", "c3": "Shift-click"      },
      { "c1": "Open link in Sidebar (when editing)",       "c2": "Ctrl-Shift-o",      "c3": "Ctrl-Shift-o"  }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Search",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Search all pages",             "c2": "Ctrl-u",     "c3": "⌘-u"          },
      { "c1": "Navigate down/up in search dropdown",         "c2": "Ctrl-j / Ctrl-k", "c3": "Ctrl-j / Ctrl-k"      },
      { "c1": "Search in current page",       "c2": "Ctrl-f",      "c3": "⌘-f"  }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Visuals",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Toggle [[brackets]]",             "c2": "Ctrl-c Ctrl-b",     "c3": "Ctrl-c Ctrl-b"          },
      { "c1": "Toggle author avatar",         "c2": "Ctrl-c Ctrl-x", "c3": "Ctrl-c Ctrl-x"      },
      { "c1": "Cycle namespace display",       "c2": "Ctrl-c Ctrl-l",      "c3": "Ctrl-c Ctrl-l"  },
      { "c1": "Toggle block preview tooltip",       "c2": "Ctrl-c Ctrl-p",      "c3": "Ctrl-c Ctrl-p"  }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Formatting",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Heading 0", "c2": "Ctrl-Alt-0", "c3": "⌘-⌥-0"},
      { "c1": "Heading 1", "c2": "Ctrl-Alt-1", "c3": "⌘-⌥-1"},
      { "c1": "Heading 2", "c2": "Ctrl-Alt-2", "c3": "⌘-⌥-2" },
      { "c1": "Heading 3", "c2": "Ctrl-Alt-3", "c3": "⌘-⌥-3" },
      { "c1": "Bold ", "c2": "Ctrl-b", "c3": "⌘-b" },
      { "c1": "Italics ", "c2": "Ctrl-i", "c3": "⌘-i" },
      { "c1": "Strikethrough ", "c2": "(none)", "c3": "⌘-y" },
      { "c1": "Highlight ", "c2": "Ctrl-h", "c3": "⌘-h ⌘-Shift-h (Safari / Firefox)" },
      { "c1": "Toggle text / TODO / Done", "c2": "Ctrl-Enter", "c3": "⌘-Enter" },
      { "c1": "Web link", "c2": "Ctrl-k", "c3": "⌘-k" }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Version Control",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Add a new version of the same block",       "c2": "Ctrl-,",       "c3": "Ctrl-,"},
      { "c1": "Cycle versions to the right",               "c2": "Ctrl-Shift-.", "c3": "Ctrl-Shift-." },
      { "c1": "Cycle versions to the left",                "c2": "Ctrl-Shift-,", "c3": "Ctrl-Shift-," },
      { "c1": "Expand all versions into their own blocks", "c2": "Ctrl-.",       "c3": "Ctrl-." }
    ]
  },
  {
    "type": "keyboard",  
    "topic": "Other shortcuts",
    "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
    "items": [
      { "c1": "Pop up helpers",            "c2": "/",      "c3": "/"},
      { "c1": "Undo",                      "c2": "Ctrl-z", "c3": "⌘-z" },
      { "c1": "Redo",                      "c2": "Ctrl-y", "c3": "⌘-Shift-z" },
      { "c1": "Move character for./back.", "c2": "",       "c3": "Ctrl-f / Ctrl-b" },
      { "c1": "Swap characters",           "c2": "", "     c3": "Ctrl-t" }
    ]
  },
  {
    "type": "feature",  
    "topic": "Queries",
    "header" : {"c1": "", "c2": "", "c3": "" },
    "items": [
      { "c1": "{{query}}",  "c2": "{{query: what you're looking for }}"},
      { "c1": "and",        "c2": "{{query: {and: [[tagA]] [[tagB]]} }"},
      { "c1": "or",         "c2": "{{query: {or: [[tagA]] [[tagB]]} }"},
      { "c1": "not",        "c2": "{{query: {not: [[tagA]] [[tagB]]} }"},
      { "c1": "between",    "c2": "{{query: {between: [[January 1st, 2020]] [[today]]} }"},
      { "c1": "and not",    "c2": "{{query: {and:[[Singapore]] {not:[[London]]} } }}"},
      { "c1": "and between","c2": "{{query: {and: [[TODO]] {between: [[January 1st, 2020]] [[Today]]} } }}"},
      { "c1": "self-reference",   "c2": "After:  {{[[query]]: {and:[[Singapore]] [[London]] {not:[[query]]} } }}"},
      { "c1": "pages",   "c2": "use page name in the query instead of a tag"},
      { "c1": "",   "c2": ""}
    ]
  }
  // ,
  // {
  //   "topic": "",
  //   "header" : {"c1": "Action", "c2": "Windows", "c3": "Mac" },
  //   "items": [
  //     { "c1": "", "c2": "", "c3": ""},
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" },
  //     { "c1": "", "c2": "", "c3": "" }
  //   ]
  // }

]

export default data
