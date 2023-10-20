---
layout: post
title: Enabling static code analysis in Python
tags: tutorial python
---

Python is not to be introduced anymore and is [indiscutably](https://trends.google.com/trends/explore?q=%2Fm%2F05z1_,%2Fm%2F07sbkfb,%2Fm%2F02p97,%2Fm%2F060kv,%2Fm%2F0jgqg) one of the most used programming languages in 2023.

Despite the number of years that we spent using this beautiful programming, when you work on a team project you can easily fall into recurrent bugs and errors and have a lot unreadable code. Let me show you five simple examples:

We assume that we have two developers in our team working on the same project.

__1. Indentation__

No matter if you are a senior developer or a newbie at programming, this is bound to show up at some point in time or the other. This happens when you use 2 spaces indentation which does not help visually in a language that does not use braces. Also if there are people in your team who use spaces to create indentations instead of tabs, you must know what I am talking about. Here is an example below:

```python
def pairs():
  """Display even integers between 0 and 100."""
  for i in range(101):
    if i%2 == 0:
      print(i)
   print("done!") # IndentationError
```

Python has known huge evolution over past years and the latest released version 3.10 comes with major improvement regarding debugging (clearer messages), and better typing 

...a work in progress
