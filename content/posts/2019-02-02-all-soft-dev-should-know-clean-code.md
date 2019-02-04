---
date: 2019-02-02T16:00:00Z
author: Douglas Bouttell
title: All Software Developers Should Know... Part 1: Clean Code
slug: soft-dev-should-know-1-clean-code
---

Hello Internet.  

After reading a rather 
[useful book by Kevlin Heany](https://www.amazon.co.uk/dp/0596809484)
on variety of subjects including this one.  I thought that since I have been doing 
this thing called "being a software developer" for almost 6 years
now I would dump some of my knowledge here in the hopes of 
making the world of Software Development a better place.

## What is Clean Code?

#### Clean code explains itself
Compare these two code snippets:
```python
def get_ext(f):
    for i in range(0, len(f)):
        if f[i] === "."
            return f[i:]
    return ""
```
versus
```python
SEPARATOR = "."

def get_file_extension(fileName: str) -> str:
    for i in range(0, len(filename)):
        character = filename[i]
        if character === SEPARATOR:
            return filename[i:]
    return "" # Couldn't find anything so we return nothing
```

Which one do you think is cleaner?  I would say the second one is.  

Even though the first example is correct and I can *guess* what it does
fairly easily, the second example it is more *explicit*
what you are trying to achieve.  This is achieved with a clearer
function name, typing information, suitable use of local variables
(like `character`) and comments to clarify explicit behaviour.

And for those of your saying "just use `os.path.splitext`" that would be the
cleanest way but this example is contrived.

#### Clean code is written in a logical order
I know it sounds lame, but your code should read like a bit of prose should.
That is, you should start by setting up your characters and plot elements 
(your classes and functions) such that the reader can understand them in isolation.
Then, expand on them with more "plot" (functions) that builds on the existing "plot".
Finishing in a concise conclusion which brings everything together (this could be a 
`main()` method or `render()` method, for example).

#### Clean Code is easy to keep in your head
A programmer can only keep about 100 lines of code in their head at any one point.  Having
to move away and look up some other method or class which isn't clearly explained will
reduce the likelihood of that programmer understanding your code.

Splitting out large methods into steps, and making common operations into methods with
a good name and parameters will help lessen the cognitive load needed to understand your
code and make it more likely that it is understood.

#### Clean code should not have unexpected consequences
If a method changes the contents of a parameter you pass in, please be explicit about it.

With the latest trend of functional programming being found in more and more languages its 
too easy to assume that everything is a pure function - a function that does not alter its 
inputs in any way, and does not call anything external.

Being more explicit that your function has side effects will help others understand the
flow of data in your application.

#### Clean code still has comments (where they are needed)
There may be some gnarly bit of code which will only work that way but is hard to read.
You may have a public API to a service or library.  You could be writing some super optimised
code.

Comments are the most valuable thing to a programmer when trying to understand some code, but
programmers hate having to document their stuff because they could be busy doing more *fun* things.

If you practise clean code, you'll start to understand when you really need to write comments and 
you will be thanked a thousand times over for doing so.

## Why should I practice clean code?
We've all come across managers and peers which say "Shipped
code is always better than unshipped code", which can lead some
inexperienced software engineers to push their code as soon as they
get something working and moving on to the next task.

So here are some of the benefits of taking your time to make your code
clean: 

### Clean Code gets your code reviewed faster
As a professional Software Developer, you will be working with
other people who will review your code.  Most of the time they
will have a very high level understanding of the problem you
are trying to solve when they are reviewing your code.  If you 
have code which explains what it is doing, with appropriate steps
split out into functions/methods/sub-routines/classes, that are
easy enough to understand your code reviews will move more swiftly.

I have personally had to tell inexperienced developers to clean 
up their code because I just couldn't understand what they were
trying to do.  This then wastes a day until I can get round to 
reviewing the, much cleaner, second revision.

### Clean Code saves everyone's sanity
[Clarke's Third Law](https://en.wikipedia.org/wiki/Clarke%27s_three_laws) states
"Any sufficiently advanced technology is indistinguishable from magic."  I would 
state that "Any code that cannot be understood is considered magic," and "Programmers
don't like magic."

You will always have to look at other people's code.  This may be because its giving you
some obscure error that you are trying get rid of so you can go home for the weekend, 
or its part of a problem in one of your production systems and its part of your company's
process to understand the root cause of all major outages.

Being able to read code quickly and without putting too much strain on your brain will
mean you sleep more soundly at night.


