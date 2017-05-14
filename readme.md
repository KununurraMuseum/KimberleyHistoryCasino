# DIY Trove Headline Roulette [Hacked into DV_BoAB's KimberleyHistoryCasino]

Headline Roulette is a simple game that challenges you to guess the publication date of a newspaper article chosen at random from Trove.

Here you can build your own customised version of Headline Roulette with nothing more than a GitHub account.

For example, you might to create a version of Headline Roulette limited to articles:

* that mention *cats* or *kittens*
* that include the phrase "White Australia"
* that come from the Melbourne **Age**
* that come from your local region

It's up to you. Build a version for your workshop, class, or community. Build a version just for fun. Any search you can construct in Trove you can use to seed your game.

## Quickstart

1. Get yourself a [GitHub](https://github.com) account (the free version is fine) and log in.
2. Get yourself a [Trove API key](http://help.nla.gov.au/trove/building-with-trove/api).
2. Come back to this page and click on the 'Fork' button (in the top right hand corner of the page) to save a copy of this repository under your own account. [More about forking](https://help.github.com/articles/fork-a-repo/).
3. Go to your account and view the repository you've just created. It will look just like this one!
4. Click on the 'Settings' tab and change the repository name to suit your game.
5. Click on the 'Code' tab. Open the `js` folder and then click on the `script.js` file to view it.
6. Click on the pencil icon to edit the file.
7. Look for the **'YOU MUST EDIT THIS SECTION'** message in the `script.js` file and add the details of your game as described in the [customisation section](#customisation-guide) below.
8. Click on the 'Commit changes' button to save your details.
9. That's it! Your New (hew in yours Tim - Error-trap - AB 13 V 2017) game will be available at the address -- http://**[your Github user name]**.github.io/**[your repository name]**. For example, my user account is 'wragge' and I created a version of this repository called 'forecasters-demo', so you can find it online at http://wragge.github.io/forecasters-demo/ .

## Customisation guide

There are only two things you have to supply:

* your Trove API query
* your query

In addition, you can set:

* a tagline for your game (appears in the header)
* a byline for your game (appears in the footer)
* the messages that players see when they make a guess

There are samples of each of these (except the API key) in the `script.js` file. They all sit inside a block of code labelled 'YOU MUST EDIT THIS SECTION'.

This is the what the main configuration block looks like:

``` javascript
    // YOU MUST EDIT THIS SECTION
    // You must supply a Trove API key
    var troveAPIKey = '';
    // Either provide full API query here or include options below
    var apiQuery = '';
    // Words you want to search for -- separate multiple values with spaces, eg:
    // var keywords = 'weather wragge';
    var keywords = '';
    // How you want to combine keywords -- all, any, or phrase
    var keywordType = 'all'
    // Newspaper id numbers -- separate multiple values with spaces, eg:
    // var titles = '840 35';
    var titles = '';
    // Add a byline, eg:
    var byline = 'Created by <a href="https://timsherratt.org">Tim Sherratt</a>.'
    // var byline = '';
    // Add a tagline
    var tagline = 'How well do you know your Australian history?';
    // Leave this alone unless you're publishing on a non-https server
    var useHttps = 'true';
```

Adding your API key and setting a tagline or byline should be pretty straightforward. Just insert the values you want between the quote marks.

Setting the query your game will use to choose articles is a bit more complicated. You have two main options:

* supply a Trove API query in the form of a url
* provide keywords and/or the id numbers of particular newspapers

You'll probably only want to supply a Trove API query if you want to use a really complex query -- such as advertisements published in the Argus between 1900 and 1950. For most games you can just use the `keywords` and `titles` settings to build your query automatically.

There are three settings you can use to build your query:

* `keywords` -- the words you want to search for, separated by spaces
* `keywordType` -- how you want the keywords to be combined, expects one of: `all`, `any`, or `phrase`
* `titles` -- the id numbers of newspapers you want to search, separated by space

You don't have to use both `keywords` and `titles`, but you can combine them if you want.

The easiest place to get the id numbers of titles is from the [About digitised newspapers](http://trove.nla.gov.au/newspaper/about) page on Trove. If you click on a title, you'll open a new page which has the id of the newspaper at the end of the url. For example the page for the *Canberra Times* is:


``` http
http://trove.nla.gov.au/newspaper/title/11

```

So the id number of the *Canberra Times* is '11'.

Note that if you *do* supply an API query, other settings will be ignored. The easiest way to construct an API query is to use the [Trove API console](https://troveconsole.herokuapp.com/).

## Limitations

Because of the way forking works on GitHub, you can only fork a repository once into your own account. That means you can only create one game.

The easiest, but kludgiest, way around this is to create a new GitHub organisation, and then fork your second game into your new organisation's account. To create a new organisation just click on the '+' sign at the top of the screen and choose 'New organisation'.

If you're making lots of games you probably want to install Git on your local computer and follow the instructions below.

## Managing multiple games

As noted above, you can only create one game using GitHub by itself. Yes, you can a new organisation for every game, but that's going to get messy quickly. Fortunately it's easy to set things up on your local computer so that you can create as many games as you want!

The first step is to [install Git on your local computer](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Once that's done, just follow the following steps each time you want to create a new game:

1. You'll need to [use the command line](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything), so fire up a terminal.
2. On the command line type `git clone https://github.com/wragge/diy-headline-roulette.git mynewgame` -- replacing 'mynewgame' with whatever you want. This command will create a directory called `mynewgame` and copy all the files from the DIY-Headline-Roulette repository on GitHub into it.
3. Type `cd mynewgame` to move to the new directory.
4. Now you have to create a new repository in your own GitHub account. Just login to your account, click on the '+' button at the top of the page, and choose 'New repository'. Give your repository a name (probably the same as the directory you just created) and click the green 'Create repository' button.
4. Go back to your terminal and type `git remote rename origin upstream` -- this changes the name of the link to the original repository.
5. Now you need the address of your new repository. On your new repository's page you should see a url that starts with `https://github.com/` and ends in `.git` -- copy it.
6. In the terminal type `git remote add origin [your repository's url]` -- inserting the url you just copied. This will link the repository on your local machine with your new repository on GitHub.
7. Type `git push -u origin gh-pages` -- this copies the repository on your local machine to GitHub.

Now you have a choice, you can edit the files as described above in your new GitHub repository. Or you can use the text editor of your choice to modify the files on your local computer. If you edit them locally, you'll need to copy your modified files to GitHub to see your exhibition. At the terminal just type `git push origin gh-pages` -- easy!

>>>>>>>>>>>>>>>>>>>>>>>>

[Added below a complete listing of Trove API Calls - ADDED by DV_BoAB 14 V 2017]

http://api.trove.nla.gov.au/newspaper/titles?

>>>>>>>>>>>>>>>>>>>>>>>>

Trove API Examples 	[Added for beginners like me by DV_BoAB for KHS  on 13 III 2017]

[Obviously TS's comment here will not work in this ReadMe - Try Ctrl C & V ;^]

[What I wanted most in your readme Tim is a list of the Newspaper Title Numbers - Still looking!]

Click on any of the examples below to open them in this console. If you want to use them in your own code you'll need to get an API key and add '&key=[Your API key]' to the url.

See the Trove API documentation for a full list of available parameters and detailed information on constructing queries.

Search everything
Search newspapers
Search other zones
Get record
List/get newspaper titles
List/get Trove contributors
Search everything
Parameters	url
zone: all
q (query): wragge
encoding: xml (default)
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge&zone=all
zone: all
q (query): wragge
encoding: json
n (number of results): 50
http://api.trove.nla.gov.au/result?q=wragge&zone=all&encoding=json&n=50
zone: all
q (query): nuc:ANL (contributor id)
encoding: json
n (number of results): 50
http://api.trove.nla.gov.au/result?q=nuc:ANL&zone=all&encoding=json
zone: all
q (query): wragge
encoding: json
n (number of results): 20 (default)
l-australian: y (in Australia or by Australians)
l-availability: y/f (freely accessible online)
http://api.trove.nla.gov.au/result?q=wragge&zone=all&encoding=json&l-australia=y&l-availability=y/f
Search newspapers
Parameters	url
zone: newspaper
q (query): wragge AND weather
encoding: json
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge+AND+weather&zone=newspaper&encoding=json
zone: newspaper
q (query): wragge AND weather
encoding: json
l-year: 1903
l-category: Article
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=newspaper&encoding=json&l-year=1903
zone: newspaper
q (query): wragge AND weather
encoding: json
l-decade: 190
facet: year
n (number of results): 0
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=newspaper&encoding=json&l-decade=190&facet=year&n=0
Search other zones
Parameters	url
zone: book,picture
q (query): wragge AND weather
encoding: json
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=book,picture&encoding=json
zone: book
q (query): weather
encoding: json
l-format: Thesis
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=weather&zone=book&encoding=json&l-format=Thesis
zone: book
q (query): weather
encoding: json
facet: format
n (number of results): 0
http://api.trove.nla.gov.au/result?q=weather&zone=book&encoding=json&facet=format&n=0
zone: list
q (query): war memorials
encoding: json
http://api.trove.nla.gov.au/result?q=war memorials&zone=list&encoding=json
Get record
Parameters	url
type: newspaper
article id: 41697877
reclevel: full
encoding: json
http://api.trove.nla.gov.au/newspaper/41697877?encoding=json&reclevel=full
type: newspaper
article id: 146871507
reclevel: full
include: articletext
http://api.trove.nla.gov.au/newspaper/41697877?reclevel=full&include=articletext
type: work
article id: 36904481
reclevel: full
encoding: json
http://api.trove.nla.gov.au/work/36904481?encoding=json&reclevel=full
type: work
article id: 34769014
reclevel: full
include: workVersions,holdings
encoding: json
http://api.trove.nla.gov.au/work/34769014?encoding=json&include=workVersions,holdings&reclevel=full
type: list
list id: 1442
reclevel: full
include: listItems
encoding: json
http://api.trove.nla.gov.au/list/1442?encoding=json&reclevel=full&include=listItems
List/get newspaper titles
Parameters	url
state: vic
http://api.trove.nla.gov.au/newspaper/titles?state=vic
title id: 35
encoding: json
http://api.trove.nla.gov.au/newspaper/title/35?encoding=json
title id: 35
include: years
encoding: json
http://api.trove.nla.gov.au/newspaper/title/35?encoding=json&include=years
List/get Trove contributors
Parameters	url
encoding: json
http://api.trove.nla.gov.au/contributor?encoding=json
NUC identifier: ANL
reclevel: full
encoding: json
http://api.trove.nla.gov.au/contributor/ANL?encoding=json&reclevel=full

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

[All newspaper titles from my 1st Trove API command at 1:40 am 14 III 2017]


Trove API Console
Explore the workings of the Trove API

API url
http://api.trove.nla.gov.au/newspaper/titles?
Enter an API query to view the results (no key required), or start with one of the examples below.
Go! Clear

<?xml version='1.0' encoding='UTF-8'?>
<response>
    <records total="1249">
        <newspaper id="166">
            <title>Canberra Community News (ACT : 1925 - 1927)</title>
            <state>ACT</state>
            <issn>18388671</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/166</troveUrl>
            <startDate>1925-10-14</startDate>
            <endDate>1927-12-16</endDate>
        </newspaper>
        <newspaper id="165">
            <title>Canberra Illustrated: A Quarterly Magazine  (ACT : 1925)</title>
            <state>ACT</state>
            <issn>18388663</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/165</troveUrl>
            <startDate>1925-11-01</startDate>
            <endDate>1925-11-01</endDate>
        </newspaper>
        <newspaper id="69">
            <title>Federal Capital Pioneer (Canberra, ACT : 1924 - 1926)</title>
            <state>ACT</state>
            <issn>18373062</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/69</troveUrl>
            <startDate>1924-12-03</startDate>
            <endDate>1926-08-20</endDate>
        </newspaper>
        <newspaper id="871">
            <title>Good Neighbour (ACT : 1950 - 1969)</title>
            <state>ACT</state>
            <issn>22037322</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/871</troveUrl>
            <startDate>1950-08-01</startDate>
            <endDate>1969-10-01</endDate>
        </newspaper>
        <newspaper id="665">
            <title>Student Notes/Canberra University College Students Association (ACT : 1947 - 1950)</title>
            <state>ACT</state>
            <issn>22024158</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/665</troveUrl>
            <startDate>1947-05-23</startDate>
            <endDate>1950-05-10</endDate>
        </newspaper>
        <newspaper id="11">
            <title>The Canberra Times (ACT : 1926 - 1995)</title>
            <state>ACT</state>
            <issn>01576925</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/11</troveUrl>
            <startDate>1926-09-03</startDate>
            <endDate>1995-12-31</endDate>
        </newspaper>
        <newspaper id="167">
            <title>The Federal Capital Pioneer Magazine  (Canberra, ACT : 1926 - 1927)</title>
            <state>ACT</state>
            <issn>1838868X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/167</troveUrl>
            <startDate>1926-10-15</startDate>
            <endDate>1927-08-20</endDate>
        </newspaper>
        <newspaper id="666">
            <title>Woroni (Canberra, ACT : 1950 - 2007)</title>
            <state>ACT</state>
            <issn>13262793</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/666</troveUrl>
            <startDate>1950-06-14</startDate>
            <endDate>2007-11-01</endDate>
        </newspaper>
        <newspaper id="1283">
            <title>Berita Repoeblik (Djakarta, Indonesia : 1945 -1946)</title>
            <state>International</state>
            <issn>2207208X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1283</troveUrl>
            <startDate>1945-11-17</startDate>
            <endDate>1946-11-15</endDate>
        </newspaper>
        <newspaper id="1214">
            <title>Commonwealth of Australia Gazette (National : 1901 - 1957)</title>
            <state>National</state>
            <issn>22063854</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1214</troveUrl>
            <startDate>1901-01-01</startDate>
            <endDate>1957-12-31</endDate>
        </newspaper>
        <newspaper id="51">
            <title>The Australian Abo Call (National : 1938)</title>
            <state>National</state>
            <issn>14479060</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/51</troveUrl>
            <startDate>1938-04-01</startDate>
            <endDate>1938-09-01</endDate>
        </newspaper>
        <newspaper id="112">
            <title>The Australian Women's Weekly (1933 - 1982)</title>
            <state>National</state>
            <issn>00050458</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/112</troveUrl>
            <startDate>1933-06-10</startDate>
            <endDate>1982-12-15</endDate>
        </newspaper>
        <newspaper id="1030">
            <title>The South Australian Colonist and Settlers' Weekly Record of British, Foreign and Colonial Intelligence (London, England : 1840)</title>
            <state>National</state>
            <issn>1461426X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1030</troveUrl>
            <startDate>1840-03-10</startDate>
            <endDate>1840-09-22</endDate>
        </newspaper>
        <newspaper id="434">
            <title>Adelong and Tumut  Express and Tumbarumba Post (NSW : 1900 - 1925)</title>
            <state>New South Wales</state>
            <issn>2201408X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/434</troveUrl>
            <startDate>1900-04-06</startDate>
            <endDate>1925-12-24</endDate>
        </newspaper>
        <newspaper id="625">
            <title>Adelong and Tumut Express (NSW : 1925)</title>
            <state>New South Wales</state>
            <issn>22021345</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/625</troveUrl>
            <startDate>1925-10-09</startDate>
            <endDate>1925-12-24</endDate>
        </newspaper>
        <newspaper id="435">
            <title>Adelong Argus, Tumut and Gundagai Advertiser (NSW : 1925)</title>
            <state>New South Wales</state>
            <issn>22014101</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/435</troveUrl>
            <startDate>1925-01-06</startDate>
            <endDate>1925-10-01</endDate>
        </newspaper>
        <newspaper id="436">
            <title>Albury Banner and Wodonga Express (NSW : 1896 - 1938)</title>
            <state>New South Wales</state>
            <issn>22014128</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/436</troveUrl>
            <startDate>1896-01-03</startDate>
            <endDate>1938-12-30</endDate>
        </newspaper>
        <newspaper id="627">
            <title>Albury Banner Wodonga Express and Riverina Stock Journal (NSW : 1941)</title>
            <state>New South Wales</state>
            <issn>22023372</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/627</troveUrl>
            <startDate>1941-01-03</startDate>
            <endDate>1941-09-12</endDate>
        </newspaper>
        <newspaper id="414">
            <title>Argyle Liberal and District Recorder (NSW : 1903 - 1930)</title>
            <state>New South Wales</state>
            <issn>22013229</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/414</troveUrl>
            <startDate>1903-10-13</startDate>
            <endDate>1930-03-25</endDate>
        </newspaper>
        <newspaper id="1101">
            <title>Ariah Park News (NSW : 1923 - 1926)</title>
            <state>New South Wales</state>
            <issn>22054200</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1101</troveUrl>
            <startDate>1923-04-05</startDate>
            <endDate>1926-12-23</endDate>
        </newspaper>
        <newspaper id="439">
            <title>Arrow (Sydney, NSW : 1916 - 1933)</title>
            <state>New South Wales</state>
            <issn>22014144</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/439</troveUrl>
            <startDate>1916-07-15</startDate>
            <endDate>1933-03-10</endDate>
        </newspaper>
        <newspaper id="48">
            <title>Australasian Chronicle (Sydney, NSW : 1839 - 1843)</title>
            <state>New South Wales</state>
            <issn>18373399</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/48</troveUrl>
            <startDate>1839-08-02</startDate>
            <endDate>1843-10-07</endDate>
        </newspaper>
        <newspaper id="162">
            <title>Australian Band of Hope Journal (Sydney, NSW : 1857 - 1857)</title>
            <state>New South Wales</state>
            <issn>18388450</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/162</troveUrl>
            <startDate>1857-01-03</startDate>
            <endDate>1857-12-19</endDate>
        </newspaper>
        <newspaper id="52">
            <title>Australian Town and Country Journal (Sydney, NSW : 1870 - 1907)</title>
            <state>New South Wales</state>
            <issn>18373666</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/52</troveUrl>
            <startDate>1870-01-08</startDate>
            <endDate>1907-12-25</endDate>
        </newspaper>
        <newspaper id="671">
            <title>Balmain Observer and Western Suburbs Advertiser (NSW : 1884 - 1907)</title>
            <state>New South Wales</state>
            <issn>22024018</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/671</troveUrl>
            <startDate>1884-08-02</startDate>
            <endDate>1907-12-21</endDate>
        </newspaper>
        <newspaper id="635">
            <title>Barrier Daily Truth (Broken Hill, NSW : 1908; 1941 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023585</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/635</troveUrl>
            <startDate>1908-11-02</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="53">
            <title>Barrier Miner (Broken Hill, NSW : 1888 - 1954)</title>
            <state>New South Wales</state>
            <issn>18373100</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/53</troveUrl>
            <startDate>1889-03-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="54">
            <title>Bathurst Advocate (NSW : 1848 - 1849)</title>
            <state>New South Wales</state>
            <issn>18374026</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/54</troveUrl>
            <startDate>1848-02-05</startDate>
            <endDate>1849-09-22</endDate>
        </newspaper>
        <newspaper id="55">
            <title>Bathurst Free Press (NSW : 1849 - 1851)</title>
            <state>New South Wales</state>
            <issn>18374034</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/55</troveUrl>
            <startDate>1849-10-06</startDate>
            <endDate>1851-05-24</endDate>
        </newspaper>
        <newspaper id="56">
            <title>Bathurst Free Press and Mining Journal (NSW : 1851 - 1904)</title>
            <state>New South Wales</state>
            <issn>18374042</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/56</troveUrl>
            <startDate>1851-05-28</startDate>
            <endDate>1904-03-31</endDate>
        </newspaper>
        <newspaper id="57">
            <title>Bell's Life in Sydney and Sporting Chronicle (NSW : 1860 - 1870)</title>
            <state>New South Wales</state>
            <issn>1837364X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/57</troveUrl>
            <startDate>1860-10-13</startDate>
            <endDate>1870-12-31</endDate>
        </newspaper>
        <newspaper id="58">
            <title>Bell's Life in Sydney and Sporting Reviewer (NSW : 1845 - 1860)</title>
            <state>New South Wales</state>
            <issn>18373631</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/58</troveUrl>
            <startDate>1845-01-04</startDate>
            <endDate>1860-10-06</endDate>
        </newspaper>
        <newspaper id="912">
            <title>Blackheath Beacon (Katoomba, NSW : 1930 - 1931)</title>
            <state>New South Wales</state>
            <issn>22046151</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/912</troveUrl>
            <startDate>1930-11-14</startDate>
            <endDate>1931-03-27</endDate>
        </newspaper>
        <newspaper id="802">
            <title>Blayney West Macquarie (NSW : 1949)</title>
            <state>New South Wales</state>
            <issn>22034897</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/802</troveUrl>
            <startDate>1949-02-09</startDate>
            <endDate>1949-10-05</endDate>
        </newspaper>
        <newspaper id="908">
            <title>Blue Mountain Gazette (Katoomba, NSW : 1903 - 1904)</title>
            <state>New South Wales</state>
            <issn>22045961</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/908</troveUrl>
            <startDate>1903-01-09</startDate>
            <endDate>1904-12-30</endDate>
        </newspaper>
        <newspaper id="910">
            <title>Blue Mountains Daily (Katoomba, NSW : 1939)</title>
            <state>New South Wales</state>
            <issn>22048510</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/910</troveUrl>
            <startDate>1939-02-18</startDate>
            <endDate>1939-05-09</endDate>
        </newspaper>
        <newspaper id="636">
            <title>Bombala Times and Manaro and Coast Districts General Advertiser  (NSW : 1899 - 1905)</title>
            <state>New South Wales</state>
            <issn>22023593</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/636</troveUrl>
            <startDate>1899-01-06</startDate>
            <endDate>1905-12-29</endDate>
        </newspaper>
        <newspaper id="462">
            <title>Boorowa News (NSW : 1951 - 1954)</title>
            <state>New South Wales</state>
            <issn>22014837</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/462</troveUrl>
            <startDate>1951-01-20</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="523">
            <title>Bowral and Robertson Free Press (NSW : 1901) </title>
            <state>New South Wales</state>
            <issn>22006052</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/523</troveUrl>
            <startDate>1901-04-03</startDate>
            <endDate>1901-11-20</endDate>
        </newspaper>
        <newspaper id="524">
            <title>Bowral Free Press (NSW : 1901 - 1906)</title>
            <state>New South Wales</state>
            <issn>22006079</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/524</troveUrl>
            <startDate>1901-11-23</startDate>
            <endDate>1906-03-28</endDate>
        </newspaper>
        <newspaper id="522">
            <title>Bowral Free Press and Berrima District Intelligencer (NSW : 1884 - 1901)</title>
            <state>New South Wales</state>
            <issn>22006036</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/522</troveUrl>
            <startDate>1884-11-05</startDate>
            <endDate>1901-03-30</endDate>
        </newspaper>
        <newspaper id="521">
            <title>Bowral Free Press and Mittagong, Burrawang and Kangaloon Advocate (NSW : 1883 - 1884)</title>
            <state>New South Wales</state>
            <issn>22005994</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/521</troveUrl>
            <startDate>1883-07-07</startDate>
            <endDate>1884-03-15</endDate>
        </newspaper>
        <newspaper id="114">
            <title>Braidwood Independent (NSW : 1867)</title>
            <state>New South Wales</state>
            <issn>18374328</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/114</troveUrl>
            <startDate>1867-08-31</startDate>
            <endDate>1867-10-16</endDate>
        </newspaper>
        <newspaper id="876">
            <title>Bundarra and Tingha Advocate (NSW : 1900 - 1906)</title>
            <state>New South Wales</state>
            <issn>22042741</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/876</troveUrl>
            <startDate>1900-12-08</startDate>
            <endDate>1906-12-29</endDate>
        </newspaper>
        <newspaper id="638">
            <title>Camden News (NSW : 1895 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023658</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/638</troveUrl>
            <startDate>1895-06-13</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="427">
            <title>Canowindra Star and Eugowra News (NSW : 1903 - 1907; 1910 - 1911; 1914 - 1922)</title>
            <state>New South Wales</state>
            <issn>22013369</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/427</troveUrl>
            <startDate>1903-07-17</startDate>
            <endDate>1922-12-15</endDate>
        </newspaper>
        <newspaper id="744">
            <title>Canowindra Star and Woodstock Recorder (NSW : 1902 - 1903)</title>
            <state>New South Wales</state>
            <issn>22030522</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/744</troveUrl>
            <startDate>1902-04-04</startDate>
            <endDate>1903-07-10</endDate>
        </newspaper>
        <newspaper id="710">
            <title>Catholic Freeman's Journal (Sydney, NSW : 1932 - 1942)</title>
            <state>New South Wales</state>
            <issn>22028943</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/710</troveUrl>
            <startDate>1932-10-27</startDate>
            <endDate>1942-02-26</endDate>
        </newspaper>
        <newspaper id="711">
            <title>Catholic Weekly (Sydney, NSW : 1942 - 1954)</title>
            <state>New South Wales</state>
            <issn>18330460</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/711</troveUrl>
            <startDate>1942-03-05</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1186">
            <title>Chinese Republic News (Sydney, NSW : 1914 - 1937)</title>
            <state>New South Wales</state>
            <issn>22059393</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1186</troveUrl>
            <startDate>1914-02-21</startDate>
            <endDate>1937-12-25</endDate>
        </newspaper>
        <newspaper id="996">
            <title>Citizen Soldier (Sydney, NSW : 1942)</title>
            <state>New South Wales</state>
            <issn>22048812</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/996</troveUrl>
            <startDate>1942-08-21</startDate>
            <endDate>1942-11-02</endDate>
        </newspaper>
        <newspaper id="104">
            <title>Clarence and Richmond Examiner (Grafton, NSW : 1859)</title>
            <state>New South Wales</state>
            <issn>18373941</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/104</troveUrl>
            <startDate>1859-07-26</startDate>
            <endDate>1859-09-06</endDate>
        </newspaper>
        <newspaper id="64">
            <title>Clarence and Richmond Examiner (Grafton, NSW : 1889 - 1915)</title>
            <state>New South Wales</state>
            <issn>18373968</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/64</troveUrl>
            <startDate>1889-07-27</startDate>
            <endDate>1915-06-29</endDate>
        </newspaper>
        <newspaper id="65">
            <title>Clarence and Richmond Examiner and New England Advertiser (Grafton, NSW : 1859 - 1889)</title>
            <state>New South Wales</state>
            <issn>1837395X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/65</troveUrl>
            <startDate>1859-11-08</startDate>
            <endDate>1889-12-31</endDate>
        </newspaper>
        <newspaper id="626">
            <title>Clear Hills Standard and Daysdale and Saverneke Times (NSW : 1914)</title>
            <state>New South Wales</state>
            <issn>22022147</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/626</troveUrl>
            <startDate>1914-06-20</startDate>
            <endDate>1914-06-20</endDate>
        </newspaper>
        <newspaper id="989">
            <title>Coffs Harbour Advocate (NSW : 1907 - 1942; 1946 - 1954)</title>
            <state>New South Wales</state>
            <issn>22047697</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/989</troveUrl>
            <startDate>1907-02-12</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1013">
            <title>Commercial Journal and Advertiser (Sydney, NSW : 1835 - 1840)</title>
            <state>New South Wales</state>
            <issn>14401894</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1013</troveUrl>
            <startDate>1835-07-06</startDate>
            <endDate>1840-12-30</endDate>
        </newspaper>
        <newspaper id="1016">
            <title>Commercial Journal and General Advertiser (Sydney, NSW : 1845)</title>
            <state>New South Wales</state>
            <issn>14401924</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1016</troveUrl>
            <startDate>1845-04-05</startDate>
            <endDate>1845-08-02</endDate>
        </newspaper>
        <newspaper id="997">
            <title>Communist (Sydney, NSW : 1921 - 1923)</title>
            <state>New South Wales</state>
            <issn>22048456</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/997</troveUrl>
            <startDate>1921-05-06</startDate>
            <endDate>1923-06-15</endDate>
        </newspaper>
        <newspaper id="998">
            <title>Communist Review (Sydney, NSW : 1941 - 1943)</title>
            <state>New South Wales</state>
            <issn>22048839</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/998</troveUrl>
            <startDate>1941-07-01</startDate>
            <endDate>1943-06-01</endDate>
        </newspaper>
        <newspaper id="1188">
            <title>Construction (Sydney, NSW : 1938 - 1954)</title>
            <state>New South Wales</state>
            <issn>22062475</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1188</troveUrl>
            <startDate>1938-05-18</startDate>
            <endDate>1954-12-29</endDate>
        </newspaper>
        <newspaper id="449">
            <title>Construction and Local Government Journal (Sydney, NSW : 1913 - 1930)</title>
            <state>New South Wales</state>
            <issn>22015086</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/449</troveUrl>
            <startDate>1913-11-10</startDate>
            <endDate>1930-07-23</endDate>
        </newspaper>
        <newspaper id="630">
            <title>Construction and Real Estate Journal (Sydney, NSW : 1930 - 1938)</title>
            <state>New South Wales</state>
            <issn>22020470</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/630</troveUrl>
            <startDate>1930-07-30</startDate>
            <endDate>1938-05-11</endDate>
        </newspaper>
        <newspaper id="639">
            <title>Cootamundra Herald (NSW : 1877 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023577</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/639</troveUrl>
            <startDate>1877-01-30</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="676">
            <title>Country Life Stock and Station Journal (Sydney, NSW : 1924 - 1925)</title>
            <state>New South Wales</state>
            <issn>22025103</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/676</troveUrl>
            <startDate>1924-03-04</startDate>
            <endDate>1925-04-28</endDate>
        </newspaper>
        <newspaper id="420">
            <title>Cowra Free Press (NSW : 1911 - 1921)</title>
            <state>New South Wales</state>
            <issn>22013385</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/420</troveUrl>
            <startDate>1911-01-07</startDate>
            <endDate>1921-12-24</endDate>
        </newspaper>
        <newspaper id="1177">
            <title>Crookwell Gazette (NSW : 1885 - 1954)</title>
            <state>New South Wales</state>
            <issn>22059679</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1177</troveUrl>
            <startDate>1885-10-16</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="687">
            <title>Daily Advertiser (Wagga Wagga, NSW : 1911 - 1954)</title>
            <state>New South Wales</state>
            <issn>13228110</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/687</troveUrl>
            <startDate>1911-01-04</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="641">
            <title>Daily Commercial News and Shipping List (Sydney, NSW : 1891 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023666</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/641</troveUrl>
            <startDate>1891-04-13</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1005">
            <title>Daily Examiner (Grafton, NSW : 1915 - 1954)</title>
            <state>New South Wales</state>
            <issn>22049282</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1005</troveUrl>
            <startDate>1915-07-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="432">
            <title>Daily Observer (Tamworth, NSW : 1917 - 1920)</title>
            <state>New South Wales</state>
            <issn>22013989</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/432</troveUrl>
            <startDate>1917-01-01</startDate>
            <endDate>1920-12-31</endDate>
        </newspaper>
        <newspaper id="628">
            <title>Daily Witness (Young, NSW : 1923 - 1924)</title>
            <state>New South Wales</state>
            <issn>22023380</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/628</troveUrl>
            <startDate>1923-11-05</startDate>
            <endDate>1924-06-20</endDate>
        </newspaper>
        <newspaper id="532">
            <title>Delegate Argus (NSW : 1906 - 1943)</title>
            <state>New South Wales</state>
            <issn>22015108</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/532</troveUrl>
            <startDate>1906-05-12</startDate>
            <endDate>1943-06-24</endDate>
        </newspaper>
        <newspaper id="450">
            <title>Delegate Argus and Border Post (NSW : 1895 - 1906)</title>
            <state>New South Wales</state>
            <issn>22018506</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/450</troveUrl>
            <startDate>1895-10-16</startDate>
            <endDate>1906-05-05</endDate>
        </newspaper>
        <newspaper id="440">
            <title>Democrat (Lithgow, NSW : 1915 - 1916)</title>
            <state>New South Wales</state>
            <issn>22014012</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/440</troveUrl>
            <startDate>1915-06-05</startDate>
            <endDate>1916-06-17</endDate>
        </newspaper>
        <newspaper id="507">
            <title>Direct Action (Sydney, NSW : 1914 - 1930)</title>
            <state>New South Wales</state>
            <issn>22016252</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/507</troveUrl>
            <startDate>1914-01-31</startDate>
            <endDate>1930-11-29</endDate>
        </newspaper>
        <newspaper id="1183">
            <title>Dubbo Dispatch and Wellington Independent (NSW : 1887 - 1932)</title>
            <state>New South Wales</state>
            <issn>22060227</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1183</troveUrl>
            <startDate>1887-02-08</startDate>
            <endDate>1932-08-12</endDate>
        </newspaper>
        <newspaper id="643">
            <title>Dungog Chronicle : Durham and Gloucester Advertiser (NSW : 1894 - 1954)</title>
            <state>New South Wales</state>
            <issn>13215477</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/643</troveUrl>
            <startDate>1894-01-05</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1044">
            <title>Dutch Australian Weekly (Sydney, NSW : 1951 - 1993)</title>
            <state>New South Wales</state>
            <issn>22051902</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1044</troveUrl>
            <startDate>1951-10-05</startDate>
            <endDate>1993-07-19</endDate>
        </newspaper>
        <newspaper id="1045">
            <title>Dutch Weekly (Sydney, NSW : 1993 - 2004)</title>
            <state>New South Wales</state>
            <issn>22051937</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1045</troveUrl>
            <startDate>1993-08-02</startDate>
            <endDate>2004-10-25</endDate>
        </newspaper>
        <newspaper id="480">
            <title>Eden Free Press and Eden District Advertiser (NSW : 1899)</title>
            <state>New South Wales</state>
            <issn>22015469</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/480</troveUrl>
            <startDate>1899-01-04</startDate>
            <endDate>1899-06-28</endDate>
        </newspaper>
        <newspaper id="67">
            <title>Empire (Sydney, NSW : 1850 - 1875)</title>
            <state>New South Wales</state>
            <issn>18381057</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/67</troveUrl>
            <startDate>1850-12-28</startDate>
            <endDate>1875-02-09</endDate>
        </newspaper>
        <newspaper id="508">
            <title>Evening News (Sydney, NSW : 1869 - 1931)</title>
            <state>New South Wales</state>
            <issn>22016279</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/508</troveUrl>
            <startDate>1869-11-06</startDate>
            <endDate>1931-03-21</endDate>
        </newspaper>
        <newspaper id="381">
            <title>Examiner (Kiama, NSW : 1859 - 1862)</title>
            <state>New South Wales</state>
            <issn>22007814</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/381</troveUrl>
            <startDate>1859-12-17</startDate>
            <endDate>1862-12-30</endDate>
        </newspaper>
        <newspaper id="1104">
            <title>Filmnews (Sydney, NSW : 1975 - 1995)</title>
            <state>New South Wales</state>
            <issn>22054294</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1104</troveUrl>
            <startDate>1975-02-01</startDate>
            <endDate>1995-07-01</endDate>
        </newspaper>
        <newspaper id="422">
            <title>Forbes Times (NSW : 1912 - 1920)</title>
            <state>New South Wales</state>
            <issn>22013415</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/422</troveUrl>
            <startDate>1912-01-03</startDate>
            <endDate>1920-03-31</endDate>
        </newspaper>
        <newspaper id="1014">
            <title>Free Press and Commercial Journal (Sydney, NSW : 1841)</title>
            <state>New South Wales</state>
            <issn>14401908</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1014</troveUrl>
            <startDate>1841-01-06</startDate>
            <endDate>1841-06-30</endDate>
        </newspaper>
        <newspaper id="464">
            <title>Freeman's Journal (Sydney, NSW : 1850 - 1932)</title>
            <state>New South Wales</state>
            <issn>2201571X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/464</troveUrl>
            <startDate>1850-06-27</startDate>
            <endDate>1932-10-20</endDate>
        </newspaper>
        <newspaper id="409">
            <title>Gilgandra Weekly (NSW : 1915 - 1929)</title>
            <state>New South Wales</state>
            <issn>22013121</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/409</troveUrl>
            <startDate>1915-10-22</startDate>
            <endDate>1929-11-14</endDate>
        </newspaper>
        <newspaper id="411">
            <title>Gilgandra Weekly (NSW : 1942 - 1955)</title>
            <state>New South Wales</state>
            <issn>22013164</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/411</troveUrl>
            <startDate>1942-10-15</startDate>
            <endDate>1955-12-21</endDate>
        </newspaper>
        <newspaper id="410">
            <title>Gilgandra Weekly and Castlereagh (NSW : 1929 - 1942)</title>
            <state>New South Wales</state>
            <issn>22013148</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/410</troveUrl>
            <startDate>1929-11-21</startDate>
            <endDate>1942-10-08</endDate>
        </newspaper>
        <newspaper id="903">
            <title>Glen Innes Examiner (NSW : 1908 - 1954)</title>
            <state>New South Wales</state>
            <issn>22047336</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/903</troveUrl>
            <startDate>1908-07-21</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="902">
            <title>Glen Innes Examiner and General Advertiser (NSW : 1874 - 1908)</title>
            <state>New South Wales</state>
            <issn>22047484</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/902</troveUrl>
            <startDate>1874-10-12</startDate>
            <endDate>1908-07-17</endDate>
        </newspaper>
        <newspaper id="357">
            <title>Globe (Sydney, NSW : 1885 - 1886)</title>
            <state>New South Wales</state>
            <issn>22007016</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/357</troveUrl>
            <startDate>1885-11-16</startDate>
            <endDate>1886-06-30</endDate>
        </newspaper>
        <newspaper id="358">
            <title>Globe (Sydney, NSW : 1911 - 1914)</title>
            <state>New South Wales</state>
            <issn>22007032</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/358</troveUrl>
            <startDate>1911-04-05</startDate>
            <endDate>1914-10-17</endDate>
        </newspaper>
        <newspaper id="688">
            <title>Gosford Times and Gosford and Wollombi Express (NSW : 1892 - 1906)</title>
            <state>New South Wales</state>
            <issn>22025901</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/688</troveUrl>
            <startDate>1892-09-23</startDate>
            <endDate>1906-05-18</endDate>
        </newspaper>
        <newspaper id="415">
            <title>Goulburn Chronicle and Southern Advertiser (NSW : 1860 - 1861)</title>
            <state>New South Wales</state>
            <issn>22013245</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/415</troveUrl>
            <startDate>1860-03-28</startDate>
            <endDate>1861-03-13</endDate>
        </newspaper>
        <newspaper id="368">
            <title>Goulburn Evening Penny Post (NSW : 1881 - 1940)</title>
            <state>New South Wales</state>
            <issn>22007342</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/368</troveUrl>
            <startDate>1881-01-04</startDate>
            <endDate>1940-05-03</endDate>
        </newspaper>
        <newspaper id="369">
            <title>Goulburn Evening Post (NSW : 1940 - 1954)</title>
            <state>New South Wales</state>
            <issn>22007369</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/369</troveUrl>
            <startDate>1940-05-06</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="365">
            <title>Goulburn Herald (NSW : 1860 - 1864)</title>
            <state>New South Wales</state>
            <issn>2200727X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/365</troveUrl>
            <startDate>1860-01-04</startDate>
            <endDate>1864-03-30</endDate>
        </newspaper>
        <newspaper id="367">
            <title>Goulburn Herald (NSW : 1881 - 1907)</title>
            <state>New South Wales</state>
            <issn>22007318</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/367</troveUrl>
            <startDate>1881-04-02</startDate>
            <endDate>1907-12-30</endDate>
        </newspaper>
        <newspaper id="526">
            <title>Government Gazette of the State of New South Wales (Sydney, NSW : 1901 - 2001)</title>
            <state>New South Wales</state>
            <issn>22017534</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/526</troveUrl>
            <startDate>1901-01-01</startDate>
            <endDate>2001-03-31</endDate>
        </newspaper>
        <newspaper id="704">
            <title>Guang yi hua bao= The Chinese Australian Herald (Sydney, NSW : 1894 - 1923)</title>
            <state>New South Wales</state>
            <issn>22026223</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/704</troveUrl>
            <startDate>1894-09-01</startDate>
            <endDate>1923-08-25</endDate>
        </newspaper>
        <newspaper id="888">
            <title>Guyra Argus (NSW : 1902 - 1954)</title>
            <state>New South Wales</state>
            <issn>22042938</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/888</troveUrl>
            <startDate>1902-07-30</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="176">
            <title>Hawkesbury Advocate (Windsor, NSW : 1899 - 1900)</title>
            <state>New South Wales</state>
            <issn>18389341</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/176</troveUrl>
            <startDate>1899-10-06</startDate>
            <endDate>1900-12-07</endDate>
        </newspaper>
        <newspaper id="177">
            <title>Hawkesbury Chronicle and Farmers Advocate (Windsor, NSW : 1881 - 1888)</title>
            <state>New South Wales</state>
            <issn>1838935X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/177</troveUrl>
            <startDate>1881-05-28</startDate>
            <endDate>1888-05-26</endDate>
        </newspaper>
        <newspaper id="178">
            <title>Hawkesbury Courier and Agricultural and General Advertiser (Windsor, NSW : 1844 - 1846)</title>
            <state>New South Wales</state>
            <issn>18389638</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/178</troveUrl>
            <startDate>1844-07-11</startDate>
            <endDate>1846-11-05</endDate>
        </newspaper>
        <newspaper id="179">
            <title>Hawkesbury Herald (Windsor, NSW : 1902 - 1945)</title>
            <state>New South Wales</state>
            <issn>18389376</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/179</troveUrl>
            <startDate>1902-05-01</startDate>
            <endDate>1945-06-27</endDate>
        </newspaper>
        <newspaper id="279">
            <title>Il Giornale Italiano (Sydney, NSW : 1932 - 1940)</title>
            <state>New South Wales</state>
            <issn>18398529</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/279</troveUrl>
            <startDate>1932-03-19</startDate>
            <endDate>1940-06-05</endDate>
        </newspaper>
        <newspaper id="670">
            <title>Illawarra Daily Mercury (Wollongong, NSW : 1950 - 1954)</title>
            <state>New South Wales</state>
            <issn>22024050</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/670</troveUrl>
            <startDate>1950-01-09</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="669">
            <title>Illawarra Mercury (Wollongong, NSW : 1856 - 1950)</title>
            <state>New South Wales</state>
            <issn>22024034</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/669</troveUrl>
            <startDate>1856-01-07</startDate>
            <endDate>1950-01-05</endDate>
        </newspaper>
        <newspaper id="107">
            <title>Illustrated Sydney News (NSW : 1853 - 1872)</title>
            <state>New South Wales</state>
            <issn>18365329</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/107</troveUrl>
            <startDate>1853-10-08</startDate>
            <endDate>1872-03-19</endDate>
        </newspaper>
        <newspaper id="804">
            <title>Illustrated Sydney News (NSW : 1881 - 1894)</title>
            <state>New South Wales</state>
            <issn>22035419</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/804</troveUrl>
            <startDate>1881-12-24</startDate>
            <endDate>1894-02-10</endDate>
        </newspaper>
        <newspaper id="803">
            <title>Illustrated Sydney News and New South Wales Agriculturalist and Grazier (NSW : 1872 - 1881)</title>
            <state>New South Wales</state>
            <issn>22035397</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/803</troveUrl>
            <startDate>1872-04-13</startDate>
            <endDate>1881-11-26</endDate>
        </newspaper>
        <newspaper id="624">
            <title>Intelligence (Bowral, NSW : 1884)</title>
            <state>New South Wales</state>
            <issn>22022937</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/624</troveUrl>
            <startDate>1884-10-08</startDate>
            <endDate>1884-10-29</endDate>
        </newspaper>
        <newspaper id="352">
            <title>Irrigation Record (Leeton, NSW : 1913 - 1917)</title>
            <state>New South Wales</state>
            <issn>22004076</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/352</troveUrl>
            <startDate>1913-02-15</startDate>
            <endDate>1917-06-15</endDate>
        </newspaper>
        <newspaper id="645">
            <title>Jerilderie Herald and Urana Advertiser (NSW : 1898 - 1958)</title>
            <state>New South Wales</state>
            <issn>22023674</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/645</troveUrl>
            <startDate>1898-01-07</startDate>
            <endDate>1958-12-18</endDate>
        </newspaper>
        <newspaper id="885">
            <title>Justice (Narrabri, NSW : 1891)</title>
            <state>New South Wales</state>
            <issn>22042911</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/885</troveUrl>
            <startDate>1891-12-05</startDate>
            <endDate>1891-12-05</endDate>
        </newspaper>
        <newspaper id="906">
            <title>Katoomba Times (NSW : 1889 - 1894)</title>
            <state>New South Wales</state>
            <issn>22045945</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/906</troveUrl>
            <startDate>1889-05-25</startDate>
            <endDate>1894-06-15</endDate>
        </newspaper>
        <newspaper id="380">
            <title>Kiama Examiner (NSW : 1858 - 1859)</title>
            <state>New South Wales</state>
            <issn>22007792</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/380</troveUrl>
            <startDate>1858-12-18</startDate>
            <endDate>1859-12-10</endDate>
        </newspaper>
        <newspaper id="363">
            <title>Kiama Independent (NSW : 1947 - 1954)</title>
            <state>New South Wales</state>
            <issn>22007245</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/363</troveUrl>
            <startDate>1947-04-02</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="388">
            <title>Kiama Reporter (NSW : 1886 - 1887)</title>
            <state>New South Wales</state>
            <issn>22010181</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/388</troveUrl>
            <startDate>1886-07-14</startDate>
            <endDate>1887-08-06</endDate>
        </newspaper>
        <newspaper id="509">
            <title>Labor News (Sydney, NSW : 1918 - 1924)</title>
            <state>New South Wales</state>
            <issn>22016295</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/509</troveUrl>
            <startDate>1918-10-12</startDate>
            <endDate>1924-01-26</endDate>
        </newspaper>
        <newspaper id="1153">
            <title>Lachlander and Condobolin and Western Districts Recorder (NSW : 1899 - 1952)</title>
            <state>New South Wales</state>
            <issn>22056335</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1153</troveUrl>
            <startDate>1899-01-06</startDate>
            <endDate>1952-07-08</endDate>
        </newspaper>
        <newspaper id="829">
            <title>Le Courrier Australien (Sydney, NSW : 1892 - 2011)</title>
            <state>New South Wales</state>
            <issn>22038264</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/829</troveUrl>
            <startDate>1892-04-30</startDate>
            <endDate>2011-04-01</endDate>
        </newspaper>
        <newspaper id="423">
            <title>Leader (Orange, NSW : 1912 - 1922)</title>
            <state>New South Wales</state>
            <issn>22013431</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/423</troveUrl>
            <startDate>1912-01-02</startDate>
            <endDate>1922-03-31</endDate>
        </newspaper>
        <newspaper id="1176">
            <title>Lithgow Mercury (NSW : 1898 - 1954)</title>
            <state>New South Wales</state>
            <issn>13289667</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1176</troveUrl>
            <startDate>1898-01-07</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="120">
            <title>Liverpool Herald (NSW : 1897 - 1907)</title>
            <state>New South Wales</state>
            <issn>18381065</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/120</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1912-05-16</endDate>
        </newspaper>
        <newspaper id="183">
            <title>Liverpool News (NSW : 1937 - 1941)</title>
            <state>New South Wales</state>
            <issn>18387276</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/183</troveUrl>
            <startDate>1937-04-15</startDate>
            <endDate>1941-12-24</endDate>
        </newspaper>
        <newspaper id="801">
            <title>Man on the Land (Gosford, NSW : 1936 - 1938)</title>
            <state>New South Wales</state>
            <issn>22034498</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/801</troveUrl>
            <startDate>1936-08-04</startDate>
            <endDate>1938-05-24</endDate>
        </newspaper>
        <newspaper id="1006">
            <title>Manilla Express (NSW : 1899 - 1954)</title>
            <state>New South Wales</state>
            <issn>22049320</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1006</troveUrl>
            <startDate>1899-01-14</startDate>
            <endDate>1954-12-14</endDate>
        </newspaper>
        <newspaper id="280">
            <title>Meie Kodu = Our Home (Sydney, NSW : 1949 - 1954)</title>
            <state>New South Wales</state>
            <issn>18398472</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/280</troveUrl>
            <startDate>1949-08-19</startDate>
            <endDate>1955-09-29</endDate>
        </newspaper>
        <newspaper id="355">
            <title>Miners' Advocate and Northumberland Recorder (Newcastle, NSW : 1873 - 1876)</title>
            <state>New South Wales</state>
            <issn>22006958</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/355</troveUrl>
            <startDate>1873-12-20</startDate>
            <endDate>1876-04-01</endDate>
        </newspaper>
        <newspaper id="424">
            <title>Molong Argus (NSW : 1896 - 1921)</title>
            <state>New South Wales</state>
            <issn>22013458</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/424</troveUrl>
            <startDate>1896-01-24</startDate>
            <endDate>1921-12-23</endDate>
        </newspaper>
        <newspaper id="425">
            <title>Molong Express and Western District Advertiser (NSW : 1887 - 1954)</title>
            <state>New South Wales</state>
            <issn>22013474</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/425</troveUrl>
            <startDate>1887-10-08</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="494">
            <title>Moree Gwydir Examiner and General Advertiser (NSW : 1901 - 1940)</title>
            <state>New South Wales</state>
            <issn>22016163</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/494</troveUrl>
            <startDate>1901-09-07</startDate>
            <endDate>1940-12-19</endDate>
        </newspaper>
        <newspaper id="78">
            <title>Morning Chronicle (Sydney, NSW : 1843 - 1846)</title>
            <state>New South Wales</state>
            <issn>18373402</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/78</troveUrl>
            <startDate>1843-10-11</startDate>
            <endDate>1846-07-08</endDate>
        </newspaper>
        <newspaper id="648">
            <title>Mudgee Guardian and North-Western Representative (NSW : 1890 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023690</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/648</troveUrl>
            <startDate>1890-05-05</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="495">
            <title>Mullumbimby Star (NSW : 1906 - 1936)</title>
            <state>New South Wales</state>
            <issn>2201618X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/495</troveUrl>
            <startDate>1906-02-03</startDate>
            <endDate>1936-03-25</endDate>
        </newspaper>
        <newspaper id="673">
            <title>Mullumbimby Star and Byron Bay-Bangalow Advocate (NSW : 1936)</title>
            <state>New South Wales</state>
            <issn>22023453</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/673</troveUrl>
            <startDate>1936-04-03</startDate>
            <endDate>1936-12-24</endDate>
        </newspaper>
        <newspaper id="1154">
            <title>Murrumburrah Signal and County of Harden Advocate (NSW : 1881 - 1947)</title>
            <state>New South Wales</state>
            <issn>22055967</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1154</troveUrl>
            <startDate>1881-08-06</startDate>
            <endDate>1947-01-09</endDate>
        </newspaper>
        <newspaper id="1155">
            <title>Nambucca and Bellinger News (NSW : 1911 - 1945)</title>
            <state>New South Wales</state>
            <issn>22056467</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1155</troveUrl>
            <startDate>1911-11-24</startDate>
            <endDate>1945-03-23</endDate>
        </newspaper>
        <newspaper id="1156">
            <title>Nambucca News (NSW : 1909 - 1911)</title>
            <state>New South Wales</state>
            <issn>22056440</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1156</troveUrl>
            <startDate>1909-01-08</startDate>
            <endDate>1913-12-26</endDate>
        </newspaper>
        <newspaper id="431">
            <title>Narandera Argus and Riverina Advertiser (NSW : 1893 - 1953)</title>
            <state>New South Wales</state>
            <issn>22014233</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/431</troveUrl>
            <startDate>1893-12-30</startDate>
            <endDate>1953-12-31</endDate>
        </newspaper>
        <newspaper id="430">
            <title>Narromine News and Trangie Advocate (NSW : 1898 - 1955)</title>
            <state>New South Wales</state>
            <issn>2201425X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/430</troveUrl>
            <startDate>1898-01-28</startDate>
            <endDate>1955-01-18</endDate>
        </newspaper>
        <newspaper id="650">
            <title>National Advocate (Bathurst, NSW : 1889 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023704</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/650</troveUrl>
            <startDate>1889-09-28</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="350">
            <title>Nepean Times (Penrith, NSW : 1882 - 1962)</title>
            <state>New South Wales</state>
            <issn>22004416</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/350</troveUrl>
            <startDate>1882-03-03</startDate>
            <endDate>1962-11-29</endDate>
        </newspaper>
        <newspaper id="525">
            <title>New South Wales Government Gazette (Sydney, NSW : 1832 - 1900)</title>
            <state>New South Wales</state>
            <issn>22017518</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/525</troveUrl>
            <startDate>1832-03-07</startDate>
            <endDate>1900-12-31</endDate>
        </newspaper>
        <newspaper id="356">
            <title>Newcastle Morning Herald and Miners' Advocate (NSW : 1876 - 1954) </title>
            <state>New South Wales</state>
            <issn>22006966</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/356</troveUrl>
            <startDate>1876-04-05</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="878">
            <title>North West Champion (Moree, NSW : 1915 - 1954)</title>
            <state>New South Wales</state>
            <issn>22042849</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/878</troveUrl>
            <startDate>1915-06-08</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="81">
            <title>Northern Star (Lismore, NSW : 1876 - 1954)</title>
            <state>New South Wales</state>
            <issn>10366768</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/81</troveUrl>
            <startDate>1876-05-13</startDate>
            <endDate>1955-09-02</endDate>
        </newspaper>
        <newspaper id="496">
            <title>Northern Times (Newcastle, NSW : 1857 - 1918)</title>
            <state>New South Wales</state>
            <issn>22016589</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/496</troveUrl>
            <startDate>1857-01-03</startDate>
            <endDate>1918-03-22</endDate>
        </newspaper>
        <newspaper id="1008">
            <title>Out Of Work (Sydney, NSW : 1922)</title>
            <state>New South Wales</state>
            <issn>22049592</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1008</troveUrl>
            <startDate>1922-06-16</startDate>
            <endDate>1922-07-07</endDate>
        </newspaper>
        <newspaper id="1018">
            <title>Parramatta Chronicle and Cumberland General Advertiser (NSW : 1843 - 1845)</title>
            <state>New South Wales</state>
            <issn>14403439</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1018</troveUrl>
            <startDate>1843-12-30</startDate>
            <endDate>1845-09-27</endDate>
        </newspaper>
        <newspaper id="1000">
            <title>Party (Sydney, NSW : 1942)</title>
            <state>New South Wales</state>
            <issn>22048871</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1000</troveUrl>
            <startDate>1942-06-01</startDate>
            <endDate>1942-06-01</endDate>
        </newspaper>
        <newspaper id="1001">
            <title>Party Builder (Sydney, NSW : 1942)</title>
            <state>New South Wales</state>
            <issn>22048855</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1001</troveUrl>
            <startDate>1942-07-01</startDate>
            <endDate>1942-11-01</endDate>
        </newspaper>
        <newspaper id="497">
            <title>People (Sydney, NSW : 1900 - 1919)</title>
            <state>New South Wales</state>
            <issn>22014829</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/497</troveUrl>
            <startDate>1900-12-29</startDate>
            <endDate>1919-03-01</endDate>
        </newspaper>
        <newspaper id="84">
            <title>Queanbeyan Age (NSW : 1867 - 1904)</title>
            <state>New South Wales</state>
            <issn>1837428X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/84</troveUrl>
            <startDate>1867-07-05</startDate>
            <endDate>1903-12-29</endDate>
        </newspaper>
        <newspaper id="86">
            <title>Queanbeyan Age (NSW : 1907 - 1915)</title>
            <state>New South Wales</state>
            <issn>18374298</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/86</troveUrl>
            <startDate>1908-01-07</startDate>
            <endDate>1914-12-25</endDate>
        </newspaper>
        <newspaper id="83">
            <title>Queanbeyan Age and General Advertiser (NSW : 1864 - 1867)</title>
            <state>New South Wales</state>
            <issn>18374301</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/83</troveUrl>
            <startDate>1864-05-19</startDate>
            <endDate>1867-06-28</endDate>
        </newspaper>
        <newspaper id="87">
            <title>Queanbeyan Age and Queanbeyan Observer (NSW : 1915 - 1927)</title>
            <state>New South Wales</state>
            <issn>18374336</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/87</troveUrl>
            <startDate>1915-01-05</startDate>
            <endDate>1926-12-31</endDate>
        </newspaper>
        <newspaper id="119">
            <title>Queanbeyan-Canberra Advocate (NSW : 1905 - 1927)</title>
            <state>New South Wales</state>
            <issn>18380816</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/119</troveUrl>
            <startDate>1925-01-08</startDate>
            <endDate>1926-12-30</endDate>
        </newspaper>
        <newspaper id="654">
            <title>Raymond Terrace Examiner and Lower Hunter and Port Stephens Advertiser (NSW : 1912 - 1955)</title>
            <state>New South Wales</state>
            <issn>22023739</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/654</troveUrl>
            <startDate>1912-06-14</startDate>
            <endDate>1955-12-22</endDate>
        </newspaper>
        <newspaper id="499">
            <title>Referee (Sydney, NSW : 1886 - 1939)</title>
            <state>New South Wales</state>
            <issn>22016635</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/499</troveUrl>
            <startDate>1886-10-20</startDate>
            <endDate>1939-08-31</endDate>
        </newspaper>
        <newspaper id="389">
            <title>Reporter and Illawarra Journal (Kiama, NSW : 1887 - 1894)</title>
            <state>New South Wales</state>
            <issn>2201019X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/389</troveUrl>
            <startDate>1887-08-10</startDate>
            <endDate>1894-12-29</endDate>
        </newspaper>
        <newspaper id="655">
            <title>Riverina Recorder (Balranald, Moulamein, NSW : 1887 - 1944)</title>
            <state>New South Wales</state>
            <issn>22023747</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/655</troveUrl>
            <startDate>1887-01-05</startDate>
            <endDate>1944-12-23</endDate>
        </newspaper>
        <newspaper id="726">
            <title>Riverina Times, Hay Standard and Journal of Water Conservation (Hay, NSW : 1900 - 1902)</title>
            <state>New South Wales</state>
            <issn>22030565</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/726</troveUrl>
            <startDate>1900-11-29</startDate>
            <endDate>1902-09-29</endDate>
        </newspaper>
        <newspaper id="311">
            <title>Riverine Herald (Echuca, Vic. : Moama, NSW : 1869 - 1954)</title>
            <state>New South Wales</state>
            <issn>2200159X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/311</troveUrl>
            <startDate>1869-01-09</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="530">
            <title>Robertson Advocate (NSW : 1894 - 1923)</title>
            <state>New South Wales</state>
            <issn>22017402</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/530</troveUrl>
            <startDate>1894-12-08</startDate>
            <endDate>1923-12-28</endDate>
        </newspaper>
        <newspaper id="531">
            <title>Robertson Mail (NSW : 1924 - 1930)</title>
            <state>New South Wales</state>
            <issn>22017429</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/531</troveUrl>
            <startDate>1924-01-04</startDate>
            <endDate>1929-12-31</endDate>
        </newspaper>
        <newspaper id="529">
            <title>Saturday Referee and the Arrow (Sydney, NSW : 1912 - 1916)</title>
            <state>New South Wales</state>
            <issn>2201747X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/529</troveUrl>
            <startDate>1912-10-05</startDate>
            <endDate>1916-07-08</endDate>
        </newspaper>
        <newspaper id="281">
            <title>Singleton Argus (NSW : 1880 - 1954) </title>
            <state>New South Wales</state>
            <issn>13215434</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/281</troveUrl>
            <startDate>1880-07-14</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1042">
            <title>Society (Sydney, NSW : 1887)</title>
            <state>New South Wales</state>
            <issn>22050833</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1042</troveUrl>
            <startDate>1887-01-29</startDate>
            <endDate>1887-01-29</endDate>
        </newspaper>
        <newspaper id="691">
            <title>South Coast Times and Wollongong Argus (NSW : 1900 - 1954)</title>
            <state>New South Wales</state>
            <issn>22025987</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/691</troveUrl>
            <startDate>1900-01-06</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="416">
            <title>Southern Argus (Goulburn, NSW : 1881 - 1885)</title>
            <state>New South Wales</state>
            <issn>22013261</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/416</troveUrl>
            <startDate>1881-06-11</startDate>
            <endDate>1885-12-19</endDate>
        </newspaper>
        <newspaper id="418">
            <title>Southern Morning Herald (Goulburn, NSW : 1920 - 1923)</title>
            <state>New South Wales</state>
            <issn>2201330X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/418</troveUrl>
            <startDate>1920-10-18</startDate>
            <endDate>1923-12-31</endDate>
        </newspaper>
        <newspaper id="658">
            <title>Southern Star (Bega, NSW : 1900 - 1923)</title>
            <state>New South Wales</state>
            <issn>22023437</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/658</troveUrl>
            <startDate>1900-06-06</startDate>
            <endDate>1923-09-26</endDate>
        </newspaper>
        <newspaper id="623">
            <title>Sunday News (Sydney, NSW : 1919)</title>
            <state>New South Wales</state>
            <issn>22022007</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/623</troveUrl>
            <startDate>1919-04-27</startDate>
            <endDate>1919-06-29</endDate>
        </newspaper>
        <newspaper id="505">
            <title>Sunday Times (Sydney, NSW : 1895 - 1930)</title>
            <state>New South Wales</state>
            <issn>2201621X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/505</troveUrl>
            <startDate>1895-01-06</startDate>
            <endDate>1930-06-01</endDate>
        </newspaper>
        <newspaper id="94">
            <title>Sydney Chronicle (NSW : 1846 - 1848)</title>
            <state>New South Wales</state>
            <issn>18373410</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/94</troveUrl>
            <startDate>1846-07-11</startDate>
            <endDate>1848-09-30</endDate>
        </newspaper>
        <newspaper id="1015">
            <title>Sydney Free Press (NSW : 1841 - 1842)</title>
            <state>New South Wales</state>
            <issn>14401916</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1015</troveUrl>
            <startDate>1841-07-03</startDate>
            <endDate>1842-06-30</endDate>
        </newspaper>
        <newspaper id="693">
            <title>Sydney General Trade List (NSW : 1828 - 1829)</title>
            <state>New South Wales</state>
            <issn>22026088</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/693</troveUrl>
            <startDate>1828-05-17</startDate>
            <endDate>1829-07-30</endDate>
        </newspaper>
        <newspaper id="694">
            <title>Sydney General Trade List (NSW : 1834 - 1842)</title>
            <state>New South Wales</state>
            <issn>22026142</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/694</troveUrl>
            <startDate>1834-02-01</startDate>
            <endDate>1842-12-31</endDate>
        </newspaper>
        <newspaper id="695">
            <title>Sydney General Trade List, and Mercantile Advertiser (NSW : 1829 - 1830)</title>
            <state>New South Wales</state>
            <issn>2202610X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/695</troveUrl>
            <startDate>1829-10-15</startDate>
            <endDate>1830-02-19</endDate>
        </newspaper>
        <newspaper id="696">
            <title>Sydney General Trade List, Mercantile Chronicle and Advertiser (NSW : 1830)</title>
            <state>New South Wales</state>
            <issn>22026126</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/696</troveUrl>
            <startDate>1830-04-29</startDate>
            <endDate>1830-04-29</endDate>
        </newspaper>
        <newspaper id="697">
            <title>Sydney Mail (NSW : 1860 - 1871)</title>
            <state>New South Wales</state>
            <issn>22026002</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/697</troveUrl>
            <startDate>1860-07-07</startDate>
            <endDate>1871-02-25</endDate>
        </newspaper>
        <newspaper id="703">
            <title>Sydney Mail (NSW : 1912 - 1938)</title>
            <state>New South Wales</state>
            <issn>22026045</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/703</troveUrl>
            <startDate>1912-04-03</startDate>
            <endDate>1938-12-28</endDate>
        </newspaper>
        <newspaper id="692">
            <title>Sydney Sportsman (Surry Hills, NSW : 1900 - 1954)</title>
            <state>New South Wales</state>
            <issn>22025863</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/692</troveUrl>
            <startDate>1900-10-03</startDate>
            <endDate>1954-12-29</endDate>
        </newspaper>
        <newspaper id="681">
            <title>Tamworth Observer and Northern Advertiser (NSW : 1910)</title>
            <state>New South Wales</state>
            <issn>22025197</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/681</troveUrl>
            <startDate>1910-07-01</startDate>
            <endDate>1910-12-23</endDate>
        </newspaper>
        <newspaper id="417">
            <title>Taralga Echo (NSW : 1924 - 1927)</title>
            <state>New South Wales</state>
            <issn>22013288</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/417</troveUrl>
            <startDate>1924-11-01</startDate>
            <endDate>1927-11-04</endDate>
        </newspaper>
        <newspaper id="728">
            <title>Temora Herald and Mining Journal (NSW : 1882 - 1883)</title>
            <state>New South Wales</state>
            <issn>22030484</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/728</troveUrl>
            <startDate>1882-04-21</startDate>
            <endDate>1883-04-06</endDate>
        </newspaper>
        <newspaper id="1187">
            <title>Tharunka (Kensington, NSW : 1953 - 2010)</title>
            <state>New South Wales</state>
            <issn>22061703</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1187</troveUrl>
            <startDate>1953-03-02</startDate>
            <endDate>2010-10-01</endDate>
        </newspaper>
        <newspaper id="113">
            <title>The Age (Queanbeyan, NSW : 1904 - 1907)</title>
            <state>New South Wales</state>
            <issn>18374344</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/113</troveUrl>
            <startDate>1904-01-01</startDate>
            <endDate>1907-12-31</endDate>
        </newspaper>
        <newspaper id="983">
            <title>The Armidale Chronicle (NSW : 1894 - 1929)</title>
            <state>New South Wales</state>
            <issn>22047530</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/983</troveUrl>
            <startDate>1894-09-01</startDate>
            <endDate>1929-08-31</endDate>
        </newspaper>
        <newspaper id="985">
            <title>The Armidale Express and New England General Advertiser (NSW : 1856 - 1861; 1863 - 1889; 1891 - 1954)</title>
            <state>New South Wales</state>
            <issn>2204793X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/985</troveUrl>
            <startDate>1856-04-05</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="528">
            <title>The Arrow (Sydney, NSW : 1896 - 1912)</title>
            <state>New South Wales</state>
            <issn>22017453</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/528</troveUrl>
            <startDate>1896-03-07</startDate>
            <endDate>1912-09-28</endDate>
        </newspaper>
        <newspaper id="50">
            <title>The Australian (Sydney, NSW : 1824 - 1848)</title>
            <state>New South Wales</state>
            <issn>18373712</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/50</troveUrl>
            <startDate>1824-10-14</startDate>
            <endDate>1848-09-28</endDate>
        </newspaper>
        <newspaper id="161">
            <title>The Australian Band of Hope Review, and Children's Friend (Sydney, NSW : 1856)</title>
            <state>New South Wales</state>
            <issn>18388442</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/161</troveUrl>
            <startDate>1856-01-05</startDate>
            <endDate>1856-12-20</endDate>
        </newspaper>
        <newspaper id="995">
            <title>The Australian Communist (Sydney, NSW : 1920 - 1921)</title>
            <state>New South Wales</state>
            <issn>22048421</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/995</troveUrl>
            <startDate>1920-12-24</startDate>
            <endDate>1921-04-29</endDate>
        </newspaper>
        <newspaper id="164">
            <title>The Australian Home Companion and Band of Hope Journal (Sydney, NSW : 1859 - 1861)</title>
            <state>New South Wales</state>
            <issn>18388477</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/164</troveUrl>
            <startDate>1859-01-01</startDate>
            <endDate>1861-08-24</endDate>
        </newspaper>
        <newspaper id="709">
            <title>The Australian Producer's Home Journal (Sydney, NSW : 1910)</title>
            <state>New South Wales</state>
            <issn>22030018</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/709</troveUrl>
            <startDate>1910-07-27</startDate>
            <endDate>1910-11-22</endDate>
        </newspaper>
        <newspaper id="1178">
            <title>The Australian Star (Sydney, NSW : 1887 - 1909)</title>
            <state>New South Wales</state>
            <issn>22059466</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1178</troveUrl>
            <startDate>1887-12-01</startDate>
            <endDate>1909-03-11</endDate>
        </newspaper>
        <newspaper id="746">
            <title>The Australian Worker (Sydney, NSW : 1913 - 1950)</title>
            <state>New South Wales</state>
            <issn>2202915X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/746</troveUrl>
            <startDate>1913-11-06</startDate>
            <endDate>1950-12-20</endDate>
        </newspaper>
        <newspaper id="1051">
            <title>The Australian Workman (Sydney, NSW : 1890 - 1897)</title>
            <state>New South Wales</state>
            <issn>22053859</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1051</troveUrl>
            <startDate>1890-09-22</startDate>
            <endDate>1897-09-25</endDate>
        </newspaper>
        <newspaper id="184">
            <title>The Australian, Windsor, Richmond, and Hawkesbury Advertiser (NSW : 1873 - 1899)</title>
            <state>New South Wales</state>
            <issn>18389333</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/184</troveUrl>
            <startDate>1873-09-27</startDate>
            <endDate>1899-05-25</endDate>
        </newspaper>
        <newspaper id="163">
            <title>The Band of Hope Journal and Australian Home Companion (Sydney, NSW : 1858)</title>
            <state>New South Wales</state>
            <issn>18388469</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/163</troveUrl>
            <startDate>1858-01-02</startDate>
            <endDate>1858-12-18</endDate>
        </newspaper>
        <newspaper id="674">
            <title>The Bathurst Daily Argus (NSW : 1909)</title>
            <state>New South Wales</state>
            <issn>22023399</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/674</troveUrl>
            <startDate>1909-01-01</startDate>
            <endDate>1909-08-31</endDate>
        </newspaper>
        <newspaper id="471">
            <title>The Bathurst Post (NSW : 1881 - 1922)</title>
            <state>New South Wales</state>
            <issn>2201487X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/471</troveUrl>
            <startDate>1881-08-15</startDate>
            <endDate>1922-03-15</endDate>
        </newspaper>
        <newspaper id="482">
            <title>The Bathurst Times (NSW : 1909 - 1925)</title>
            <state>New South Wales</state>
            <issn>22014195</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/482</troveUrl>
            <startDate>1909-09-01</startDate>
            <endDate>1925-12-31</endDate>
        </newspaper>
        <newspaper id="1011">
            <title>The Bee of Australia (Sydney, NSW : 1844)</title>
            <state>New South Wales</state>
            <issn>14403668</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1011</troveUrl>
            <startDate>1844-10-19</startDate>
            <endDate>1844-12-07</endDate>
        </newspaper>
        <newspaper id="443">
            <title>The Bega Budget (NSW : 1905 - 1920)</title>
            <state>New South Wales</state>
            <issn>22014926</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/443</troveUrl>
            <startDate>1905-09-30</startDate>
            <endDate>1920-12-25</endDate>
        </newspaper>
        <newspaper id="391">
            <title>The Bega Gazette and County of Auckland Advertiser (NSW : 1865)</title>
            <state>New South Wales</state>
            <issn>22012230</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/391</troveUrl>
            <startDate>1865-02-25</startDate>
            <endDate>1865-06-24</endDate>
        </newspaper>
        <newspaper id="392">
            <title>The Bega Gazette and Eden District or Southern Coast Advertiser (NSW : 1865 - 1899)</title>
            <state>New South Wales</state>
            <issn>22012257</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/392</troveUrl>
            <startDate>1865-07-01</startDate>
            <endDate>1899-12-30</endDate>
        </newspaper>
        <newspaper id="720">
            <title>The Bega Standard and Candelo, Merimbula, Pambula, Eden, Wolumla, and General Advertiser (NSW : 1876 - 1884)</title>
            <state>New South Wales</state>
            <issn>2203045X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/720</troveUrl>
            <startDate>1876-01-01</startDate>
            <endDate>1884-10-15</endDate>
        </newspaper>
        <newspaper id="1049">
            <title>The Bird O' Freedom (Sydney, NSW : 1891 - 1896)</title>
            <state>New South Wales</state>
            <issn>22052305</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1049</troveUrl>
            <startDate>1891-02-07</startDate>
            <endDate>1896-02-29</endDate>
        </newspaper>
        <newspaper id="256">
            <title>The Biz (Fairfield, NSW : 1928 - 1972)</title>
            <state>New South Wales</state>
            <issn>18397352</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/256</troveUrl>
            <startDate>1928-11-03</startDate>
            <endDate>1972-06-15</endDate>
        </newspaper>
        <newspaper id="913">
            <title>The Blackheath Bulletin (Katoomba, NSW : 1926; 1929 - 1931)</title>
            <state>New South Wales</state>
            <issn>22046194</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/913</troveUrl>
            <startDate>1926-05-25</startDate>
            <endDate>1931-02-05</endDate>
        </newspaper>
        <newspaper id="721">
            <title>The Blayney Advocate and Carcoar Herald (NSW : 1898 - 1904)</title>
            <state>New South Wales</state>
            <issn>22030476</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/721</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1904-12-31</endDate>
        </newspaper>
        <newspaper id="444">
            <title>The Blue Mountain Echo (NSW : 1909 - 1928)</title>
            <state>New South Wales</state>
            <issn>22014977</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/444</troveUrl>
            <startDate>1909-03-06</startDate>
            <endDate>1928-12-28</endDate>
        </newspaper>
        <newspaper id="911">
            <title>The Blue Mountain Star (Katoomba, NSW : 1929 - 1931)</title>
            <state>New South Wales</state>
            <issn>22046054</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/911</troveUrl>
            <startDate>1929-01-05</startDate>
            <endDate>1931-02-07</endDate>
        </newspaper>
        <newspaper id="921">
            <title>The Blue Mountains Advertiser (Katoomba, NSW : 1940 - 1954)</title>
            <state>New South Wales</state>
            <issn>22046496</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/921</troveUrl>
            <startDate>1940-01-19</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="920">
            <title>The Blue Mountains Times (Katoomba, NSW : 1931 - 1937)</title>
            <state>New South Wales</state>
            <issn>2204647X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/920</troveUrl>
            <startDate>1931-10-16</startDate>
            <endDate>1937-11-12</endDate>
        </newspaper>
        <newspaper id="637">
            <title>The Bombala Times (NSW : 1912 - 1938)</title>
            <state>New South Wales</state>
            <issn>18323782</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/637</troveUrl>
            <startDate>1912-01-05</startDate>
            <endDate>1938-12-23</endDate>
        </newspaper>
        <newspaper id="445">
            <title>The Border Morning Mail and Riverina Times (Albury, NSW : 1903 - 1920)</title>
            <state>New South Wales</state>
            <issn>22015000</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/445</troveUrl>
            <startDate>1903-11-05</startDate>
            <endDate>1920-06-30</endDate>
        </newspaper>
        <newspaper id="387">
            <title>The Bowral Free Press (NSW : 1884)</title>
            <state>New South Wales</state>
            <issn>2200601X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/387</troveUrl>
            <startDate>1884-03-22</startDate>
            <endDate>1884-11-01</endDate>
        </newspaper>
        <newspaper id="472">
            <title>The Braidwood Dispatch and Mining Journal (NSW : 1888 - 1954)</title>
            <state>New South Wales</state>
            <issn>22014896</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/472</troveUrl>
            <startDate>1888-01-02</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="485">
            <title>The Braidwood Review and District Advocate (NSW : 1915 - 1954)</title>
            <state>New South Wales</state>
            <issn>22016813</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/485</troveUrl>
            <startDate>1915-11-30</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="686">
            <title>The Branxton Advocate: Greta and Rothbury Recorder (NSW : 1916)</title>
            <state>New South Wales</state>
            <issn>22025944</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/686</troveUrl>
            <startDate>1916-03-04</startDate>
            <endDate>1916-03-04</endDate>
        </newspaper>
        <newspaper id="722">
            <title>The Broadcaster (Fairfield, NSW : 1935 - 1978)</title>
            <state>New South Wales</state>
            <issn>22030395</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/722</troveUrl>
            <startDate>1935-01-31</startDate>
            <endDate>1978-05-23</endDate>
        </newspaper>
        <newspaper id="463">
            <title>The Burrowa News (NSW : 1874 - 1951)</title>
            <state>New South Wales</state>
            <issn>22014683</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/463</troveUrl>
            <startDate>1874-06-13</startDate>
            <endDate>1951-01-26</endDate>
        </newspaper>
        <newspaper id="446">
            <title>The Byron Bay Record (NSW : 1902 - 1924)</title>
            <state>New South Wales</state>
            <issn>22015027</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/446</troveUrl>
            <startDate>1902-09-06</startDate>
            <endDate>1924-04-12</endDate>
        </newspaper>
        <newspaper id="483">
            <title>The Campbelltown Herald (NSW : 1880 - 1919)</title>
            <state>New South Wales</state>
            <issn>22015256</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/483</troveUrl>
            <startDate>1880-02-14</startDate>
            <endDate>1919-10-11</endDate>
        </newspaper>
        <newspaper id="723">
            <title>The Canowindra Star (NSW : 1900 - 1902)</title>
            <state>New South Wales</state>
            <issn>22030506</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/723</troveUrl>
            <startDate>1900-04-06</startDate>
            <endDate>1902-03-28</endDate>
        </newspaper>
        <newspaper id="475">
            <title>The Carcoar Chronicle (NSW : 1878 - 1943)</title>
            <state>New South Wales</state>
            <issn>22015272</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/475</troveUrl>
            <startDate>1878-03-16</startDate>
            <endDate>1943-12-22</endDate>
        </newspaper>
        <newspaper id="224">
            <title>The Castlereagh (Gilgandra, NSW : 1905 - 1907) </title>
            <state>New South Wales</state>
            <issn>18394841</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/224</troveUrl>
            <startDate>1905-01-13</startDate>
            <endDate>1907-12-20</endDate>
        </newspaper>
        <newspaper id="447">
            <title>The Catholic Press (Sydney, NSW : 1895 - 1942)</title>
            <state>New South Wales</state>
            <issn>22015043</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/447</troveUrl>
            <startDate>1895-11-09</startDate>
            <endDate>1942-02-26</endDate>
        </newspaper>
        <newspaper id="429">
            <title>The Cessnock Eagle and South Maitland Recorder (NSW : 1913 - 1954)</title>
            <state>New South Wales</state>
            <issn>22014217</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/429</troveUrl>
            <startDate>1913-11-21</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="905">
            <title>The Chaser (Glebe, NSW : 1999 - 2005)</title>
            <state>New South Wales</state>
            <issn>22047735</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/905</troveUrl>
            <startDate>1999-05-09</startDate>
            <endDate>2005-02-04</endDate>
        </newspaper>
        <newspaper id="121">
            <title>The Children's Newspaper (Sydney, NSW : 1899 - 1900)</title>
            <state>New South Wales</state>
            <issn>18384889</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/121</troveUrl>
            <startDate>1899-01-30</startDate>
            <endDate>1900-01-28</endDate>
        </newspaper>
        <newspaper id="914">
            <title>The Chronicle (Katoomba, NSW : 1929)</title>
            <state>New South Wales</state>
            <issn>22046224</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/914</troveUrl>
            <startDate>1929-08-15</startDate>
            <endDate>1929-10-10</endDate>
        </newspaper>
        <newspaper id="490">
            <title>The Clarence River Advocate (NSW : 1898 - 1949)</title>
            <state>New South Wales</state>
            <issn>2201585X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/490</troveUrl>
            <startDate>1898-01-04</startDate>
            <endDate>1949-09-22</endDate>
        </newspaper>
        <newspaper id="448">
            <title>The Cobar Herald (NSW : 1899 - 1914)</title>
            <state>New South Wales</state>
            <issn>2201506X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/448</troveUrl>
            <startDate>1899-01-07</startDate>
            <endDate>1914-10-09</endDate>
        </newspaper>
        <newspaper id="393">
            <title>The Cobargo Chronicle (NSW : 1898 - 1944)</title>
            <state>New South Wales</state>
            <issn>2201229X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/393</troveUrl>
            <startDate>1898-11-18</startDate>
            <endDate>1944-09-15</endDate>
        </newspaper>
        <newspaper id="1012">
            <title>The Colonial Observer (Sydney, NSW : 1841 -1844)</title>
            <state>New South Wales</state>
            <issn>1327662X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1012</troveUrl>
            <startDate>1841-10-07</startDate>
            <endDate>1844-12-26</endDate>
        </newspaper>
        <newspaper id="66">
            <title>The Colonist (Sydney, NSW : 1835 - 1840)</title>
            <state>New South Wales</state>
            <issn>18373933</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/66</troveUrl>
            <startDate>1835-01-01</startDate>
            <endDate>1840-12-31</endDate>
        </newspaper>
        <newspaper id="473">
            <title>The Corowa Chronicle (NSW : 1905 - 1928)</title>
            <state>New South Wales</state>
            <issn>22014942</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/473</troveUrl>
            <startDate>1905-10-07</startDate>
            <endDate>1928-01-25</endDate>
        </newspaper>
        <newspaper id="442">
            <title>The Cumberland Argus (Parramatta, NSW : 1950 - 1962)</title>
            <state>New South Wales</state>
            <issn>22008985</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/442</troveUrl>
            <startDate>1950-03-22</startDate>
            <endDate>1962-10-24</endDate>
        </newspaper>
        <newspaper id="351">
            <title>The Cumberland Argus and Fruitgrowers Advocate (Parramatta, NSW : 1888 - 1950)</title>
            <state>New South Wales</state>
            <issn>22004394</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/351</troveUrl>
            <startDate>1888-09-22</startDate>
            <endDate>1950-03-15</endDate>
        </newspaper>
        <newspaper id="724">
            <title>The Cumberland Free Press (Parramatta, NSW : 1895 - 1897)</title>
            <state>New South Wales</state>
            <issn>22030689</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/724</troveUrl>
            <startDate>1895-06-22</startDate>
            <endDate>1897-06-26</endDate>
        </newspaper>
        <newspaper id="1019">
            <title>The Cumberland Times and Western Advertiser (Sydney, NSW : 1845)</title>
            <state>New South Wales</state>
            <issn>14403447</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1019</troveUrl>
            <startDate>1845-10-04</startDate>
            <endDate>1845-12-27</endDate>
        </newspaper>
        <newspaper id="1134">
            <title>The Daily Express (Wagga Wagga, NSW : 1930)</title>
            <state>New South Wales</state>
            <issn>22056882</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1134</troveUrl>
            <startDate>1930-01-01</startDate>
            <endDate>1930-08-30</endDate>
        </newspaper>
        <newspaper id="252">
            <title>The Dawn (Sydney, NSW : 1888 - 1905) </title>
            <state>New South Wales</state>
            <issn>18397468</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/252</troveUrl>
            <startDate>1888-05-15</startDate>
            <endDate>1905-07-01</endDate>
        </newspaper>
        <newspaper id="1048">
            <title>The Dead Bird (Sydney, NSW : 1889 - 1891)</title>
            <state>New South Wales</state>
            <issn>22052283</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1048</troveUrl>
            <startDate>1889-05-16</startDate>
            <endDate>1891-01-31</endDate>
        </newspaper>
        <newspaper id="1020">
            <title>The Dispatch (Sydney, NSW : 1843 - 1844)</title>
            <state>New South Wales</state>
            <issn>1440253X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1020</troveUrl>
            <startDate>1843-11-04</startDate>
            <endDate>1844-12-28</endDate>
        </newspaper>
        <newspaper id="879">
            <title>The Don Dorrigo Gazette and Guy Fawkes Advocate (NSW : 1910 - 1954)</title>
            <state>New South Wales</state>
            <issn>22043322</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/879</troveUrl>
            <startDate>1910-01-08</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="188">
            <title>The Dubbo Liberal and Macquarie Advocate (NSW : 1894 - 1954)</title>
            <state>New South Wales</state>
            <issn>18389805</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/188</troveUrl>
            <startDate>1894-01-03</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="683">
            <title>The Elector (Sydney, NSW : 1900)</title>
            <state>New South Wales</state>
            <issn>22024905</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/683</troveUrl>
            <startDate>1900-02-17</startDate>
            <endDate>1900-09-08</endDate>
        </newspaper>
        <newspaper id="918">
            <title>The Enterprise (Katoomba, NSW : 1913)</title>
            <state>New South Wales</state>
            <issn>22046305</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/918</troveUrl>
            <startDate>1913-09-03</startDate>
            <endDate>1913-09-03</endDate>
        </newspaper>
        <newspaper id="1017">
            <title>The Examiner (Sydney, NSW : 1845)</title>
            <state>New South Wales</state>
            <issn>14401932</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1017</troveUrl>
            <startDate>1845-08-09</startDate>
            <endDate>1845-11-01</endDate>
        </newspaper>
        <newspaper id="451">
            <title>The Farmer and Settler (Sydney, NSW : 1906 - 1955)</title>
            <state>New South Wales</state>
            <issn>22015140</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/451</troveUrl>
            <startDate>1906-02-07</startDate>
            <endDate>1955-11-25</endDate>
        </newspaper>
        <newspaper id="421">
            <title>The Forbes Advocate (NSW : 1911 - 1954)</title>
            <state>New South Wales</state>
            <issn>13289632</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/421</troveUrl>
            <startDate>1911-12-08</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="359">
            <title>The Globe and Sunday Times War Pictorial (Sydney, NSW : 1914 - 1917)</title>
            <state>New South Wales</state>
            <issn>22007059</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/359</troveUrl>
            <startDate>1914-10-24</startDate>
            <endDate>1917-06-25</endDate>
        </newspaper>
        <newspaper id="644">
            <title>The Gloucester Advocate (NSW : 1905 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023852</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/644</troveUrl>
            <startDate>1905-07-22</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="708">
            <title>The Gloucester Examiner and Lower Hunter Advertiser (NSW : 1912)</title>
            <state>New South Wales</state>
            <issn>22028692</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/708</troveUrl>
            <startDate>1912-02-02</startDate>
            <endDate>1912-06-07</endDate>
        </newspaper>
        <newspaper id="689">
            <title>The Gosford Times and Wyong District Advocate (NSW : 1906 - 1954)</title>
            <state>New South Wales</state>
            <issn>22025928</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/689</troveUrl>
            <startDate>1906-05-25</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="366">
            <title>The Goulburn Herald and Chronicle (NSW : 1864 - 1881)</title>
            <state>New South Wales</state>
            <issn>22007296</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/366</troveUrl>
            <startDate>1864-04-02</startDate>
            <endDate>1881-03-30</endDate>
        </newspaper>
        <newspaper id="364">
            <title>The Goulburn Herald and County of Argyle Advertiser (NSW : 1848 - 1859)</title>
            <state>New South Wales</state>
            <issn>22007113</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/364</troveUrl>
            <startDate>1848-07-01</startDate>
            <endDate>1859-12-31</endDate>
        </newspaper>
        <newspaper id="474">
            <title>The Grenfell Record and Lachlan District Advertiser (NSW : 1876 - 1951)</title>
            <state>New South Wales</state>
            <issn>22016678</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/474</troveUrl>
            <startDate>1876-04-22</startDate>
            <endDate>1951-12-27</endDate>
        </newspaper>
        <newspaper id="1021">
            <title>The Guardian (Sydney, NSW : 1844)</title>
            <state>New South Wales</state>
            <issn>14403765</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1021</troveUrl>
            <startDate>1844-03-16</startDate>
            <endDate>1844-10-05</endDate>
        </newspaper>
        <newspaper id="664">
            <title>The Gundagai Independent (NSW : 1928 - 1939)</title>
            <state>New South Wales</state>
            <issn>22023364</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/664</troveUrl>
            <startDate>1928-08-20</startDate>
            <endDate>1938-12-22</endDate>
        </newspaper>
        <newspaper id="486">
            <title>The Gundagai Independent and Pastoral, Agricultural and Mining Advocate (NSW : 1898 - 1928)</title>
            <state>New South Wales</state>
            <issn>22015736</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/486</troveUrl>
            <startDate>1898-09-07</startDate>
            <endDate>1928-08-16</endDate>
        </newspaper>
        <newspaper id="487">
            <title>The Gundagai Times and Tumut, Adelong and Murrumbidgee District Advertiser (NSW : 1868 - 1931)</title>
            <state>New South Wales</state>
            <issn>22015752</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/487</troveUrl>
            <startDate>1868-01-18</startDate>
            <endDate>1931-12-25</endDate>
        </newspaper>
        <newspaper id="886">
            <title>The Gwydir Examiner and Moree General Advertiser (NSW : 1898 - 1899)</title>
            <state>New South Wales</state>
            <issn>22042873</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/886</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1899-09-02</endDate>
        </newspaper>
        <newspaper id="725">
            <title>The Hay Standard and Advertiser for Balranald, Wentworth, Maude...(Hay, NSW : 1871 - 1873; 1880 - 1881; 1890 - 1900)</title>
            <state>New South Wales</state>
            <issn>22030581</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/725</troveUrl>
            <startDate>1871-11-01</startDate>
            <endDate>1900-11-28</endDate>
        </newspaper>
        <newspaper id="488">
            <title>The Hebrew Standard of Australasia (Sydney, NSW : 1895 - 1953)</title>
            <state>New South Wales</state>
            <issn>22015779</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/488</troveUrl>
            <startDate>1895-11-01</startDate>
            <endDate>1953-10-09</endDate>
        </newspaper>
        <newspaper id="889">
            <title>The Henty Observer and Culcairn Shire Register (NSW : 1914 - 1950)</title>
            <state>New South Wales</state>
            <issn>22043551</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/889</troveUrl>
            <startDate>1914-02-21</startDate>
            <endDate>1950-09-01</endDate>
        </newspaper>
        <newspaper id="853">
            <title>The Hillston News (NSW : 1882 - 1883)</title>
            <state>New South Wales</state>
            <issn>22039783</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/853</troveUrl>
            <startDate>1882-11-04</startDate>
            <endDate>1883-09-08</endDate>
        </newspaper>
        <newspaper id="489">
            <title>The Hillston Spectator and Lachlan River Advertiser (NSW : 1898 - 1952)</title>
            <state>New South Wales</state>
            <issn>22015833</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/489</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1952-12-18</endDate>
        </newspaper>
        <newspaper id="915">
            <title>The Hospital Saturday News (Katoomba, NSW : 1930)</title>
            <state>New South Wales</state>
            <issn>22046259</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/915</troveUrl>
            <startDate>1930-04-19</startDate>
            <endDate>1930-04-19</endDate>
        </newspaper>
        <newspaper id="745">
            <title>The Hummer (Wagga Wagga, NSW : 1891 - 1892)</title>
            <state>New South Wales</state>
            <issn>22030700</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/745</troveUrl>
            <startDate>1891-10-19</startDate>
            <endDate>1892-09-17</endDate>
        </newspaper>
        <newspaper id="1022">
            <title>The Hunter River Gazette; and Journal of Agriculture, Commerce, Politics, and News (West Maitland, NSW : 1841 - 1842)</title>
            <state>New South Wales</state>
            <issn>13299611</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1022</troveUrl>
            <startDate>1841-12-11</startDate>
            <endDate>1842-06-25</endDate>
        </newspaper>
        <newspaper id="477">
            <title>The Independent (Deniliquin, NSW : 1901 - 1946)</title>
            <state>New South Wales</state>
            <issn>22015418</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/477</troveUrl>
            <startDate>1901-01-04</startDate>
            <endDate>1946-12-19</endDate>
        </newspaper>
        <newspaper id="916">
            <title>The Independent (Katoomba, NSW : 1930 - 1931)</title>
            <state>New South Wales</state>
            <issn>22046275</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/916</troveUrl>
            <startDate>1930-05-14</startDate>
            <endDate>1931-03-05</endDate>
        </newspaper>
        <newspaper id="491">
            <title>The International Socialist (Sydney, NSW : 1910 - 1920)</title>
            <state>New South Wales</state>
            <issn>22015884</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/491</troveUrl>
            <startDate>1910-04-30</startDate>
            <endDate>1920-11-27</endDate>
        </newspaper>
        <newspaper id="880">
            <title>The Inverell Argus (NSW : 1899 - 1904)</title>
            <state>New South Wales</state>
            <issn>22043004</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/880</troveUrl>
            <startDate>1899-01-06</startDate>
            <endDate>1904-12-31</endDate>
        </newspaper>
        <newspaper id="904">
            <title>The Inverell Times (NSW : 1899 - 1954)</title>
            <state>New South Wales</state>
            <issn>22047344</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/904</troveUrl>
            <startDate>1899-01-07</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="909">
            <title>The Katoomba Daily (NSW : 1920 - 1939)</title>
            <state>New South Wales</state>
            <issn>22046038</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/909</troveUrl>
            <startDate>1920-12-18</startDate>
            <endDate>1939-02-17</endDate>
        </newspaper>
        <newspaper id="360">
            <title>The Kiama Independent and Illawarra and Shoalhaven Advertiser (NSW : 1863)</title>
            <state>New South Wales</state>
            <issn>22007156</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/360</troveUrl>
            <startDate>1863-07-21</startDate>
            <endDate>1863-10-06</endDate>
        </newspaper>
        <newspaper id="361">
            <title>The Kiama Independent, and Shoalhaven Advertiser (NSW : 1863 - 1947)</title>
            <state>New South Wales</state>
            <issn>22007172</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/361</troveUrl>
            <startDate>1863-10-13</startDate>
            <endDate>1947-04-02</endDate>
        </newspaper>
        <newspaper id="362">
            <title>The Kiama Reporter and Illawarra Journal (NSW : 1899 - 1947)</title>
            <state>New South Wales</state>
            <issn>22007229</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/362</troveUrl>
            <startDate>1899-01-04</startDate>
            <endDate>1947-05-07</endDate>
        </newspaper>
        <newspaper id="470">
            <title>The Land (Sydney, NSW : 1911 - 1954)</title>
            <state>New South Wales</state>
            <issn>22015396</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/470</troveUrl>
            <startDate>1911-01-27</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="182">
            <title>The Leader (Liverpool, NSW : 1946 - 1949)</title>
            <state>New South Wales</state>
            <issn>18387578</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/182</troveUrl>
            <startDate>1946-08-15</startDate>
            <endDate>1949-03-10</endDate>
        </newspaper>
        <newspaper id="646">
            <title>The Lockhart Review and Oaklands Advertiser (NSW : 1910 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023526</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/646</troveUrl>
            <startDate>1910-11-22</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="476">
            <title>The Lyndhurst Shire Chronicle (NSW : 1897 - 1941; 1944 - 1954)</title>
            <state>New South Wales</state>
            <issn>22015280</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/476</troveUrl>
            <startDate>1944-01-25</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="881">
            <title>The Macleay Chronicle (Kempsey, NSW : 1899 - 1952)</title>
            <state>New South Wales</state>
            <issn>22043047</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/881</troveUrl>
            <startDate>1899-01-05</startDate>
            <endDate>1952-07-30</endDate>
        </newspaper>
        <newspaper id="492">
            <title>The Maitland Daily Mercury (NSW : 1894 - 1939)</title>
            <state>New South Wales</state>
            <issn>22015914</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/492</troveUrl>
            <startDate>1894-01-01</startDate>
            <endDate>1939-12-23</endDate>
        </newspaper>
        <newspaper id="629">
            <title>The Maitland Mercury (NSW : 1939)</title>
            <state>New South Wales</state>
            <issn>22023410</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/629</troveUrl>
            <startDate>1939-12-26</startDate>
            <endDate>1939-12-30</endDate>
        </newspaper>
        <newspaper id="8">
            <title>The Maitland Mercury and Hunter River General Advertiser (NSW : 1843 - 1893)</title>
            <state>New South Wales</state>
            <issn>14403676</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/8</troveUrl>
            <startDate>1843-01-07</startDate>
            <endDate>1893-12-30</endDate>
        </newspaper>
        <newspaper id="493">
            <title>The Maitland Weekly Mercury (NSW : 1894 - 1931)</title>
            <state>New South Wales</state>
            <issn>22016147</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/493</troveUrl>
            <startDate>1894-01-06</startDate>
            <endDate>1931-05-23</endDate>
        </newspaper>
        <newspaper id="510">
            <title>The Manaro Mercury, and Cooma and Bombala Advertiser (NSW : 1862 - 1931)</title>
            <state>New South Wales</state>
            <issn>22016325</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/510</troveUrl>
            <startDate>1862-10-31</startDate>
            <endDate>1931-12-24</endDate>
        </newspaper>
        <newspaper id="877">
            <title>The Manning River Times and Advocate for the Northern Coast Districts of New South Wales (Taree, NSW : 1898 - 1954)</title>
            <state>New South Wales</state>
            <issn>22042822</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/877</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="647">
            <title>The Methodist (Sydney, NSW : 1892 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023682</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/647</troveUrl>
            <startDate>1892-01-02</startDate>
            <endDate>1954-12-25</endDate>
        </newspaper>
        <newspaper id="684">
            <title>The Mining Record and Grenfell General Advertiser (NSW : 1867 - 1876)</title>
            <state>New South Wales</state>
            <issn>22023879</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/684</troveUrl>
            <startDate>1867-06-15</startDate>
            <endDate>1876-04-15</endDate>
        </newspaper>
        <newspaper id="441">
            <title>The Mirror (Sydney, NSW : 1917 - 1919)</title>
            <state>New South Wales</state>
            <issn>22007091</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/441</troveUrl>
            <startDate>1917-06-30</startDate>
            <endDate>1919-09-21</endDate>
        </newspaper>
        <newspaper id="438">
            <title>The Mirror of Australia (Sydney, NSW : 1915 - 1917)</title>
            <state>New South Wales</state>
            <issn>22014039</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/438</troveUrl>
            <startDate>1915-07-30</startDate>
            <endDate>1917-05-19</endDate>
        </newspaper>
        <newspaper id="76">
            <title>The Monitor (Sydney, NSW : 1826 - 1828)</title>
            <state>New South Wales</state>
            <issn>18373844</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/76</troveUrl>
            <startDate>1826-05-19</startDate>
            <endDate>1828-08-11</endDate>
        </newspaper>
        <newspaper id="887">
            <title>The Moree Examiner and General Advertiser (NSW : 1899)</title>
            <state>New South Wales</state>
            <issn>2204289X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/887</troveUrl>
            <startDate>1899-09-05</startDate>
            <endDate>1899-09-30</endDate>
        </newspaper>
        <newspaper id="511">
            <title>The Moruya Times and South Coast Journal (NSW : 1888 - 1915)</title>
            <state>New South Wales</state>
            <issn>2201635X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/511</troveUrl>
            <startDate>1888-09-26</startDate>
            <endDate>1915-09-22</endDate>
        </newspaper>
        <newspaper id="919">
            <title>The Mountain Daily (Katoomba, NSW : 1919 - 1920)</title>
            <state>New South Wales</state>
            <issn>22046453</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/919</troveUrl>
            <startDate>1919-07-26</startDate>
            <endDate>1920-02-07</endDate>
        </newspaper>
        <newspaper id="907">
            <title>The Mountaineer (Katoomba, NSW : 1894 - 1908)</title>
            <state>New South Wales</state>
            <issn>22045996</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/907</troveUrl>
            <startDate>1894-09-07</startDate>
            <endDate>1908-12-24</endDate>
        </newspaper>
        <newspaper id="649">
            <title>The Murrumbidgee Irrigator (Leeton, NSW : 1915 - 1954)</title>
            <state>New South Wales</state>
            <issn>2202364X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/649</troveUrl>
            <startDate>1915-04-23</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="512">
            <title>The Murrurundi Times and Liverpool Plains Gazette (NSW : 1874 - 1907; 1926 - 1929)</title>
            <state>New South Wales</state>
            <issn>22016376</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/512</troveUrl>
            <startDate>1874-08-08</startDate>
            <endDate>1929-07-12</endDate>
        </newspaper>
        <newspaper id="469">
            <title>The Muswellbrook Chronicle (NSW : 1898 - 1955)</title>
            <state>New South Wales</state>
            <issn>22015329</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/469</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1955-12-30</endDate>
        </newspaper>
        <newspaper id="1026">
            <title>The New South Wales Examiner (Sydney, NSW : 1842)</title>
            <state>New South Wales</state>
            <issn>14402203</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1026</troveUrl>
            <startDate>1842-04-02</startDate>
            <endDate>1842-10-10</endDate>
        </newspaper>
        <newspaper id="513">
            <title>The Newcastle Argus and District Advertiser (NSW : 1916)</title>
            <state>New South Wales</state>
            <issn>22016414</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/513</troveUrl>
            <startDate>1916-07-15</startDate>
            <endDate>1916-07-15</endDate>
        </newspaper>
        <newspaper id="354">
            <title>The Newcastle Chronicle (NSW : 1866 - 1876)</title>
            <state>New South Wales</state>
            <issn>22006915</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/354</troveUrl>
            <startDate>1866-07-28</startDate>
            <endDate>1876-07-15</endDate>
        </newspaper>
        <newspaper id="353">
            <title>The Newcastle Chronicle and Hunter River District News (NSW : 1859 - 1866)</title>
            <state>New South Wales</state>
            <issn>22006893</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/353</troveUrl>
            <startDate>1859-12-31</startDate>
            <endDate>1866-07-25</endDate>
        </newspaper>
        <newspaper id="651">
            <title>The Newcastle Sun (NSW : 1918 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023631</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/651</troveUrl>
            <startDate>1918-03-23</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="437">
            <title>The Newsletter: an Australian Paper for Australian People (Sydney, NSW : 1900 - 1919)</title>
            <state>New South Wales</state>
            <issn>22014063</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/437</troveUrl>
            <startDate>1900-09-15</startDate>
            <endDate>1919-12-30</endDate>
        </newspaper>
        <newspaper id="652">
            <title>The North Western Courier (Narrabri, NSW : 1913 - 1955)</title>
            <state>New South Wales</state>
            <issn>22023712</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/652</troveUrl>
            <startDate>1913-01-07</startDate>
            <endDate>1955-05-26</endDate>
        </newspaper>
        <newspaper id="653">
            <title>The Northern Champion (Taree, NSW : 1913 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023720</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/653</troveUrl>
            <startDate>1913-02-22</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="433">
            <title>The Northern Daily Leader (Tamworth, NSW : 1921)</title>
            <state>New South Wales</state>
            <issn>10395059</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/433</troveUrl>
            <startDate>1921-01-01</startDate>
            <endDate>1921-05-26</endDate>
        </newspaper>
        <newspaper id="1157">
            <title>The Nowra Leader (NSW : 1909 - 1939)</title>
            <state>New South Wales</state>
            <issn>22055940</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1157</troveUrl>
            <startDate>1909-09-03</startDate>
            <endDate>1939-12-22</endDate>
        </newspaper>
        <newspaper id="890">
            <title>The Observer (Henty, NSW : 1950 - 1954)</title>
            <state>New South Wales</state>
            <issn>22042768</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/890</troveUrl>
            <startDate>1950-09-08</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1027">
            <title>The Omnibus and Sydney Spectator (NSW : 1841 - 1843)</title>
            <state>New South Wales</state>
            <issn>14402130</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1027</troveUrl>
            <startDate>1841-10-02</startDate>
            <endDate>1843-04-01</endDate>
        </newspaper>
        <newspaper id="514">
            <title>The Peak Hill Express (NSW : 1902 - 1952)</title>
            <state>New South Wales</state>
            <issn>22016449</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/514</troveUrl>
            <startDate>1902-07-18</startDate>
            <endDate>1952-02-01</endDate>
        </newspaper>
        <newspaper id="748">
            <title>The People and the Collectivist (Sydney, NSW : 1900)</title>
            <state>New South Wales</state>
            <issn>22032584</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/748</troveUrl>
            <startDate>1900-01-06</startDate>
            <endDate>1900-12-22</endDate>
        </newspaper>
        <newspaper id="515">
            <title>The Picton Post (NSW : 1907 - 1954)</title>
            <state>New South Wales</state>
            <issn>22016465</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/515</troveUrl>
            <startDate>1907-09-04</startDate>
            <endDate>1954-11-24</endDate>
        </newspaper>
        <newspaper id="516">
            <title>The Port Macquarie News and Hastings River Advocate (NSW : 1882 - 1950)</title>
            <state>New South Wales</state>
            <issn>22016503</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/516</troveUrl>
            <startDate>1882-07-08</startDate>
            <endDate>1950-10-06</endDate>
        </newspaper>
        <newspaper id="1050">
            <title>The Protestant Standard (Sydney, NSW : 1869 - 1895)</title>
            <state>New South Wales</state>
            <issn>22052402</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1050</troveUrl>
            <startDate>1869-05-15</startDate>
            <endDate>1895-07-27</endDate>
        </newspaper>
        <newspaper id="517">
            <title>The Queanbeyan Leader (NSW : 1905 - 1916)</title>
            <state>New South Wales</state>
            <issn>22016511</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/517</troveUrl>
            <startDate>1905-01-24</startDate>
            <endDate>1916-04-27</endDate>
        </newspaper>
        <newspaper id="498">
            <title>The Raleigh Sun (Bellingen, NSW : 1898 - 1918)</title>
            <state>New South Wales</state>
            <issn>22016619</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/498</troveUrl>
            <startDate>1898-01-07</startDate>
            <endDate>1918-06-01</endDate>
        </newspaper>
        <newspaper id="917">
            <title>The Record of the Blue Mountains (Katoomba, NSW : 1924)</title>
            <state>New South Wales</state>
            <issn>22047719</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/917</troveUrl>
            <startDate>1924-02-01</startDate>
            <endDate>1924-02-01</endDate>
        </newspaper>
        <newspaper id="500">
            <title>The Richmond River Express and Casino Kyogle Advertiser (NSW : 1904 - 1929)</title>
            <state>New South Wales</state>
            <issn>22016651</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/500</troveUrl>
            <startDate>1904-12-13</startDate>
            <endDate>1929-12-31</endDate>
        </newspaper>
        <newspaper id="680">
            <title>The Richmond River Express and Tweed Advertiser (NSW : 1903 - 1904)</title>
            <state>New South Wales</state>
            <issn>22023356</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/680</troveUrl>
            <startDate>1903-01-06</startDate>
            <endDate>1904-12-09</endDate>
        </newspaper>
        <newspaper id="501">
            <title>The Richmond River Herald and Northern Districts Advertiser (NSW : 1886 - 1942)</title>
            <state>New South Wales</state>
            <issn>22016708</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/501</troveUrl>
            <startDate>1886-07-09</startDate>
            <endDate>1942-06-26</endDate>
        </newspaper>
        <newspaper id="656">
            <title>The Riverine Grazier (Hay, NSW : 1873 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023615</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/656</troveUrl>
            <startDate>1873-10-29</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1028">
            <title>The Satirist and Sporting Chronicle (Sydney, NSW : 1843)</title>
            <state>New South Wales</state>
            <issn>14403463</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1028</troveUrl>
            <startDate>1843-02-04</startDate>
            <endDate>1843-04-15</endDate>
        </newspaper>
        <newspaper id="657">
            <title>The Scone Advocate (NSW : 1887 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023755</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/657</troveUrl>
            <startDate>1887-10-07</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="675">
            <title>The Scrutineer (Moss Vale, NSW : 1892)</title>
            <state>New South Wales</state>
            <issn>22023429</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/675</troveUrl>
            <startDate>1892-01-12</startDate>
            <endDate>1892-07-01</endDate>
        </newspaper>
        <newspaper id="502">
            <title>The Scrutineer and Berrima District Press (NSW : 1892 - 1948)</title>
            <state>New South Wales</state>
            <issn>22016007</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/502</troveUrl>
            <startDate>1892-07-05</startDate>
            <endDate>1948-09-04</endDate>
        </newspaper>
        <newspaper id="1029">
            <title>The Sentinel (Sydney, NSW : 1845 - 1848)</title>
            <state>New South Wales</state>
            <issn>14403951</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1029</troveUrl>
            <startDate>1845-01-08</startDate>
            <endDate>1848-09-28</endDate>
        </newspaper>
        <newspaper id="690">
            <title>The Shipping Gazette and Sydney General Trade List (NSW : 1844 - 1860)</title>
            <state>New South Wales</state>
            <issn>14403897</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/690</troveUrl>
            <startDate>1844-03-23</startDate>
            <endDate>1860-12-31</endDate>
        </newspaper>
        <newspaper id="518">
            <title>The Shoalhaven News and South Coast Districts Advertiser (NSW : 1891 - 1937)</title>
            <state>New South Wales</state>
            <issn>22016546</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/518</troveUrl>
            <startDate>1891-01-03</startDate>
            <endDate>1937-09-25</endDate>
        </newspaper>
        <newspaper id="520">
            <title>The Shoalhaven News, Nowra (NSW : 1937)</title>
            <state>New South Wales</state>
            <issn>22017291</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/520</troveUrl>
            <startDate>1937-10-06</startDate>
            <endDate>1937-12-29</endDate>
        </newspaper>
        <newspaper id="503">
            <title>The Shoalhaven Telegraph (NSW : 1881 - 1937)</title>
            <state>New South Wales</state>
            <issn>22016104</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/503</troveUrl>
            <startDate>1881-10-20</startDate>
            <endDate>1937-09-29</endDate>
        </newspaper>
        <newspaper id="282">
            <title>The Singleton Argus and Upper Hunter General Advocate (NSW : 1874 - 1880)</title>
            <state>New South Wales</state>
            <issn>18398545</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/282</troveUrl>
            <startDate>1874-07-15</startDate>
            <endDate>1880-07-10</endDate>
        </newspaper>
        <newspaper id="519">
            <title>The Southern Mail (Bowral, NSW : 1889 - 1954)</title>
            <state>New South Wales</state>
            <issn>22016562</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/519</troveUrl>
            <startDate>1889-02-19</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="504">
            <title>The Southern Record and Advertiser (Candelo, NSW : 1910 - 1938)</title>
            <state>New South Wales</state>
            <issn>22016120</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/504</troveUrl>
            <startDate>1910-07-02</startDate>
            <endDate>1938-04-29</endDate>
        </newspaper>
        <newspaper id="854">
            <title>The St George Call (Kogarah, NSW : 1904 - 1957)</title>
            <state>New South Wales</state>
            <issn>2203966X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/854</troveUrl>
            <startDate>1904-01-09</startDate>
            <endDate>1948-01-23</endDate>
        </newspaper>
        <newspaper id="1032">
            <title>The Star (Sydney, NSW : 1845 - 1846)</title>
            <state>New South Wales</state>
            <issn>14433540</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1032</troveUrl>
            <startDate>1845-10-04</startDate>
            <endDate>1846-05-23</endDate>
        </newspaper>
        <newspaper id="1179">
            <title>The Star (Sydney, NSW : 1909 - 1910)</title>
            <state>New South Wales</state>
            <issn>22059504</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1179</troveUrl>
            <startDate>1909-03-12</startDate>
            <endDate>1910-06-30</endDate>
        </newspaper>
        <newspaper id="1031">
            <title>The Star and Working Man's Guardian (Parramatta, NSW : 1844 - 1845)</title>
            <state>New South Wales</state>
            <issn>13276654</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1031</troveUrl>
            <startDate>1844-03-02</startDate>
            <endDate>1845-09-27</endDate>
        </newspaper>
        <newspaper id="1182">
            <title>The Sun : Sunday Edition (Sydney, NSW : 1910)</title>
            <state>New South Wales</state>
            <issn>22060251</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1182</troveUrl>
            <startDate>1910-12-25</startDate>
            <endDate>1910-12-25</endDate>
        </newspaper>
        <newspaper id="1180">
            <title>The Sun (Sydney, NSW : 1910 - 1954)</title>
            <state>New South Wales</state>
            <issn>22059520</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1180</troveUrl>
            <startDate>1910-07-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1033">
            <title>The Sun and New South Wales Independent Press (Sydney, NSW : 1843)</title>
            <state>New South Wales</state>
            <issn>14403609</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1033</troveUrl>
            <startDate>1843-01-28</startDate>
            <endDate>1843-05-27</endDate>
        </newspaper>
        <newspaper id="39">
            <title>The Sun-Herald (Sydney, NSW : 1953 - 1954)</title>
            <state>New South Wales</state>
            <issn>13231987</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/39</troveUrl>
            <startDate>1953-10-11</startDate>
            <endDate>1954-12-26</endDate>
        </newspaper>
        <newspaper id="38">
            <title>The Sunday Herald (Sydney, NSW : 1949 - 1953)</title>
            <state>New South Wales</state>
            <issn>18360793</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/38</troveUrl>
            <startDate>1949-01-23</startDate>
            <endDate>1953-10-04</endDate>
        </newspaper>
        <newspaper id="1181">
            <title>The Sunday Sun (Sydney, NSW : 1903 - 1910)</title>
            <state>New South Wales</state>
            <issn>22059830</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1181</troveUrl>
            <startDate>1903-04-05</startDate>
            <endDate>1910-12-18</endDate>
        </newspaper>
        <newspaper id="3">
            <title>The Sydney Gazette and New South Wales Advertiser (NSW : 1803 - 1842)</title>
            <state>New South Wales</state>
            <issn>18336310</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/3</troveUrl>
            <startDate>1803-03-05</startDate>
            <endDate>1842-10-20</endDate>
        </newspaper>
        <newspaper id="37">
            <title>The Sydney Herald (NSW : 1831 - 1842)</title>
            <state>New South Wales</state>
            <issn>18360807</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/37</troveUrl>
            <startDate>1831-04-18</startDate>
            <endDate>1842-07-30</endDate>
        </newspaper>
        <newspaper id="698">
            <title>The Sydney Mail and New South Wales Advertiser (NSW : 1871 - 1912)</title>
            <state>New South Wales</state>
            <issn>22026029</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/698</troveUrl>
            <startDate>1871-03-04</startDate>
            <endDate>1912-03-27</endDate>
        </newspaper>
        <newspaper id="95">
            <title>The Sydney Monitor (NSW : 1828 - 1838)</title>
            <state>New South Wales</state>
            <issn>18373836</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/95</troveUrl>
            <startDate>1828-08-16</startDate>
            <endDate>1838-10-03</endDate>
        </newspaper>
        <newspaper id="96">
            <title>The Sydney Monitor and Commercial Advertiser (NSW : 1838 - 1841)</title>
            <state>New South Wales</state>
            <issn>18373828</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/96</troveUrl>
            <startDate>1838-10-03</startDate>
            <endDate>1841-12-29</endDate>
        </newspaper>
        <newspaper id="35">
            <title>The Sydney Morning Herald (NSW : 1842 - 1954)</title>
            <state>New South Wales</state>
            <issn>03126315</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/35</troveUrl>
            <startDate>1842-08-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1034">
            <title>The Sydney Record (NSW : 1843 - 1844)</title>
            <state>New South Wales</state>
            <issn>14403617</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1034</troveUrl>
            <startDate>1843-10-07</startDate>
            <endDate>1844-03-30</endDate>
        </newspaper>
        <newspaper id="506">
            <title>The Sydney Stock and Station Journal (NSW : 1896 - 1924)</title>
            <state>New South Wales</state>
            <issn>22016236</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/506</troveUrl>
            <startDate>1896-04-03</startDate>
            <endDate>1924-02-26</endDate>
        </newspaper>
        <newspaper id="452">
            <title>The Sydney Wool and Stock Journal (NSW : 1899 - 1917)</title>
            <state>New South Wales</state>
            <issn>22015167</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/452</troveUrl>
            <startDate>1899-01-06</startDate>
            <endDate>1917-03-30</endDate>
        </newspaper>
        <newspaper id="481">
            <title>The Tamworth Daily Observer (NSW : 1910 - 1916)</title>
            <state>New South Wales</state>
            <issn>22014330</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/481</troveUrl>
            <startDate>1910-12-31</startDate>
            <endDate>1916-12-30</endDate>
        </newspaper>
        <newspaper id="1036">
            <title>The Teetotaller and General Newspaper (Sydney, NSW : 1842 - 1843)</title>
            <state>New South Wales</state>
            <issn>14403331</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1036</troveUrl>
            <startDate>1842-01-08</startDate>
            <endDate>1843-09-27</endDate>
        </newspaper>
        <newspaper id="631">
            <title>The Telegraph and Shoalhaven Advertiser (NSW : 1879 - 1881)</title>
            <state>New South Wales</state>
            <issn>22023828</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/631</troveUrl>
            <startDate>1879-02-27</startDate>
            <endDate>1881-10-13</endDate>
        </newspaper>
        <newspaper id="727">
            <title>The Temora Advertiser (NSW : 1939)</title>
            <state>New South Wales</state>
            <issn>22030603</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/727</troveUrl>
            <startDate>1939-09-22</startDate>
            <endDate>1939-09-22</endDate>
        </newspaper>
        <newspaper id="855">
            <title>The Temora Star (NSW : 1881 - 1883; 1899 - 1906; 1914; 1925; 1933)</title>
            <state>New South Wales</state>
            <issn>22038418</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/855</troveUrl>
            <startDate>1881-09-07</startDate>
            <endDate>1933-02-13</endDate>
        </newspaper>
        <newspaper id="729">
            <title>The Temora Telegraph and Mining Advocate (NSW : 1880)</title>
            <state>New South Wales</state>
            <issn>2203062X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/729</troveUrl>
        </newspaper>
        <newspaper id="1037">
            <title>The Temperance Advocate and Australasian Commercial and Agricultural Intelligencer (Sydney, NSW : 1840 - 1841)</title>
            <state>New South Wales</state>
            <issn>14401487</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1037</troveUrl>
            <startDate>1840-10-07</startDate>
            <endDate>1841-12-29</endDate>
        </newspaper>
        <newspaper id="682">
            <title>The Tenterfield Courier and District Advocate (NSW : 1914)</title>
            <state>New South Wales</state>
            <issn>22024921</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/682</troveUrl>
            <startDate>1914-02-05</startDate>
            <endDate>1914-12-31</endDate>
        </newspaper>
        <newspaper id="453">
            <title>The Tenterfield Intercolonial Courier and Fairfield and Wallangarra Advocate (NSW : 1900 - 1914)</title>
            <state>New South Wales</state>
            <issn>22015183</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/453</troveUrl>
            <startDate>1900-01-05</startDate>
            <endDate>1914-01-22</endDate>
        </newspaper>
        <newspaper id="1038">
            <title>The True Sun and New South Wales Independent Press (Sydney, NSW : 1844)</title>
            <state>New South Wales</state>
            <issn>14403633</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1038</troveUrl>
            <startDate>1844-02-28</startDate>
            <endDate>1844-02-28</endDate>
        </newspaper>
        <newspaper id="455">
            <title>The Tumut Advocate and Farmers and Settlers' Adviser (NSW : 1903 - 1925)</title>
            <state>New South Wales</state>
            <issn>2201523X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/455</troveUrl>
            <startDate>1903-01-27</startDate>
            <endDate>1925-09-29</endDate>
        </newspaper>
        <newspaper id="659">
            <title>The Tumut and Adelong Times (NSW : 1864 - 1867; 1899 - 1950)</title>
            <state>New South Wales</state>
            <issn>22023445</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/659</troveUrl>
            <startDate>1864-12-29</startDate>
            <endDate>1950-12-19</endDate>
        </newspaper>
        <newspaper id="1158">
            <title>The Twofold Bay Magnet : and South Coast and Southern Monaro Advertiser (NSW : 1908 - 1919)</title>
            <state>New South Wales</state>
            <issn>22055835</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1158</troveUrl>
            <startDate>1908-06-05</startDate>
            <endDate>1919-05-10</endDate>
        </newspaper>
        <newspaper id="700">
            <title>The Ulladulla and Milton Times (NSW : 1891 - 1917)</title>
            <state>New South Wales</state>
            <issn>22026061</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/700</troveUrl>
            <startDate>1891-06-13</startDate>
            <endDate>1917-07-07</endDate>
        </newspaper>
        <newspaper id="992">
            <title>The Uralla News (NSW : 1904 - 1907)</title>
            <state>New South Wales</state>
            <issn>22047565</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/992</troveUrl>
            <startDate>1904-04-29</startDate>
            <endDate>1907-12-25</endDate>
        </newspaper>
        <newspaper id="884">
            <title>The Uralla Times (NSW : 1923 - 1954)</title>
            <state>New South Wales</state>
            <issn>22043101</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/884</troveUrl>
            <startDate>1923-08-02</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="883">
            <title>The Uralla Times and District Advocate (NSW : 1915 - 1923)</title>
            <state>New South Wales</state>
            <issn>2204308X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/883</troveUrl>
            <startDate>1915-01-02</startDate>
            <endDate>1923-07-26</endDate>
        </newspaper>
        <newspaper id="456">
            <title>The Urana Independent and Clear Hills Standard (NSW : 1913 - 1921)</title>
            <state>New South Wales</state>
            <issn>22015302</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/456</troveUrl>
            <startDate>1913-03-14</startDate>
            <endDate>1921-07-29</endDate>
        </newspaper>
        <newspaper id="1039">
            <title>The Voice of Jacob. or, the Hebrews' Monthly Miscellany (Sydney, NSW : 1842)</title>
            <state>New South Wales</state>
            <issn>1440334X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1039</troveUrl>
            <startDate>1842-05-27</startDate>
            <endDate>1842-09-05</endDate>
        </newspaper>
        <newspaper id="457">
            <title>The Voice of the North (NSW : 1918 - 1933)</title>
            <state>New South Wales</state>
            <issn>22015345</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/457</troveUrl>
            <startDate>1918-08-09</startDate>
            <endDate>1933-05-10</endDate>
        </newspaper>
        <newspaper id="962">
            <title>The Walcha News (NSW : 1932 - 1935)</title>
            <state>New South Wales</state>
            <issn>22047301</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/962</troveUrl>
            <startDate>1932-12-16</startDate>
            <endDate>1935-12-20</endDate>
        </newspaper>
        <newspaper id="923">
            <title>The Walcha News and Southern New England Advocate (NSW : 1904 - 1907; 1927)</title>
            <state>New South Wales</state>
            <issn>2204728X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/923</troveUrl>
            <startDate>1904-10-08</startDate>
            <endDate>1927-03-11</endDate>
        </newspaper>
        <newspaper id="922">
            <title>The Walcha Witness and Vernon County Record (NSW : 1895 - 1906)</title>
            <state>New South Wales</state>
            <issn>22047263</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/922</troveUrl>
            <startDate>1895-06-15</startDate>
            <endDate>1906-12-29</endDate>
        </newspaper>
        <newspaper id="1160">
            <title>The Warialda Watchman (NSW : 1899)</title>
            <state>New South Wales</state>
            <issn>22057323</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1160</troveUrl>
            <startDate>1899-01-12</startDate>
            <endDate>1899-02-16</endDate>
        </newspaper>
        <newspaper id="1040">
            <title>The Weekly Register of Politics, Facts and General Literature (Sydney, NSW : 1843 - 1845)</title>
            <state>New South Wales</state>
            <issn>14402548</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1040</troveUrl>
            <startDate>1843-07-29</startDate>
            <endDate>1845-12-27</endDate>
        </newspaper>
        <newspaper id="632">
            <title>The West Wyalong Advocate (NSW : 1928 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023402</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/632</troveUrl>
            <startDate>1928-03-02</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="702">
            <title>The Wingham Chronicle and Manning River Observer (NSW : 1898 - 1954)</title>
            <state>New South Wales</state>
            <issn>22025960</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/702</troveUrl>
            <startDate>1898-01-01</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="465">
            <title>The Wollondilly Press (NSW : 1906 - 1914)</title>
            <state>New South Wales</state>
            <issn>2201490X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/465</troveUrl>
            <startDate>1906-03-31</startDate>
            <endDate>1914-06-27</endDate>
        </newspaper>
        <newspaper id="747">
            <title>The Worker (Wagga, NSW : 1892 - 1913)</title>
            <state>New South Wales</state>
            <issn>22028927</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/747</troveUrl>
            <startDate>1892-09-24</startDate>
            <endDate>1913-10-30</endDate>
        </newspaper>
        <newspaper id="1003">
            <title>The Workers' Weekly (Sydney, NSW : 1923 - 1939)</title>
            <state>New South Wales</state>
            <issn>22048618</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1003</troveUrl>
            <startDate>1923-06-22</startDate>
            <endDate>1939-08-29</endDate>
        </newspaper>
        <newspaper id="466">
            <title>The World's News (Sydney, NSW : 1901 - 1955)</title>
            <state>New South Wales</state>
            <issn>22014780</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/466</troveUrl>
            <startDate>1901-12-21</startDate>
            <endDate>1955-12-31</endDate>
        </newspaper>
        <newspaper id="467">
            <title>The Wyalong Advocate and Mining, Agricultural and Pastoral Gazette (NSW : 1900 - 1928)</title>
            <state>New South Wales</state>
            <issn>22014802</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/467</troveUrl>
            <startDate>1900-11-07</startDate>
            <endDate>1928-02-28</endDate>
        </newspaper>
        <newspaper id="730">
            <title>The Wyalong Star and Temora and Barmedman Advertiser (West Wyalong, NSW : 1894 - 1895; 1899 - 1906)</title>
            <state>New South Wales</state>
            <issn>22030662</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/730</troveUrl>
            <startDate>1894-04-20</startDate>
            <endDate>1906-06-05</endDate>
        </newspaper>
        <newspaper id="882">
            <title>Tingha Advocate and North-Western Journal (NSW : 1916 - 1932)</title>
            <state>New South Wales</state>
            <issn>22043063</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/882</troveUrl>
            <startDate>1916-01-07</startDate>
            <endDate>1932-06-24</endDate>
        </newspaper>
        <newspaper id="633">
            <title>Tocumwal Guardian and Finley Free Press (NSW : 1908 - 1913)</title>
            <state>New South Wales</state>
            <issn>22022120</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/633</troveUrl>
            <startDate>1908-02-14</startDate>
            <endDate>1913-03-21</endDate>
        </newspaper>
        <newspaper id="454">
            <title>Tocumwal Guardian and Riverina Echo (NSW : 1913 - 1918)</title>
            <state>New South Wales</state>
            <issn>22015205</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/454</troveUrl>
            <startDate>1913-03-28</startDate>
            <endDate>1918-12-13</endDate>
        </newspaper>
        <newspaper id="634">
            <title>Tocumwal Guardian and Riverina Stock Journal (NSW : 1919 - 1922)</title>
            <state>New South Wales</state>
            <issn>22022163</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/634</troveUrl>
            <startDate>1919-01-10</startDate>
            <endDate>1922-12-22</endDate>
        </newspaper>
        <newspaper id="1002">
            <title>Tribune (Sydney, NSW : 1939 - 1954)</title>
            <state>New South Wales</state>
            <issn>22048790</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1002</troveUrl>
            <startDate>1939-09-01</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="699">
            <title>Truth (Sydney, NSW : 1894 - 1954)</title>
            <state>New South Wales</state>
            <issn>2202588X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/699</troveUrl>
            <startDate>1894-01-07</startDate>
            <endDate>1954-12-26</endDate>
        </newspaper>
        <newspaper id="1185">
            <title>Tung Wah News (Sydney, NSW : 1898 - 1902)</title>
            <state>New South Wales</state>
            <issn>22059296</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1185</troveUrl>
            <startDate>1898-06-29</startDate>
            <endDate>1902-06-18</endDate>
        </newspaper>
        <newspaper id="1184">
            <title>Tung Wah Times (Sydney, NSW : 1902; 1911 - 1936)</title>
            <state>New South Wales</state>
            <issn>22059377</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1184</troveUrl>
            <startDate>1902-08-16</startDate>
            <endDate>1936-12-26</endDate>
        </newspaper>
        <newspaper id="1007">
            <title>Tweed Daily (Murwillumbah, NSW : 1914 - 1949)</title>
            <state>New South Wales</state>
            <issn>22049302</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1007</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1949-04-16</endDate>
        </newspaper>
        <newspaper id="394">
            <title>Twofold Bay and Maneroo Observer (NSW : 1860)</title>
            <state>New South Wales</state>
            <issn>22012273</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/394</troveUrl>
            <startDate>1860-10-02</startDate>
            <endDate>1860-12-24</endDate>
        </newspaper>
        <newspaper id="478">
            <title>Twofold Bay and Maneroo Telegraph (NSW : 1860)</title>
            <state>New South Wales</state>
            <issn>22015434</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/478</troveUrl>
            <startDate>1860-06-19</startDate>
            <endDate>1860-10-16</endDate>
        </newspaper>
        <newspaper id="479">
            <title>Twofold Bay Telegraph (NSW : 1860)</title>
            <state>New South Wales</state>
            <issn>22015507</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/479</troveUrl>
            <startDate>1860-10-19</startDate>
            <endDate>1860-12-28</endDate>
        </newspaper>
        <newspaper id="810">
            <title>Upper Hunter Courier (Murrurundi, NSW : 1871)</title>
            <state>New South Wales</state>
            <issn>22036113</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/810</troveUrl>
            <startDate>1871-08-15</startDate>
            <endDate>1871-08-15</endDate>
        </newspaper>
        <newspaper id="413">
            <title>Wagga Wagga Advertiser (NSW : 1875 - 1910)</title>
            <state>New South Wales</state>
            <issn>22013202</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/413</troveUrl>
            <startDate>1875-05-05</startDate>
            <endDate>1910-12-31</endDate>
        </newspaper>
        <newspaper id="412">
            <title>Wagga Wagga Advertiser and Riverine Reporter (NSW : 1868 - 1875)</title>
            <state>New South Wales</state>
            <issn>22013180</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/412</troveUrl>
            <startDate>1868-10-17</startDate>
            <endDate>1875-03-24</endDate>
        </newspaper>
        <newspaper id="701">
            <title>Wagga Wagga Express (NSW : 1879 - 1917)</title>
            <state>New South Wales</state>
            <issn>22025847</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/701</troveUrl>
            <startDate>1879-01-01</startDate>
            <endDate>1917-06-30</endDate>
        </newspaper>
        <newspaper id="1102">
            <title>Wagga Wagga Express (NSW : 1930 - 1939)</title>
            <state>New South Wales</state>
            <issn>22054227</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1102</troveUrl>
            <startDate>1930-09-06</startDate>
            <endDate>1939-06-17</endDate>
        </newspaper>
        <newspaper id="382">
            <title>Wagga Wagga Express and Murrumbidgee District Advertiser (NSW : 1858 - 1859; 1866; 1872 - 1874)</title>
            <state>New South Wales</state>
            <issn>22007962</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/382</troveUrl>
            <startDate>1858-10-30</startDate>
            <endDate>1874-12-30</endDate>
        </newspaper>
        <newspaper id="1159">
            <title>Warialda Standard and Northern Districts' Advertiser (NSW : 1900 - 1954)</title>
            <state>New South Wales</state>
            <issn>2205670X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1159</troveUrl>
            <startDate>1900-04-10</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="458">
            <title>Watchman (Sydney, NSW : 1902 - 1926)</title>
            <state>New South Wales</state>
            <issn>22015361</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/458</troveUrl>
            <startDate>1902-02-01</startDate>
            <endDate>1926-08-26</endDate>
        </newspaper>
        <newspaper id="660">
            <title>Wellington Times (NSW : 1899 - 1954)</title>
            <state>New South Wales</state>
            <issn>22023623</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/660</troveUrl>
            <startDate>1899-05-18</startDate>
            <endDate>1954-12-20</endDate>
        </newspaper>
        <newspaper id="419">
            <title>Werriwa Times and Goulburn District News (NSW : 1901)</title>
            <state>New South Wales</state>
            <issn>22013326</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/419</troveUrl>
            <startDate>1901-08-02</startDate>
            <endDate>1901-12-23</endDate>
        </newspaper>
        <newspaper id="661">
            <title>Western Age (Dubbo, NSW : 1914 - 1932)</title>
            <state>New South Wales</state>
            <issn>22023534</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/661</troveUrl>
            <startDate>1914-11-04</startDate>
            <endDate>1932-08-12</endDate>
        </newspaper>
        <newspaper id="662">
            <title>Western Age (Dubbo, NSW : 1933 - 1936)</title>
            <state>New South Wales</state>
            <issn>22023933</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/662</troveUrl>
            <startDate>1933-04-28</startDate>
            <endDate>1936-03-27</endDate>
        </newspaper>
        <newspaper id="459">
            <title>Western Champion (Parkes, NSW : 1898 - 1934)</title>
            <state>New South Wales</state>
            <issn>22015388</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/459</troveUrl>
            <startDate>1898-01-07</startDate>
            <endDate>1934-08-17</endDate>
        </newspaper>
        <newspaper id="663">
            <title>Western Grazier (Wilcannia, NSW : 1896 - 1951)</title>
            <state>New South Wales</state>
            <issn>22023569</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/663</troveUrl>
            <startDate>1896-01-01</startDate>
            <endDate>1951-06-29</endDate>
        </newspaper>
        <newspaper id="426">
            <title>Western Herald (Bourke, NSW : 1887 - 1970)</title>
            <state>New South Wales</state>
            <issn>22013504</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/426</troveUrl>
            <startDate>1887-10-26</startDate>
            <endDate>1970-12-11</endDate>
        </newspaper>
        <newspaper id="192">
            <title>Windsor and Richmond Gazette (NSW : 1888 - 1954)</title>
            <state>New South Wales</state>
            <issn>08121885</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/192</troveUrl>
            <startDate>1888-07-21</startDate>
            <endDate>1955-12-21</endDate>
        </newspaper>
        <newspaper id="190">
            <title>Windsor Express and Richmond Advertiser (NSW : 1843 - 1844)</title>
            <state>New South Wales</state>
            <issn>18389384</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/190</troveUrl>
            <startDate>1843-05-17</startDate>
            <endDate>1844-05-09</endDate>
        </newspaper>
        <newspaper id="468">
            <title>Young Witness (NSW : 1915 - 1923)</title>
            <state>New South Wales</state>
            <issn>22014853</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/468</troveUrl>
            <startDate>1915-01-05</startDate>
            <endDate>1923-11-03</endDate>
        </newspaper>
        <newspaper id="47">
            <title>Army News (Darwin, NT : 1941 - 1946)</title>
            <state>Northern Territory</state>
            <issn>18355331</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/47</troveUrl>
            <startDate>1941-10-26</startDate>
            <endDate>1946-01-01</endDate>
        </newspaper>
        <newspaper id="63">
            <title>Centralian Advocate (Alice Springs, NT : 1947 - 1954)</title>
            <state>Northern Territory</state>
            <issn>14471647</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/63</troveUrl>
            <startDate>1947-05-24</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="118">
            <title>Moonta Herald and Northern Territory Gazette (NT : 1869)</title>
            <state>Northern Territory</state>
            <issn>1837820X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/118</troveUrl>
            <startDate>1869-01-02</startDate>
            <endDate>1869-02-24</endDate>
        </newspaper>
        <newspaper id="80">
            <title>North Australian (Darwin, NT : 1883 - 1889)</title>
            <state>Northern Territory</state>
            <issn>1835534X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/80</troveUrl>
            <startDate>1883-06-01</startDate>
            <endDate>1889-05-25</endDate>
        </newspaper>
        <newspaper id="25">
            <title>Northern Standard (Darwin, NT : 1921 - 1955)</title>
            <state>Northern Territory</state>
            <issn>18355323</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/25</troveUrl>
            <startDate>1921-02-19</startDate>
            <endDate>1955-02-10</endDate>
        </newspaper>
        <newspaper id="36">
            <title>Northern Territory Times (Darwin, NT : 1927 - 1932)</title>
            <state>Northern Territory</state>
            <issn>18358667</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/36</troveUrl>
            <startDate>1927-06-07</startDate>
            <endDate>1932-06-28</endDate>
        </newspaper>
        <newspaper id="9">
            <title>Northern Territory Times and Gazette (Darwin, NT : 1873 - 1927)</title>
            <state>Northern Territory</state>
            <issn>18340911</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/9</troveUrl>
            <startDate>1873-11-07</startDate>
            <endDate>1927-06-03</endDate>
        </newspaper>
        <newspaper id="111">
            <title>The North Australian and Northern Territory Government Gazette (Darwin, NT : 1889 - 1890) </title>
            <state>Northern Territory</state>
            <issn>18373534</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/111</troveUrl>
            <startDate>1889-06-01</startDate>
            <endDate>1890-05-30</endDate>
        </newspaper>
        <newspaper id="1066">
            <title>Balonne Beacon (St. George, Qld. : 1909 - 1954)</title>
            <state>Queensland</state>
            <issn>22051295</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1066</troveUrl>
            <startDate>1909-01-02</startDate>
            <endDate>1955-12-29</endDate>
        </newspaper>
        <newspaper id="899">
            <title>Bowen Independent (Qld. : 1911 - 1954)</title>
            <state>Queensland</state>
            <issn>1832892X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/899</troveUrl>
            <startDate>1911-01-03</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1055">
            <title>Brisbane Telegraph (Qld. : 1948 - 1954)</title>
            <state>Queensland</state>
            <issn>22051449</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1055</troveUrl>
            <startDate>1948-01-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="62">
            <title>Cairns Morning Post (Qld. : 1907 - 1909)</title>
            <state>Queensland</state>
            <issn>18373143</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/62</troveUrl>
            <startDate>1907-12-02</startDate>
            <endDate>1909-07-03</endDate>
        </newspaper>
        <newspaper id="60">
            <title>Cairns Post (Qld. : 1884 - 1893)</title>
            <state>Queensland</state>
            <issn>18373135</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/60</troveUrl>
            <startDate>1884-02-14</startDate>
            <endDate>1893-05-20</endDate>
        </newspaper>
        <newspaper id="61">
            <title>Cairns Post (Qld. : 1909 - 1954)</title>
            <state>Queensland</state>
            <issn>13228587</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/61</troveUrl>
            <startDate>1909-07-05</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="286">
            <title>Chronicle and North Coast Advertiser (Qld. : 1903 - 1922)</title>
            <state>Queensland</state>
            <issn>22001174</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/286</troveUrl>
            <startDate>1903-07-31</startDate>
            <endDate>1922-12-15</endDate>
        </newspaper>
        <newspaper id="833">
            <title>Cloncurry Advocate (Qld. : 1931 - 1953)</title>
            <state>Queensland</state>
            <issn>22037837</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/833</troveUrl>
            <startDate>1931-01-10</startDate>
            <endDate>1953-12-01</endDate>
        </newspaper>
        <newspaper id="837">
            <title>Daily Mercury (Mackay, Qld. : 1906 - 1954)</title>
            <state>Queensland</state>
            <issn>13295942</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/837</troveUrl>
            <startDate>1906-01-10</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="893">
            <title>Daily Standard (Brisbane, Qld. : 1912 - 1936)</title>
            <state>Queensland</state>
            <issn>22045082</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/893</troveUrl>
            <startDate>1912-12-28</startDate>
            <endDate>1936-07-07</endDate>
        </newspaper>
        <newspaper id="1062">
            <title>Dalby Herald and Western Queensland Advertiser (Qld. : 1866 - 1879)</title>
            <state>Queensland</state>
            <issn>22051570</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1062</troveUrl>
            <startDate>1866-01-11</startDate>
            <endDate>1879-12-27</endDate>
        </newspaper>
        <newspaper id="834">
            <title>Darling Downs Gazette (Qld. : 1881 - 1922)</title>
            <state>Queensland</state>
            <issn>22036873</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/834</troveUrl>
            <startDate>1881-01-05</startDate>
            <endDate>1922-06-30</endDate>
        </newspaper>
        <newspaper id="852">
            <title>Dayboro Times and Moreton Mail (Qld. : 1937 - 1940; 1945 - 1954)</title>
            <state>Queensland</state>
            <issn>22039147</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/852</troveUrl>
            <startDate>1937-01-30</startDate>
            <endDate>1954-12-18</endDate>
        </newspaper>
        <newspaper id="1103">
            <title>Geraldton Advocate and Johnstone River Guardian (Qld. : 1895 - 1896)</title>
            <state>Queensland</state>
            <issn>22054278</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1103</troveUrl>
            <startDate>1895-01-04</startDate>
            <endDate>1896-01-01</endDate>
        </newspaper>
        <newspaper id="839">
            <title>Gympie Times and Mary River Mining Gazette (Qld. : 1868 - 1919)</title>
            <state>Queensland</state>
            <issn>22036912</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/839</troveUrl>
            <startDate>1868-10-17</startDate>
            <endDate>1919-12-30</endDate>
        </newspaper>
        <newspaper id="851">
            <title>Humpybong Weekly and Advertiser (Redcliffe, Qld. : 1927 - 1932)</title>
            <state>Queensland</state>
            <issn>22039120</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/851</troveUrl>
            <startDate>1927-03-10</startDate>
            <endDate>1932-11-10</endDate>
        </newspaper>
        <newspaper id="376">
            <title>Ipswich Herald and General Advertiser (Qld. : 1861)</title>
            <state>Queensland</state>
            <issn>22007458</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/376</troveUrl>
            <startDate>1861-03-29</startDate>
            <endDate>1861-08-30</endDate>
        </newspaper>
        <newspaper id="1059">
            <title>Johnstone River Advocate (Geraldton, Qld. : 1906 - 1908)</title>
            <state>Queensland</state>
            <issn>22051511</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1059</troveUrl>
            <startDate>1906-12-06</startDate>
            <endDate>1908-08-19</endDate>
        </newspaper>
        <newspaper id="1060">
            <title>Johnstone River Advocate and Innisfail News (Qld. : 1928 - 1941)</title>
            <state>Queensland</state>
            <issn>22051538</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1060</troveUrl>
            <startDate>1928-08-28</startDate>
            <endDate>1941-05-16</endDate>
        </newspaper>
        <newspaper id="842">
            <title>Logan and Albert Advocate (Qld. : 1893 - 1900)</title>
            <state>Queensland</state>
            <issn>22039996</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/842</troveUrl>
            <startDate>1893-09-23</startDate>
            <endDate>1900-09-15</endDate>
        </newspaper>
        <newspaper id="843">
            <title>Logan and Albert Bulletin (Southport, Qld. : 1896 - 1901; 1909; 1921; 1922; 1928)</title>
            <state>Queensland</state>
            <issn>22039724</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/843</troveUrl>
            <startDate>1896-08-29</startDate>
            <endDate>1928-06-23</endDate>
        </newspaper>
        <newspaper id="850">
            <title>Logan Witness (Beenleigh, Qld. : 1878 - 1893)</title>
            <state>Queensland</state>
            <issn>22039708</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/850</troveUrl>
            <startDate>1878-02-09</startDate>
            <endDate>1893-06-10</endDate>
        </newspaper>
        <newspaper id="836">
            <title>Mackay Mercury (Qld. : 1887 - 1905)</title>
            <state>Queensland</state>
            <issn>2203787X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/836</troveUrl>
            <startDate>1887-05-12</startDate>
            <endDate>1905-12-30</endDate>
        </newspaper>
        <newspaper id="835">
            <title>Mackay Mercury and South Kennedy Advertiser (Qld. : 1867 - 1887)</title>
            <state>Queensland</state>
            <issn>22037853</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/835</troveUrl>
            <startDate>1867-03-20</startDate>
            <endDate>1887-05-10</endDate>
        </newspaper>
        <newspaper id="732">
            <title>Maryborough Chronicle (Qld. : 1947 - 1954)</title>
            <state>Queensland</state>
            <issn>22029141</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/732</troveUrl>
            <startDate>1947-04-25</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="731">
            <title>Maryborough Chronicle, Wide Bay and Burnett Advertiser (Qld. : 1860 - 1947)</title>
            <state>Queensland</state>
            <issn>22029052</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/731</troveUrl>
            <startDate>1860-11-21</startDate>
            <endDate>1947-04-24</endDate>
        </newspaper>
        <newspaper id="77">
            <title>Morning Bulletin (Rockhampton, Qld. : 1878 - 1954)</title>
            <state>Queensland</state>
            <issn>13227769</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/77</troveUrl>
            <startDate>1878-01-03</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="79">
            <title>Morning Post (Cairns, Qld. : 1897 - 1907)</title>
            <state>Queensland</state>
            <issn>18373119</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/79</troveUrl>
            <startDate>1897-06-09</startDate>
            <endDate>1907-11-30</endDate>
        </newspaper>
        <newspaper id="106">
            <title>Nambour Chronicle and North Coast Advertiser (Qld. : 1922 - 1954)</title>
            <state>Queensland</state>
            <issn>18397077</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/106</troveUrl>
            <startDate>1922-12-22</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="838">
            <title>Nashville Times, Gympie and Mary River Mining Gazette (Qld. : 1868)</title>
            <state>Queensland</state>
            <issn>2203742X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/838</troveUrl>
            <startDate>1868-02-15</startDate>
            <endDate>1868-10-15</endDate>
        </newspaper>
        <newspaper id="678">
            <title>National Leader (Brisbane, Qld. : 1916 - 1918)</title>
            <state>Queensland</state>
            <issn>2202512X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/678</troveUrl>
            <startDate>1916-09-15</startDate>
            <endDate>1918-12-13</endDate>
        </newspaper>
        <newspaper id="263">
            <title>North Australian and Queensland General Advertiser  (Ipswich, Qld. : 1862 - 1863)</title>
            <state>Queensland</state>
            <issn>18396798</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/263</troveUrl>
            <startDate>1862-05-01</startDate>
            <endDate>1863-09-12</endDate>
        </newspaper>
        <newspaper id="1068">
            <title>Northern Argus (Rockhampton, Qld. : 1865 - 1874)</title>
            <state>Queensland</state>
            <issn>22051228</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1068</troveUrl>
            <startDate>1865-07-24</startDate>
            <endDate>1874-12-31</endDate>
        </newspaper>
        <newspaper id="900">
            <title>Pittsworth Sentinel (Qld. : 1919 - 1954)</title>
            <state>Queensland</state>
            <issn>22045104</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/900</troveUrl>
            <startDate>1919-01-01</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="379">
            <title>Queensland Country Life (Qld. : 1900 - 1954)</title>
            <state>Queensland</state>
            <issn>1321165X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/379</troveUrl>
            <startDate>1900-03-28</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="338">
            <title>Queensland Figaro (Brisbane, Qld. : 1883 - 1885)</title>
            <state>Queensland</state>
            <issn>22002839</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/338</troveUrl>
            <startDate>1883-01-06</startDate>
            <endDate>1885-06-27</endDate>
        </newspaper>
        <newspaper id="336">
            <title>Queensland Figaro (Brisbane, Qld. : 1901 - 1936)</title>
            <state>Queensland</state>
            <issn>22002855</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/336</troveUrl>
            <startDate>1901-08-15</startDate>
            <endDate>1936-10-17</endDate>
        </newspaper>
        <newspaper id="337">
            <title>Queensland Figaro and Punch (Brisbane, Qld. : 1885 - 1889)</title>
            <state>Queensland</state>
            <issn>22002847</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/337</troveUrl>
            <startDate>1885-07-04</startDate>
            <endDate>1889-11-02</endDate>
        </newspaper>
        <newspaper id="378">
            <title>Queensland Times (Ipswich) (Qld. : 1909 - 1954)</title>
            <state>Queensland</state>
            <issn>13295950</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/378</troveUrl>
            <startDate>1909-01-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="377">
            <title>Queensland Times, Ipswich Herald and General Advertiser (Qld. : 1861 - 1908)</title>
            <state>Queensland</state>
            <issn>22007474</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/377</troveUrl>
            <startDate>1861-10-08</startDate>
            <endDate>1908-12-31</endDate>
        </newspaper>
        <newspaper id="91">
            <title>Rockhampton Bulletin (Qld. : 1871 - 1878)</title>
            <state>Queensland</state>
            <issn>1837378X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/91</troveUrl>
            <startDate>1872-01-02</startDate>
            <endDate>1878-01-01</endDate>
        </newspaper>
        <newspaper id="92">
            <title>Rockhampton Bulletin and Central Queensland Advertiser (Qld. : 1861 - 1871)</title>
            <state>Queensland</state>
            <issn>18373798</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/92</troveUrl>
            <startDate>1861-07-09</startDate>
            <endDate>1871-12-30</endDate>
        </newspaper>
        <newspaper id="672">
            <title>South Coast Bulletin (Southport, Qld. : 1929 - 1954)</title>
            <state>Queensland</state>
            <issn>22023992</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/672</troveUrl>
            <startDate>1929-01-05</startDate>
            <endDate>1954-12-29</endDate>
        </newspaper>
        <newspaper id="1211">
            <title>South Coast News (Southport, Qld. : 1952 - 1954)</title>
            <state>Queensland</state>
            <issn>22062149</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1211</troveUrl>
            <startDate>1952-09-13</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1212">
            <title>Southern Queensland Bulletin (Southport, Qld. : 1888 - 1891)</title>
            <state>Queensland</state>
            <issn>22061835</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1212</troveUrl>
            <startDate>1888-01-14</startDate>
            <endDate>1891-12-26</endDate>
        </newspaper>
        <newspaper id="1209">
            <title>Southport and Nerang Bulletin (Qld. : 1893)</title>
            <state>Queensland</state>
            <issn>22062173</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1209</troveUrl>
            <startDate>1893-09-23</startDate>
            <endDate>1893-09-23</endDate>
        </newspaper>
        <newspaper id="375">
            <title>Sunday Mail (Brisbane) (Qld. : 1926 - 1954)</title>
            <state>Queensland</state>
            <issn>13225243</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/375</troveUrl>
            <startDate>1926-10-03</startDate>
            <endDate>1954-12-26</endDate>
        </newspaper>
        <newspaper id="1064">
            <title>The Beaudesert Times (Qld. : 1908 - 1954)</title>
            <state>Queensland</state>
            <issn>22051384</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1064</troveUrl>
            <startDate>1908-10-10</startDate>
            <endDate>1955-12-30</endDate>
        </newspaper>
        <newspaper id="1208">
            <title>The Border Star (Coolangatta, Qld. : 1929 - 1942)</title>
            <state>Queensland</state>
            <issn>22061746</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1208</troveUrl>
            <startDate>1929-02-23</startDate>
            <endDate>1942-01-30</endDate>
        </newspaper>
        <newspaper id="16">
            <title>The Brisbane Courier (Qld. : 1864 - 1933)</title>
            <state>Queensland</state>
            <issn>18335551</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/16</troveUrl>
            <startDate>1864-04-11</startDate>
            <endDate>1933-08-31</endDate>
        </newspaper>
        <newspaper id="1071">
            <title>The Bundaberg Mail (Qld. : 1917 - 1925)</title>
            <state>Queensland</state>
            <issn>22051678</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1071</troveUrl>
            <startDate>1917-12-12</startDate>
            <endDate>1925-06-30</endDate>
        </newspaper>
        <newspaper id="1070">
            <title>The Bundaberg Mail and Burnett Advertiser (Qld. : 1892 - 1917)</title>
            <state>Queensland</state>
            <issn>22051651</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1070</troveUrl>
            <startDate>1892-12-12</startDate>
            <endDate>1917-12-11</endDate>
        </newspaper>
        <newspaper id="186">
            <title>The Capricornian (Rockhampton, Qld. : 1875 - 1929)</title>
            <state>Queensland</state>
            <issn>18389775</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/186</troveUrl>
            <startDate>1875-01-02</startDate>
            <endDate>1929-12-26</endDate>
        </newspaper>
        <newspaper id="187">
            <title>The Central Queensland Herald (Rockhampton, Qld. : 1930 - 1956)</title>
            <state>Queensland</state>
            <issn>18389783</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/187</troveUrl>
            <startDate>1930-01-02</startDate>
            <endDate>1956-11-29</endDate>
        </newspaper>
        <newspaper id="340">
            <title>The Charleville Courier (Qld. : 1896 - 1898)</title>
            <state>Queensland</state>
            <issn>22003916</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/340</troveUrl>
            <startDate>1896-05-16</startDate>
            <endDate>1898-11-26</endDate>
        </newspaper>
        <newspaper id="274">
            <title>The Charleville Times (Brisbane, Qld. : 1896 - 1954)</title>
            <state>Queensland</state>
            <issn>18397824</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/274</troveUrl>
            <startDate>1896-05-16</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1207">
            <title>The Coolangatta Chronicle (Qld. : 1926)</title>
            <state>Queensland</state>
            <issn>2206172X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1207</troveUrl>
            <startDate>1926-09-13</startDate>
            <endDate>1926-09-13</endDate>
        </newspaper>
        <newspaper id="15">
            <title>The Courier (Brisbane, Qld. : 1861 - 1864)</title>
            <state>Queensland</state>
            <issn>18335578</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/15</troveUrl>
            <startDate>1861-05-14</startDate>
            <endDate>1864-04-09</endDate>
        </newspaper>
        <newspaper id="12">
            <title>The Courier-Mail (Brisbane, Qld. : 1933 - 1954)</title>
            <state>Queensland</state>
            <issn>13225235</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/12</troveUrl>
            <startDate>1933-08-28</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1058">
            <title>The Daily Mail (Brisbane, Qld. : 1903 - 1926)</title>
            <state>Queensland</state>
            <issn>22051619</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1058</troveUrl>
            <startDate>1903-10-03</startDate>
            <endDate>1926-10-31</endDate>
        </newspaper>
        <newspaper id="1069">
            <title>The Daily Northern Argus (Rockhampton, Qld. : 1875 - 1896)</title>
            <state>Queensland</state>
            <issn>2205118X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1069</troveUrl>
            <startDate>1875-01-01</startDate>
            <endDate>1896-12-31</endDate>
        </newspaper>
        <newspaper id="1063">
            <title>The Dalby Herald (Qld. : 1910 - 1954)</title>
            <state>Queensland</state>
            <issn>1446134X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1063</troveUrl>
            <startDate>1910-05-14</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="257">
            <title>The Darling Downs Gazette and General Advertiser (Toowoomba, Qld. : 1858 - 1880)</title>
            <state>Queensland</state>
            <issn>18396755</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/257</troveUrl>
            <startDate>1858-06-10</startDate>
            <endDate>1880-12-22</endDate>
        </newspaper>
        <newspaper id="1061">
            <title>The Evening Advocate (Innisfail, Qld. : 1941 - 1954)</title>
            <state>Queensland</state>
            <issn>22051554</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1061</troveUrl>
            <startDate>1941-05-19</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="943">
            <title>The Evening News (Rockhampton, Qld. : 1924 - 1941)</title>
            <state>Queensland</state>
            <issn>22046437</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/943</troveUrl>
            <startDate>1924-10-01</startDate>
            <endDate>1941-07-31</endDate>
        </newspaper>
        <newspaper id="1067">
            <title>The Evening Telegraph (Charters Towers, Qld. : 1901 - 1921)</title>
            <state>Queensland</state>
            <issn>22051279</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1067</troveUrl>
            <startDate>1901-03-04</startDate>
            <endDate>1921-08-10</endDate>
        </newspaper>
        <newspaper id="679">
            <title>The Leader (Brisbane, Qld. : 1918 - 1919)</title>
            <state>Queensland</state>
            <issn>22025146</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/679</troveUrl>
            <startDate>1918-12-20</startDate>
            <endDate>1919-12-01</endDate>
        </newspaper>
        <newspaper id="102">
            <title>The Longreach Leader (Qld. : 1923 - 1954)</title>
            <state>Queensland</state>
            <issn>18373054</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/102</troveUrl>
            <startDate>1923-01-05</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="14">
            <title>The Moreton Bay Courier (Brisbane, Qld. : 1846 - 1861)</title>
            <state>Queensland</state>
            <issn>1833556X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/14</troveUrl>
            <startDate>1846-06-20</startDate>
            <endDate>1861-05-11</endDate>
        </newspaper>
        <newspaper id="264">
            <title>The North Australian (Brisbane, Qld. : 1863 - 1865)</title>
            <state>Queensland</state>
            <issn>18397050</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/264</troveUrl>
            <startDate>1863-09-15</startDate>
            <endDate>1865-03-25</endDate>
        </newspaper>
        <newspaper id="262">
            <title>The North Australian, Ipswich and General Advertiser (Ipswich, Qld. : 1856 - 1862)</title>
            <state>Queensland</state>
            <issn>18396801</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/262</troveUrl>
            <startDate>1856-01-01</startDate>
            <endDate>1862-04-29</endDate>
        </newspaper>
        <newspaper id="269">
            <title>The North Queensland Register (Townsville, Qld. : 1892 - 1905)</title>
            <state>Queensland</state>
            <issn>1849678X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/269</troveUrl>
            <startDate>1892-06-15</startDate>
            <endDate>1905-12-18</endDate>
        </newspaper>
        <newspaper id="733">
            <title>The Northern Herald (Cairns, Qld. : 1913 - 1939)</title>
            <state>Queensland</state>
            <issn>22029079</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/733</troveUrl>
            <startDate>1913-04-11</startDate>
            <endDate>1939-12-30</endDate>
        </newspaper>
        <newspaper id="258">
            <title>The Northern Miner (Charters Towers, Qld. : 1874 - 1954)</title>
            <state>Queensland</state>
            <issn>18396763</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/258</troveUrl>
            <startDate>1874-05-30</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="268">
            <title>The Northern Mining Register (Charters Towers, Qld. : 1891 - 1892)</title>
            <state>Queensland</state>
            <issn>18396771</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/268</troveUrl>
            <startDate>1891-03-04</startDate>
            <endDate>1892-06-08</endDate>
        </newspaper>
        <newspaper id="1151">
            <title>The Northern Sportsman (Innisfail, Qld. : 1928)</title>
            <state>Queensland</state>
            <issn>22058869</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1151</troveUrl>
            <startDate>1928-08-31</startDate>
            <endDate>1928-08-31</endDate>
        </newspaper>
        <newspaper id="1213">
            <title>The Proserpine Guardian (Qld. : 1935 - 1954)</title>
            <state>Queensland</state>
            <issn>22061770</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1213</troveUrl>
            <startDate>1935-02-16</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="42">
            <title>The Queenslander (Brisbane, Qld. : 1866 - 1939)</title>
            <state>Queensland</state>
            <issn>18368190</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/42</troveUrl>
            <startDate>1866-02-03</startDate>
            <endDate>1939-02-22</endDate>
        </newspaper>
        <newspaper id="1210">
            <title>The South Coast Express (Surfers Paradise, Qld. : 1949 - 1951)</title>
            <state>Queensland</state>
            <issn>22061797</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1210</troveUrl>
            <startDate>1949-09-08</startDate>
            <endDate>1951-08-17</endDate>
        </newspaper>
        <newspaper id="1065">
            <title>The St. George Standard and Balonne Advertiser (Qld. : 1878 - 1879; 1902 - 1904)</title>
            <state>Queensland</state>
            <issn>22051341</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1065</troveUrl>
            <startDate>1878-07-17</startDate>
            <endDate>1904-12-23</endDate>
        </newspaper>
        <newspaper id="840">
            <title>The Telegraph (Brisbane, Qld. : 1872 - 1947)</title>
            <state>Queensland</state>
            <issn>2203790X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/840</troveUrl>
            <startDate>1872-10-01</startDate>
            <endDate>1947-12-31</endDate>
        </newspaper>
        <newspaper id="1056">
            <title>The Toowoomba Chronicle and Queensland Advertiser (Qld. : 1861 - 1875)</title>
            <state>Queensland</state>
            <issn>22051473</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1056</troveUrl>
            <startDate>1861-07-11</startDate>
            <endDate>1875-11-20</endDate>
        </newspaper>
        <newspaper id="891">
            <title>The Week (Brisbane, Qld. : 1876 - 1934)</title>
            <state>Queensland</state>
            <issn>22045058</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/891</troveUrl>
            <startDate>1876-01-01</startDate>
            <endDate>1934-06-27</endDate>
        </newspaper>
        <newspaper id="267">
            <title>The Western Champion (Barcaldine, Qld. : 1922 - 1937)</title>
            <state>Queensland</state>
            <issn>18396852</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/267</troveUrl>
            <startDate>1922-02-18</startDate>
            <endDate>1937-02-13</endDate>
        </newspaper>
        <newspaper id="265">
            <title>The Western Champion (Blackall/Barcaldine, Qld. : 1879 - 1891)</title>
            <state>Queensland</state>
            <issn>18397220</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/265</troveUrl>
            <startDate>1879-07-26</startDate>
            <endDate>1891-12-29</endDate>
        </newspaper>
        <newspaper id="266">
            <title>The Western Champion and General Advertiser for the Central-Western Districts (Barcaldine, Qld. : 1892 - 1922)</title>
            <state>Queensland</state>
            <issn>18396844</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/266</troveUrl>
            <startDate>1892-01-26</startDate>
            <endDate>1922-02-11</endDate>
        </newspaper>
        <newspaper id="1057">
            <title>Toowoomba Chronicle and Darling Downs General Advertiser (Qld. : 1875 - 1902)</title>
            <state>Queensland</state>
            <issn>22052038</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1057</troveUrl>
            <startDate>1875-11-23</startDate>
            <endDate>1902-06-28</endDate>
        </newspaper>
        <newspaper id="97">
            <title>Townsville Daily Bulletin (Qld. : 1907 - 1954)</title>
            <state>Queensland</state>
            <issn>08159726</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/97</troveUrl>
            <startDate>1907-07-01</startDate>
            <endDate>1955-01-31</endDate>
        </newspaper>
        <newspaper id="942">
            <title>Truth (Brisbane, Qld. : 1900 - 1954)</title>
            <state>Queensland</state>
            <issn>22046410</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/942</troveUrl>
            <startDate>1900-09-16</startDate>
            <endDate>1954-12-26</endDate>
        </newspaper>
        <newspaper id="261">
            <title>Warwick Argus (Qld. : 1879 - 1901)</title>
            <state>Queensland</state>
            <issn>18396836</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/261</troveUrl>
            <startDate>1879-08-26</startDate>
            <endDate>1901-12-31</endDate>
        </newspaper>
        <newspaper id="260">
            <title>Warwick Argus and Tenterfield Chronicle (Qld. : 1866 - 1879)</title>
            <state>Queensland</state>
            <issn>18396828</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/260</troveUrl>
            <startDate>1866-02-10</startDate>
            <endDate>1879-08-21</endDate>
        </newspaper>
        <newspaper id="892">
            <title>Warwick Daily News (Qld. : 1919 -1954)</title>
            <state>Queensland</state>
            <issn>22045066</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/892</troveUrl>
            <startDate>1919-02-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="259">
            <title>Warwick Examiner and Times (Qld. : 1867 - 1919)</title>
            <state>Queensland</state>
            <issn>1839681X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/259</troveUrl>
            <startDate>1867-03-08</startDate>
            <endDate>1919-01-29</endDate>
        </newspaper>
        <newspaper id="408">
            <title>Western Star (Roma) (Toowoomba, Qld. : 1948 - 1954)</title>
            <state>Queensland</state>
            <issn>18367844</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/408</troveUrl>
            <startDate>1948-11-05</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="374">
            <title>Western Star and Roma Advertiser (Toowoomba, Qld. : 1875 - 1948)</title>
            <state>Queensland</state>
            <issn>22007393</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/374</troveUrl>
            <startDate>1875-03-27</startDate>
            <endDate>1948-10-29</endDate>
        </newspaper>
        <newspaper id="191">
            <title>Worker (Brisbane, Qld. : 1890 - 1955)</title>
            <state>Queensland</state>
            <issn>00438065</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/191</troveUrl>
            <startDate>1890-03-01</startDate>
            <endDate>1955-12-26</endDate>
        </newspaper>
        <newspaper id="984">
            <title>Adelaide Chronicle and South Australian Advertiser (SA : 1839 - 1840)</title>
            <state>South Australia</state>
            <issn>22048006</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/984</troveUrl>
            <startDate>1839-12-10</startDate>
            <endDate>1840-05-20</endDate>
        </newspaper>
        <newspaper id="986">
            <title>Adelaide Chronicle and South Australian Literary Record (SA : 1840 - 1842)</title>
            <state>South Australia</state>
            <issn>22048022</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/986</troveUrl>
            <startDate>1840-05-27</startDate>
            <endDate>1842-05-18</endDate>
        </newspaper>
        <newspaper id="174">
            <title>Adelaide Morning Chronicle (SA : 1852 - 1853)</title>
            <state>South Australia</state>
            <issn>18388981</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/174</troveUrl>
            <startDate>1852-06-14</startDate>
            <endDate>1853-03-29</endDate>
        </newspaper>
        <newspaper id="821">
            <title>Adelaide Observer (SA : 1843 - 1904)</title>
            <state>South Australia</state>
            <issn>22037659</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/821</troveUrl>
            <startDate>1843-07-01</startDate>
            <endDate>1904-12-31</endDate>
        </newspaper>
        <newspaper id="1100">
            <title>Adelaide Times (SA : 1848 - 1858)</title>
            <state>South Australia</state>
            <issn>2205300X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1100</troveUrl>
            <startDate>1848-10-02</startDate>
            <endDate>1858-05-08</endDate>
        </newspaper>
        <newspaper id="277">
            <title>Adelaider Deutsche Zeitung (SA : 1851 - 1862)</title>
            <state>South Australia</state>
            <issn>1839812X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/277</troveUrl>
            <startDate>1851-04-02</startDate>
            <endDate>1862-12-26</endDate>
        </newspaper>
        <newspaper id="45">
            <title>Advertiser and Register (Adelaide, SA : 1931)</title>
            <state>South Australia</state>
            <issn>18367682</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/45</troveUrl>
            <startDate>1931-01-09</startDate>
            <endDate>1931-09-30</endDate>
        </newspaper>
        <newspaper id="1166">
            <title>Australian Christian Commonwealth (SA : 1901 - 1940)</title>
            <state>South Australia</state>
            <issn>22057552</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1166</troveUrl>
            <startDate>1901-01-04</startDate>
            <endDate>1940-06-28</endDate>
        </newspaper>
        <newspaper id="1150">
            <title>Australische Zeitung (Adelaide, SA : 1875 - 1916)</title>
            <state>South Australia</state>
            <issn>22053875</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1150</troveUrl>
            <startDate>1875-01-05</startDate>
            <endDate>1916-03-15</endDate>
        </newspaper>
        <newspaper id="1168">
            <title>Blyth Agriculturist (SA : 1908 - 1954)</title>
            <state>South Australia</state>
            <issn>22057366</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1168</troveUrl>
            <startDate>1908-11-06</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="1162">
            <title>Border Chronicle (Bordertown, SA : 1908 - 1950)</title>
            <state>South Australia</state>
            <issn>22057161</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1162</troveUrl>
            <startDate>1908-06-13</startDate>
            <endDate>1950-12-21</endDate>
        </newspaper>
        <newspaper id="276">
            <title>Border Watch (Mount Gambier, SA : 1861 - 1954)</title>
            <state>South Australia</state>
            <issn>13295195</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/276</troveUrl>
            <startDate>1861-04-26</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="371">
            <title>Bunyip (Gawler, SA : 1863 - 1954)</title>
            <state>South Australia</state>
            <issn>22007199</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/371</troveUrl>
            <startDate>1863-09-05</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="59">
            <title>Burra Record (SA : 1878 - 1954)</title>
            <state>South Australia</state>
            <issn>18373437</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/59</troveUrl>
            <startDate>1878-07-05</startDate>
            <endDate>1954-12-21</endDate>
        </newspaper>
        <newspaper id="1167">
            <title>Christian Colonist (SA : 1878 - 1894)</title>
            <state>South Australia</state>
            <issn>2205751X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1167</troveUrl>
            <startDate>1878-10-04</startDate>
            <endDate>1894-07-20</endDate>
        </newspaper>
        <newspaper id="291">
            <title>Chronicle (Adelaide, SA : 1895 - 1954)</title>
            <state>South Australia</state>
            <issn>22001131</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/291</troveUrl>
            <startDate>1895-10-05</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1161">
            <title>Critic (Adelaide, SA : 1897-1924)</title>
            <state>South Australia</state>
            <issn>22057137</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1161</troveUrl>
            <startDate>1897-09-25</startDate>
            <endDate>1924-05-28</endDate>
        </newspaper>
        <newspaper id="395">
            <title>Daily Herald (Adelaide, SA : 1910 - 1924)</title>
            <state>South Australia</state>
            <issn>22012516</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/395</troveUrl>
            <startDate>1910-03-07</startDate>
            <endDate>1924-06-16</endDate>
        </newspaper>
        <newspaper id="966">
            <title>Evening Journal (Adelaide, SA : 1869 - 1912)</title>
            <state>South Australia</state>
            <issn>22048103</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/966</troveUrl>
            <startDate>1869-01-02</startDate>
            <endDate>1912-09-10</endDate>
        </newspaper>
        <newspaper id="1143">
            <title>Eyre's Peninsula Tribune (Cowell, SA : 1910 - 1950)</title>
            <state>South Australia</state>
            <issn>13215280</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1143</troveUrl>
            <startDate>1911-03-10</startDate>
            <endDate>1950-12-21</endDate>
        </newspaper>
        <newspaper id="1146">
            <title>Frearson's Monthly Illustrated Adelaide News (SA : 1880 - 1884)</title>
            <state>South Australia</state>
            <issn>22053816</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1146</troveUrl>
            <startDate>1880-10-01</startDate>
            <endDate>1884-12-01</endDate>
        </newspaper>
        <newspaper id="898">
            <title>Gadfly (Adelaide, SA : 1906 - 1909)</title>
            <state>South Australia</state>
            <issn>22045252</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/898</troveUrl>
            <startDate>1906-02-14</startDate>
            <endDate>1909-02-24</endDate>
        </newspaper>
        <newspaper id="1169">
            <title>Glenelg Guardian (SA : 1914 - 1936)</title>
            <state>South Australia</state>
            <issn>22057455</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1169</troveUrl>
            <startDate>1914-10-08</startDate>
            <endDate>1936-09-02</endDate>
        </newspaper>
        <newspaper id="1149">
            <title>Harp and Southern Cross (Adelaide, SA : 1873 - 1875)</title>
            <state>South Australia</state>
            <issn>22053913</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1149</troveUrl>
            <startDate>1873-12-05</startDate>
            <endDate>1875-12-24</endDate>
        </newspaper>
        <newspaper id="396">
            <title>Herald (Adelaide, SA : 1899 - 1910)</title>
            <state>South Australia</state>
            <issn>22012621</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/396</troveUrl>
            <startDate>1899-01-07</startDate>
            <endDate>1910-03-05</endDate>
        </newspaper>
        <newspaper id="398">
            <title>Kapunda Herald (SA : 1878 - 1951)</title>
            <state>South Australia</state>
            <issn>22012567</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/398</troveUrl>
            <startDate>1878-03-12</startDate>
            <endDate>1951-05-03</endDate>
        </newspaper>
        <newspaper id="399">
            <title>Kapunda Herald and Northern Intelligencer (SA : 1864 - 1878)</title>
            <state>South Australia</state>
            <issn>22012540</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/399</troveUrl>
            <startDate>1864-10-29</startDate>
            <endDate>1878-03-08</endDate>
        </newspaper>
        <newspaper id="926">
            <title>Laura Standard and Crystal Brook Courier (SA : 1917 - 1948)</title>
            <state>South Australia</state>
            <issn>22047093</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/926</troveUrl>
            <startDate>1917-08-03</startDate>
            <endDate>1948-12-24</endDate>
        </newspaper>
        <newspaper id="822">
            <title>Leader (Angaston, SA : 1918 - 1954)</title>
            <state>South Australia</state>
            <issn>2203756X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/822</troveUrl>
            <startDate>1918-07-24</startDate>
            <endDate>1954-12-16</endDate>
        </newspaper>
        <newspaper id="400">
            <title>Murray Pioneer (Renmark, SA : 1942 - 1950)</title>
            <state>South Australia</state>
            <issn>22012494</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/400</troveUrl>
            <startDate>1942-11-05</startDate>
            <endDate>1950-12-28</endDate>
        </newspaper>
        <newspaper id="401">
            <title>Murray Pioneer and Australian River Record (Renmark, SA : 1913 - 1942)</title>
            <state>South Australia</state>
            <issn>22012486</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/401</troveUrl>
            <startDate>1913-07-11</startDate>
            <endDate>1942-10-29</endDate>
        </newspaper>
        <newspaper id="461">
            <title>News (Adelaide, SA : 1923 - 1954)</title>
            <state>South Australia</state>
            <issn>22014721</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/461</troveUrl>
            <startDate>1923-07-24</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="372">
            <title>Northern Argus (Clare, SA : 1869 - 1954)</title>
            <state>South Australia</state>
            <issn>13282999</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/372</troveUrl>
            <startDate>1869-02-19</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="823">
            <title>Observer (Adelaide, SA : 1905 - 1931)</title>
            <state>South Australia</state>
            <issn>22037640</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/823</troveUrl>
            <startDate>1905-01-07</startDate>
            <endDate>1931-02-19</endDate>
        </newspaper>
        <newspaper id="402">
            <title>Petersburg Times (SA : 1887 - 1919)</title>
            <state>South Australia</state>
            <issn>22012583</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/402</troveUrl>
            <startDate>1887-08-12</startDate>
            <endDate>1919-05-02</endDate>
        </newspaper>
        <newspaper id="896">
            <title>Pinnaroo and Border Times (SA : 1911 - 1954)</title>
            <state>South Australia</state>
            <issn>22045171</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/896</troveUrl>
            <startDate>1911-03-17</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="897">
            <title>Pinnaroo Country News (Lameroo, SA : 1908 - 1922)</title>
            <state>South Australia</state>
            <issn>22045449</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/897</troveUrl>
            <startDate>1908-06-05</startDate>
            <endDate>1922-03-31</endDate>
        </newspaper>
        <newspaper id="964">
            <title>Port Adelaide News (SA : 1878 - 1883)</title>
            <state>South Australia</state>
            <issn>22047956</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/964</troveUrl>
            <startDate>1878-10-19</startDate>
            <endDate>1883-12-07</endDate>
        </newspaper>
        <newspaper id="1163">
            <title>Port Adelaide News (SA : 1904)</title>
            <state>South Australia</state>
            <issn>22057609</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1163</troveUrl>
            <startDate>1904-01-09</startDate>
            <endDate>1904-10-01</endDate>
        </newspaper>
        <newspaper id="1164">
            <title>Port Adelaide News (SA :1913 - 1933)</title>
            <state>South Australia</state>
            <issn>22057668</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1164</troveUrl>
            <startDate>1913-08-15</startDate>
            <endDate>1933-08-31</endDate>
        </newspaper>
        <newspaper id="963">
            <title>Port Adelaide News and Commercial and Shipping Gazette (SA : 1878)</title>
            <state>South Australia</state>
            <issn>22047921</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/963</troveUrl>
            <startDate>1878-03-30</startDate>
            <endDate>1878-10-12</endDate>
        </newspaper>
        <newspaper id="965">
            <title>Port Adelaide News and Lefevre's Peninsula Advertiser (SA : 1883 - 1897)</title>
            <state>South Australia</state>
            <issn>22047980</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/965</troveUrl>
            <startDate>1883-12-11</startDate>
            <endDate>1897-01-15</endDate>
        </newspaper>
        <newspaper id="988">
            <title>Port Augusta Dispatch (SA : 1877 - 1880)</title>
            <state>South Australia</state>
            <issn>22048081</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/988</troveUrl>
            <startDate>1877-08-18</startDate>
            <endDate>1880-08-06</endDate>
        </newspaper>
        <newspaper id="991">
            <title>Port Augusta Dispatch (SA : 1884)</title>
            <state>South Australia</state>
            <issn>22048162</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/991</troveUrl>
            <startDate>1884-10-20</startDate>
            <endDate>1885-03-16</endDate>
        </newspaper>
        <newspaper id="990">
            <title>Port Augusta Dispatch and Flinders' Advertiser (SA : 1880 - 1884)</title>
            <state>South Australia</state>
            <issn>2204812X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/990</troveUrl>
            <startDate>1880-08-13</startDate>
            <endDate>1884-10-17</endDate>
        </newspaper>
        <newspaper id="370">
            <title>Port Lincoln Times (SA : 1927 - 1954)</title>
            <state>South Australia</state>
            <issn>13215272</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/370</troveUrl>
            <startDate>1927-08-05</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="349">
            <title>Port Pirie Recorder (SA : 1918 - 1919)</title>
            <state>South Australia</state>
            <issn>22004343</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/349</troveUrl>
            <startDate>1918-01-23</startDate>
            <endDate>1919-01-24</endDate>
        </newspaper>
        <newspaper id="348">
            <title>Port Pirie Recorder and North Western Mail (SA : 1898 - 1918)</title>
            <state>South Australia</state>
            <issn>22004327</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/348</troveUrl>
            <startDate>1898-07-09</startDate>
            <endDate>1918-01-22</endDate>
        </newspaper>
        <newspaper id="825">
            <title>Quiz (Adelaide, SA : 1889 - 1890)</title>
            <state>South Australia</state>
            <issn>22037721</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/825</troveUrl>
            <startDate>1889-08-31</startDate>
            <endDate>1890-06-06</endDate>
        </newspaper>
        <newspaper id="841">
            <title>Quiz (Adelaide, SA : 1900 - 1909)</title>
            <state>South Australia</state>
            <issn>22037608</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/841</troveUrl>
            <startDate>1900-05-17</startDate>
            <endDate>1909-12-24</endDate>
        </newspaper>
        <newspaper id="824">
            <title>Quiz and the Lantern (Adelaide, SA : 1890 - 1900)</title>
            <state>South Australia</state>
            <issn>22037586</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/824</troveUrl>
            <startDate>1890-06-13</startDate>
            <endDate>1900-05-10</endDate>
        </newspaper>
        <newspaper id="1165">
            <title>Quorn Mercury (SA : 1895 - 1954)</title>
            <state>South Australia</state>
            <issn>22057439</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1165</troveUrl>
            <startDate>1895-05-03</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="347">
            <title>Recorder (Port Pirie, SA : 1919 - 1954)</title>
            <state>South Australia</state>
            <issn>2200436X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/347</troveUrl>
            <startDate>1919-01-25</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="403">
            <title>Renmark Pioneer (SA : 1892 - 1913)</title>
            <state>South Australia</state>
            <issn>2201246X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/403</troveUrl>
            <startDate>1892-04-16</startDate>
            <endDate>1913-07-04</endDate>
        </newspaper>
        <newspaper id="968">
            <title>Saturday Journal (Adelaide, SA : 1923 - 1929)</title>
            <state>South Australia</state>
            <issn>22048189</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/968</troveUrl>
            <startDate>1923-07-28</startDate>
            <endDate>1929-04-06</endDate>
        </newspaper>
        <newspaper id="172">
            <title>South Australian (Adelaide, SA : 1844 - 1851)</title>
            <state>South Australia</state>
            <issn>1838899X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/172</troveUrl>
            <startDate>1844-11-05</startDate>
            <endDate>1851-08-19</endDate>
        </newspaper>
        <newspaper id="290">
            <title>South Australian Chronicle  (Adelaide, SA : 1889 - 1895)</title>
            <state>South Australia</state>
            <issn>22001093</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/290</troveUrl>
            <startDate>1889-03-16</startDate>
            <endDate>1895-09-28</endDate>
        </newspaper>
        <newspaper id="288">
            <title>South Australian Chronicle and Weekly Mail (Adelaide, SA : 1868 - 1881)</title>
            <state>South Australia</state>
            <issn>22001042</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/288</troveUrl>
            <startDate>1868-01-04</startDate>
            <endDate>1881-04-09</endDate>
        </newspaper>
        <newspaper id="40">
            <title>South Australian Gazette and Colonial Register (Adelaide, SA : 1836 - 1839)</title>
            <state>South Australia</state>
            <issn>18367666</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/40</troveUrl>
            <startDate>1836-06-18</startDate>
            <endDate>1839-06-15</endDate>
        </newspaper>
        <newspaper id="1004">
            <title>South Australian Gazette and Colonial Register (Adelaide, SA : 1845 - 1847)</title>
            <state>South Australia</state>
            <issn>22049126</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1004</troveUrl>
            <startDate>1845-07-05</startDate>
            <endDate>1847-10-02</endDate>
        </newspaper>
        <newspaper id="987">
            <title>South Australian Gazette and Mining Journal (Adelaide, SA : 1847 - 1852)</title>
            <state>South Australia</state>
            <issn>22048049</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/987</troveUrl>
            <startDate>1847-10-09</startDate>
            <endDate>1852-03-13</endDate>
        </newspaper>
        <newspaper id="41">
            <title>South Australian Register (Adelaide, SA : 1839 - 1900)</title>
            <state>South Australia</state>
            <issn>18367674</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/41</troveUrl>
            <startDate>1839-06-22</startDate>
            <endDate>1901-02-28</endDate>
        </newspaper>
        <newspaper id="287">
            <title>South Australian Weekly Chronicle (Adelaide, SA : 1858 - 1867)</title>
            <state>South Australia</state>
            <issn>22001026</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/287</troveUrl>
            <startDate>1858-07-17</startDate>
            <endDate>1867-12-28</endDate>
        </newspaper>
        <newspaper id="289">
            <title>South Australian Weekly Chronicle (Adelaide, SA : 1881 - 1889)</title>
            <state>South Australia</state>
            <issn>22001069</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/289</troveUrl>
            <startDate>1881-04-16</startDate>
            <endDate>1889-03-09</endDate>
        </newspaper>
        <newspaper id="373">
            <title>Southern Argus (Port Elliot, SA : 1866 - 1954)</title>
            <state>South Australia</state>
            <issn>18343902</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/373</troveUrl>
            <startDate>1866-03-17</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="171">
            <title>Southern Australian (Adelaide, SA : 1838 - 1844)</title>
            <state>South Australia</state>
            <issn>18389007</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/171</troveUrl>
            <startDate>1838-06-02</startDate>
            <endDate>1844-11-01</endDate>
        </newspaper>
        <newspaper id="826">
            <title>Southern Cross (Adelaide, SA : 1889 - 1954)</title>
            <state>South Australia</state>
            <issn>22037624</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/826</troveUrl>
            <startDate>1889-07-05</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1170">
            <title>Sport (Adelaide, SA : 1911 - 1948)</title>
            <state>South Australia</state>
            <issn>22057285</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1170</troveUrl>
            <startDate>1911-04-01</startDate>
            <endDate>1948-10-30</endDate>
        </newspaper>
        <newspaper id="278">
            <title>S�d Australische Zeitung (Tanunda and Adelaide, SA : 1860 - 1874)</title>
            <state>South Australia</state>
            <issn>18398197</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/278</troveUrl>
            <startDate>1860-12-15</startDate>
            <endDate>1874-12-29</endDate>
        </newspaper>
        <newspaper id="314">
            <title>Suedaustralische Zeitung (Adelaide, SA : 1850 - 1851)</title>
            <state>South Australia</state>
            <issn>22002545</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/314</troveUrl>
            <startDate>1850-05-02</startDate>
            <endDate>1851-04-14</endDate>
        </newspaper>
        <newspaper id="1092">
            <title>The Adelaide Express (SA : 1863 - 1866)</title>
            <state>South Australia</state>
            <issn>22053093</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1092</troveUrl>
            <startDate>1863-12-02</startDate>
            <endDate>1866-12-29</endDate>
        </newspaper>
        <newspaper id="34">
            <title>The Advertiser (Adelaide, SA : 1889 - 1931)</title>
            <state>South Australia</state>
            <issn>18356753</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/34</troveUrl>
            <startDate>1889-04-01</startDate>
            <endDate>1931-02-20</endDate>
        </newspaper>
        <newspaper id="44">
            <title>The Advertiser (Adelaide, SA : 1931 - 1954)</title>
            <state>South Australia</state>
            <issn>10394192</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/44</troveUrl>
            <startDate>1931-10-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1144">
            <title>The Areas' Express (Booyoolee, SA : 1877 - 1948)</title>
            <state>South Australia</state>
            <issn>22053778</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1144</troveUrl>
            <startDate>1877-05-26</startDate>
            <endDate>1948-12-24</endDate>
        </newspaper>
        <newspaper id="1097">
            <title>The Central Advocate (Balaklava, SA : 1903 - 1909)</title>
            <state>South Australia</state>
            <issn>22052941</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1097</troveUrl>
            <startDate>1903-09-25</startDate>
            <endDate>1909-09-10</endDate>
        </newspaper>
        <newspaper id="1094">
            <title>The Express (Adelaide, SA : 1922 - 1923)</title>
            <state>South Australia</state>
            <issn>22053131</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1094</troveUrl>
            <startDate>1922-11-06</startDate>
            <endDate>1923-07-23</endDate>
        </newspaper>
        <newspaper id="1093">
            <title>The Express and Telegraph (Adelaide, SA : 1867 - 1922)</title>
            <state>South Australia</state>
            <issn>22053115</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1093</troveUrl>
            <startDate>1867-01-02</startDate>
            <endDate>1922-11-03</endDate>
        </newspaper>
        <newspaper id="1145">
            <title>The Illustrated Adelaide News (SA : 1875 - 1880)</title>
            <state>South Australia</state>
            <issn>22053794</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1145</troveUrl>
            <startDate>1875-01-01</startDate>
            <endDate>1880-09-01</endDate>
        </newspaper>
        <newspaper id="1148">
            <title>The Irish Harp and Farmers' Herald (Adelaide, SA : 1869 - 1873)</title>
            <state>South Australia</state>
            <issn>22053891</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1148</troveUrl>
            <startDate>1869-05-29</startDate>
            <endDate>1873-11-28</endDate>
        </newspaper>
        <newspaper id="967">
            <title>The Journal (Adelaide, SA : 1912 - 1923)</title>
            <state>South Australia</state>
            <issn>22048146</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/967</troveUrl>
            <startDate>1912-09-11</startDate>
            <endDate>1923-07-23</endDate>
        </newspaper>
        <newspaper id="397">
            <title>The Kadina and Wallaroo Times (SA : 1888 - 1954)</title>
            <state>South Australia</state>
            <issn>22012443</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/397</troveUrl>
            <startDate>1888-08-01</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="924">
            <title>The Kangaroo Island Courier (Kingscote, SA : 1907 - 1951)</title>
            <state>South Australia</state>
            <issn>22047050</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/924</troveUrl>
            <startDate>1907-11-02</startDate>
            <endDate>1951-05-25</endDate>
        </newspaper>
        <newspaper id="925">
            <title>The Laura Standard (SA : 1889 - 1917)</title>
            <state>South Australia</state>
            <issn>22047077</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/925</troveUrl>
            <startDate>1889-04-11</startDate>
            <endDate>1917-07-27</endDate>
        </newspaper>
        <newspaper id="75">
            <title>The Mail (Adelaide, SA : 1912 - 1954)</title>
            <state>South Australia</state>
            <issn>18373674</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/75</troveUrl>
            <startDate>1912-05-04</startDate>
            <endDate>1954-12-18</endDate>
        </newspaper>
        <newspaper id="970">
            <title>The Millicent Times (SA : 1891 - 1905)</title>
            <state>South Australia</state>
            <issn>2204826X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/970</troveUrl>
            <startDate>1891-07-11</startDate>
            <endDate>1905-12-23</endDate>
        </newspaper>
        <newspaper id="714">
            <title>The Mount Barker Courier and Onkaparinga and Gumeracha Advertiser (SA : 1880 - 1954)</title>
            <state>South Australia</state>
            <issn>22029133</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/714</troveUrl>
            <startDate>1880-10-01</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="715">
            <title>The Narracoorte Herald (SA : 1875 - 1954)</title>
            <state>South Australia</state>
            <issn>22029036</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/715</troveUrl>
            <startDate>1875-12-14</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="1095">
            <title>The Pennant (Penola, SA : 1946 - 1954)</title>
            <state>South Australia</state>
            <issn>22053042</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1095</troveUrl>
            <startDate>1946-07-25</startDate>
            <endDate>1955-12-21</endDate>
        </newspaper>
        <newspaper id="1147">
            <title>The Pictorial Australian (Adelaide, SA : 1885 - 1895)</title>
            <state>South Australia</state>
            <issn>22053832</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1147</troveUrl>
            <startDate>1885-01-01</startDate>
            <endDate>1895-10-01</endDate>
        </newspaper>
        <newspaper id="969">
            <title>The Pioneer (Yorketown, SA : 1898 - 1954)</title>
            <state>South Australia</state>
            <issn>22048200</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/969</troveUrl>
            <startDate>1898-01-21</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="718">
            <title>The Port Adelaide Gazette (SA : 1930)</title>
            <state>South Australia</state>
            <issn>22030433</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/718</troveUrl>
            <startDate>1930-01-10</startDate>
            <endDate>1930-05-02</endDate>
        </newspaper>
        <newspaper id="719">
            <title>The Port Adelaide Post Shipping Gazette, Farmers and Commercial Register (Port Adelaide, SA : 1876)</title>
            <state>South Australia</state>
            <issn>22030417</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/719</troveUrl>
            <startDate>1876-07-22</startDate>
            <endDate>1876-07-22</endDate>
        </newspaper>
        <newspaper id="993">
            <title>The Port Augusta Dispatch, Newcastle and Flinders Chronicle (SA : 1885 - 1916)</title>
            <state>South Australia</state>
            <issn>22048235</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/993</troveUrl>
            <startDate>1885-03-18</startDate>
            <endDate>1916-04-21</endDate>
        </newspaper>
        <newspaper id="994">
            <title>The Port Pirie Standard and Barrier Advertiser (SA : 1889 - 1898)</title>
            <state>South Australia</state>
            <issn>22048286</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/994</troveUrl>
            <startDate>1889-01-04</startDate>
            <endDate>1898-07-05</endDate>
        </newspaper>
        <newspaper id="1099">
            <title>The Producer (Balaklava, SA : 1940 - 1950)</title>
            <state>South Australia</state>
            <issn>22052984</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1099</troveUrl>
            <startDate>1940-07-04</startDate>
            <endDate>1950-12-07</endDate>
        </newspaper>
        <newspaper id="89">
            <title>The Register (Adelaide, SA : 1901 - 1929)</title>
            <state>South Australia</state>
            <issn>18373860</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/89</troveUrl>
            <startDate>1901-03-01</startDate>
            <endDate>1928-12-31</endDate>
        </newspaper>
        <newspaper id="90">
            <title>The Register News-Pictorial (Adelaide, SA : 1929 - 1931)</title>
            <state>South Australia</state>
            <issn>18373887</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/90</troveUrl>
            <startDate>1929-01-01</startDate>
            <endDate>1931-02-20</endDate>
        </newspaper>
        <newspaper id="7">
            <title>The South Australian Advertiser (Adelaide, SA : 1858 - 1889)</title>
            <state>South Australia</state>
            <issn>1834092X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/7</troveUrl>
            <startDate>1858-07-12</startDate>
            <endDate>1889-03-30</endDate>
        </newspaper>
        <newspaper id="971">
            <title>The South Eastern Times (Millicent, SA : 1906 - 1954)</title>
            <state>South Australia</state>
            <issn>22048294</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/971</troveUrl>
            <startDate>1906-01-06</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="1096">
            <title>The Terowie Enterprise (SA : 1884 - 1891)</title>
            <state>South Australia</state>
            <issn>22053026</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1096</troveUrl>
            <startDate>1884-08-08</startDate>
            <endDate>1891-12-18</endDate>
        </newspaper>
        <newspaper id="404">
            <title>The Times and Northern Advertiser, Peterborough, South Australia (SA : 1919 - 1950)</title>
            <state>South Australia</state>
            <issn>22012605</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/404</troveUrl>
            <startDate>1919-05-09</startDate>
            <endDate>1950-12-22</endDate>
        </newspaper>
        <newspaper id="830">
            <title>The Victor Harbor Times and Encounter Bay and Lower Murray Pilot (SA : 1912 - 1930)</title>
            <state>South Australia</state>
            <issn>22038175</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/830</troveUrl>
            <startDate>1912-08-23</startDate>
            <endDate>1930-05-09</endDate>
        </newspaper>
        <newspaper id="406">
            <title>The Wallaroo Times and Mining Journal (Port Wallaroo, SA : 1865 - 1881)</title>
            <state>South Australia</state>
            <issn>22012400</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/406</troveUrl>
            <startDate>1865-02-01</startDate>
            <endDate>1881-12-31</endDate>
        </newspaper>
        <newspaper id="1098">
            <title>The Wooroora Producer (Balaklava, SA : 1909 - 1940)</title>
            <state>South Australia</state>
            <issn>22052968</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1098</troveUrl>
            <startDate>1909-09-17</startDate>
            <endDate>1940-06-27</endDate>
        </newspaper>
        <newspaper id="856">
            <title>Times (Victor Harbor, SA : 1987 - 1999)</title>
            <state>South Australia</state>
            <issn>22040722</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/856</troveUrl>
            <startDate>1987-01-07</startDate>
            <endDate>1999-12-31</endDate>
        </newspaper>
        <newspaper id="831">
            <title>Times Victor Harbour and Encounter Bay and Lower Murray Pilot (SA : 1930 - 1932)</title>
            <state>South Australia</state>
            <issn>22038191</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/831</troveUrl>
            <startDate>1930-05-16</startDate>
            <endDate>1932-04-08</endDate>
        </newspaper>
        <newspaper id="827">
            <title>Transcontinental (Port Augusta, SA : 1914 - 1954)</title>
            <state>South Australia</state>
            <issn>22037667</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/827</troveUrl>
            <startDate>1914-11-07</startDate>
            <endDate>1951-06-08</endDate>
        </newspaper>
        <newspaper id="832">
            <title>Victor Harbour Times (SA : 1932 - 1986)</title>
            <state>South Australia</state>
            <issn>22038213</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/832</troveUrl>
            <startDate>1932-04-15</startDate>
            <endDate>1986-12-31</endDate>
        </newspaper>
        <newspaper id="405">
            <title>Wallaroo Times (Port Wallaroo, SA : 1882 - 1888)</title>
            <state>South Australia</state>
            <issn>22012427</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/405</troveUrl>
            <startDate>1882-01-04</startDate>
            <endDate>1888-07-28</endDate>
        </newspaper>
        <newspaper id="407">
            <title>Weekly Herald (Adelaide, SA : 1894 - 1898)</title>
            <state>South Australia</state>
            <issn>22012648</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/407</troveUrl>
            <startDate>1894-10-12</startDate>
            <endDate>1898-12-31</endDate>
        </newspaper>
        <newspaper id="828">
            <title>West Coast Sentinel (Streaky Bay, SA : 1912 - 1954)</title>
            <state>South Australia</state>
            <issn>22037683</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/828</troveUrl>
            <startDate>1912-06-28</startDate>
            <endDate>1950-12-20</endDate>
        </newspaper>
        <newspaper id="972">
            <title>Whyalla News (SA : 1940 - 1954)</title>
            <state>South Australia</state>
            <issn>22047964</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/972</troveUrl>
            <startDate>1940-04-05</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="1173">
            <title>Yorke's Peninsula Advertiser (SA : 1878 - 1922)</title>
            <state>South Australia</state>
            <issn>22057730</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1173</troveUrl>
            <startDate>1878-07-12</startDate>
            <endDate>1922-07-28</endDate>
        </newspaper>
        <newspaper id="1172">
            <title>Yorke's Peninsula Advertiser and Miners' and Farmers' Journal (SA : 1875 - 1878)</title>
            <state>South Australia</state>
            <issn>22057714</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1172</troveUrl>
            <startDate>1875-01-01</startDate>
            <endDate>1878-07-09</endDate>
        </newspaper>
        <newspaper id="1171">
            <title>Yorke's Peninsula Advertiser and Miners' News (SA : 1872 - 1874)</title>
            <state>South Australia</state>
            <issn>22057692</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1171</troveUrl>
            <startDate>1872-10-04</startDate>
            <endDate>1874-12-29</endDate>
        </newspaper>
        <newspaper id="46">
            <title>Advocate (Burnie, Tas. : 1890 - 1954)</title>
            <state>Tasmania</state>
            <issn>13210823</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/46</troveUrl>
            <startDate>1919-01-03</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1248">
            <title>Bell's Life in Tasmania (Hobart Town, Tas. : 1859)</title>
            <state>Tasmania</state>
            <issn>2206771X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1248</troveUrl>
            <startDate>1859-07-12</startDate>
            <endDate>1859-12-28</endDate>
        </newspaper>
        <newspaper id="1282">
            <title>Bent's Monthly Advertiser (Hobart, Tas. : 1828)</title>
            <state>Tasmania</state>
            <issn>22071229</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1282</troveUrl>
            <startDate>1828-03-01</startDate>
            <endDate>1828-04-01</endDate>
        </newspaper>
        <newspaper id="1241">
            <title>Bent's News and Tasmanian Register (Hobart Town, Tas. : 1837 - 1838)</title>
            <state>Tasmania</state>
            <issn>22067752</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1241</troveUrl>
            <startDate>1837-10-14</startDate>
            <endDate>1838-12-28</endDate>
        </newspaper>
        <newspaper id="1238">
            <title>Bent's News and Tasmanian Three-Penny Register (Hobart Town, Tas. : 1836 - 1837)</title>
            <state>Tasmania</state>
            <issn>22067736</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1238</troveUrl>
            <startDate>1836-01-09</startDate>
            <endDate>1837-10-07</endDate>
        </newspaper>
        <newspaper id="857">
            <title>Circular Head Chronicle (Stanley, Tas. : 1906 - 1954)</title>
            <state>Tasmania</state>
            <issn>22036997</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/857</troveUrl>
            <startDate>1906-07-18</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="1235">
            <title>Colonial Advocate, and Tasmanian Monthly Review and Register (Hobart Town, Tas. : 1828)</title>
            <state>Tasmania</state>
            <issn>22068023</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1235</troveUrl>
            <startDate>1828-03-01</startDate>
            <endDate>1828-10-01</endDate>
        </newspaper>
        <newspaper id="24">
            <title>Colonial Times (Hobart, Tas. : 1828 - 1857)</title>
            <state>Tasmania</state>
            <issn>18354734</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/24</troveUrl>
            <startDate>1828-01-04</startDate>
            <endDate>1857-08-22</endDate>
        </newspaper>
        <newspaper id="23">
            <title>Colonial Times and Tasmanian Advertiser (Hobart, Tas. : 1825 - 1827)</title>
            <state>Tasmania</state>
            <issn>18354718</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/23</troveUrl>
            <startDate>1825-08-19</startDate>
            <endDate>1827-10-12</endDate>
        </newspaper>
        <newspaper id="1264">
            <title>Cornwall Advertiser (Launceston, Tas. : 1870 - 1877)</title>
            <state>Tasmania</state>
            <issn>22068082</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1264</troveUrl>
            <startDate>1870-10-04</startDate>
            <endDate>1877-10-12</endDate>
        </newspaper>
        <newspaper id="858">
            <title>Critic (Hobart, Tas. : 1892 - 1893)</title>
            <state>Tasmania</state>
            <issn>22040587</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/858</troveUrl>
            <startDate>1892-10-15</startDate>
            <endDate>1893-04-01</endDate>
        </newspaper>
        <newspaper id="859">
            <title>Critic (Hobart, Tas. : 1907 - 1924)</title>
            <state>Tasmania</state>
            <issn>22037055</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/859</troveUrl>
            <startDate>1907-01-05</startDate>
            <endDate>1924-09-19</endDate>
        </newspaper>
        <newspaper id="860">
            <title>Daily Post (Hobart, Tas. : 1908 - 1918)</title>
            <state>Tasmania</state>
            <issn>22037012</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/860</troveUrl>
            <startDate>1908-05-27</startDate>
            <endDate>1918-06-29</endDate>
        </newspaper>
        <newspaper id="742">
            <title>Daily Telegraph (Launceston, Tas. : 1883 - 1928)</title>
            <state>Tasmania</state>
            <issn>22029117</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/742</troveUrl>
            <startDate>1883-06-18</startDate>
            <endDate>1928-03-28</endDate>
        </newspaper>
        <newspaper id="1076">
            <title>Deloraine - Westbury Advocate (Ulverstone, Tas. : 1893 - 1894)</title>
            <state>Tasmania</state>
            <issn>22052690</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1076</troveUrl>
            <startDate>1893-10-07</startDate>
            <endDate>1894-07-07</endDate>
        </newspaper>
        <newspaper id="159">
            <title>Deloraine and Westbury Advertiser (Tas. : 1910 - 1912)</title>
            <state>Tasmania</state>
            <issn>18383750</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/159</troveUrl>
            <startDate>1910-11-05</startDate>
            <endDate>1912-10-26</endDate>
        </newspaper>
        <newspaper id="862">
            <title>Devon Herald (Latrobe, Tas. : 1877 - 1889)</title>
            <state>Tasmania</state>
            <issn>22037071</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/862</troveUrl>
            <startDate>1877-12-08</startDate>
            <endDate>1889-03-29</endDate>
        </newspaper>
        <newspaper id="116">
            <title>Emu Bay Times and North West and West Coast Advocate (Tas. : 1897 - 1899)</title>
            <state>Tasmania</state>
            <issn>18379699</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/116</troveUrl>
            <startDate>1897-11-02</startDate>
            <endDate>1899-11-11</endDate>
        </newspaper>
        <newspaper id="68">
            <title>Examiner (Launceston, Tas. : 1900 - 1954)</title>
            <state>Tasmania</state>
            <issn>13210971</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/68</troveUrl>
            <startDate>1900-01-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1260">
            <title>Fun or The Tasmanian Charivari (Hobart Town, Tas. : 1867)</title>
            <state>Tasmania</state>
            <issn>22069100</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1260</troveUrl>
            <startDate>1867-04-13</startDate>
            <endDate>1867-09-28</endDate>
        </newspaper>
        <newspaper id="863">
            <title>Guardian, or, True Friend of Tasmania (Hobart, Tas. : 1847)</title>
            <state>Tasmania</state>
            <issn>22037128</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/863</troveUrl>
            <startDate>1847-05-22</startDate>
            <endDate>1847-08-07</endDate>
        </newspaper>
        <newspaper id="22">
            <title>Hobart Town Gazette (Tas. : 1825 - 1827; 1830)</title>
            <state>Tasmania</state>
            <issn>18354777</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/22</troveUrl>
            <startDate>1825-06-25</startDate>
            <endDate>1830-12-11</endDate>
        </newspaper>
        <newspaper id="5">
            <title>Hobart Town Gazette and Van Diemen's Land Advertiser (Tas. : 1821 - 1825)</title>
            <state>Tasmania</state>
            <issn>18340954</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/5</troveUrl>
            <startDate>1821-01-20</startDate>
            <endDate>1825-08-12</endDate>
        </newspaper>
        <newspaper id="1259">
            <title>Hobart Town Punch (Hobart Town, Tas. : 1867 - 1868)</title>
            <state>Tasmania</state>
            <issn>22069062</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1259</troveUrl>
            <startDate>1867-01-12</startDate>
            <endDate>1868-02-15</endDate>
        </newspaper>
        <newspaper id="1262">
            <title>Hobart Town Punch (Hobart Town, Tas. : 1878)</title>
            <state>Tasmania</state>
            <issn>22069305</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1262</troveUrl>
            <startDate>1878-06-01</startDate>
            <endDate>1878-07-13</endDate>
        </newspaper>
        <newspaper id="864">
            <title>Hobarton Guardian, or, True Friend of Tasmania (Hobart, Tas. : 1847 - 1854)</title>
            <state>Tasmania</state>
            <issn>22037144</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/864</troveUrl>
            <startDate>1847-08-11</startDate>
            <endDate>1854-07-01</endDate>
        </newspaper>
        <newspaper id="668">
            <title>Huon and Derwent Times (Tas. : 1933 - 1942)</title>
            <state>Tasmania</state>
            <issn>22024093</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/668</troveUrl>
            <startDate>1933-12-14</startDate>
            <endDate>1942-03-26</endDate>
        </newspaper>
        <newspaper id="667">
            <title>Huon Times (Franklin, Tas. : 1910 - 1933)</title>
            <state>Tasmania</state>
            <issn>22024077</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/667</troveUrl>
            <startDate>1910-02-19</startDate>
            <endDate>1933-12-07</endDate>
        </newspaper>
        <newspaper id="1078">
            <title>King Island News (Currie, King Island : 1912 - 1954)</title>
            <state>Tasmania</state>
            <issn>22052569</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1078</troveUrl>
            <startDate>1912-08-09</startDate>
            <endDate>1955-12-21</endDate>
        </newspaper>
        <newspaper id="868">
            <title>Land (Hobart, Tas. : 1924 - 1925)</title>
            <state>Tasmania</state>
            <issn>22041389</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/868</troveUrl>
            <startDate>1924-09-26</startDate>
            <endDate>1925-01-02</endDate>
        </newspaper>
        <newspaper id="272">
            <title>Launceston Advertiser (Tas. : 1829 - 1846)</title>
            <state>Tasmania</state>
            <issn>18397166</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/272</troveUrl>
            <startDate>1829-02-09</startDate>
            <endDate>1846-12-31</endDate>
        </newspaper>
        <newspaper id="339">
            <title>Launceston Courier (Tas. : 1840 - 1843)</title>
            <state>Tasmania</state>
            <issn>14401436</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/339</troveUrl>
            <startDate>1840-10-12</startDate>
            <endDate>1843-03-27</endDate>
        </newspaper>
        <newspaper id="74">
            <title>Launceston Examiner (Tas. : 1842 - 1899)</title>
            <state>Tasmania</state>
            <issn>18368204</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/74</troveUrl>
            <startDate>1842-03-12</startDate>
            <endDate>1899-12-30</endDate>
        </newspaper>
        <newspaper id="1242">
            <title>Morning Star and Commercial Advertiser (Hobart Town, Tas. : 1834 - 1835)</title>
            <state>Tasmania</state>
            <issn>22067671</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1242</troveUrl>
            <startDate>1834-11-28</startDate>
            <endDate>1835-10-23</endDate>
        </newspaper>
        <newspaper id="743">
            <title>North-Eastern Advertiser (Scottsdale, Tas. : 1909 - 1954)</title>
            <state>Tasmania</state>
            <issn>22029095</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/743</troveUrl>
            <startDate>1909-12-17</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="273">
            <title>Tasmanian and Port Dalrymple Advertiser (Launceston, Tas. : 1825)</title>
            <state>Tasmania</state>
            <issn>18397174</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/273</troveUrl>
            <startDate>1825-01-05</startDate>
            <endDate>1825-05-18</endDate>
        </newspaper>
        <newspaper id="1265">
            <title>Tasmanian Evening Herald (Launceston, Tas. : 1878)</title>
            <state>Tasmania</state>
            <issn>22068104</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1265</troveUrl>
            <startDate>1878-01-01</startDate>
            <endDate>1878-11-30</endDate>
        </newspaper>
        <newspaper id="865">
            <title>Tasmanian Morning Herald (Hobart, Tas. : 1865 - 1866)</title>
            <state>Tasmania</state>
            <issn>22037160</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/865</troveUrl>
            <startDate>1865-11-03</startDate>
            <endDate>1866-12-31</endDate>
        </newspaper>
        <newspaper id="866">
            <title>Tasmanian News (Hobart, Tas. : 1883 - 1911)</title>
            <state>Tasmania</state>
            <issn>22037098</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/866</troveUrl>
            <startDate>1883-11-17</startDate>
            <endDate>1911-11-17</endDate>
        </newspaper>
        <newspaper id="1258">
            <title>Tasmanian Punch (Hobart Town, Tas. : 1866)</title>
            <state>Tasmania</state>
            <issn>22069038</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1258</troveUrl>
            <startDate>1866-07-21</startDate>
            <endDate>1866-12-29</endDate>
        </newspaper>
        <newspaper id="1261">
            <title>Tasmanian Punch (Hobart Town, Tas. : 1869 - 1870; 1877-1878)</title>
            <state>Tasmania</state>
            <issn>22069283</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1261</troveUrl>
            <startDate>1869-12-04</startDate>
            <endDate>1879-03-29</endDate>
        </newspaper>
        <newspaper id="1231">
            <title>Tasmanian Weekly Dispatch (Hobart Town, Tas. : 1839 - 1841)</title>
            <state>Tasmania</state>
            <issn>22068767</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1231</troveUrl>
            <startDate>1839-10-04</startDate>
            <endDate>1841-06-25</endDate>
        </newspaper>
        <newspaper id="1246">
            <title>Tasmanian Weekly News (Hobart Town, Tas. : 1858)</title>
            <state>Tasmania</state>
            <issn>22068945</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1246</troveUrl>
            <startDate>1858-02-06</startDate>
            <endDate>1858-05-29</endDate>
        </newspaper>
        <newspaper id="1250">
            <title>Telegraph (Hobart Town, Tas. : 1867)</title>
            <state>Tasmania</state>
            <issn>22069410</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1250</troveUrl>
            <startDate>1867-01-11</startDate>
            <endDate>1867-01-16</endDate>
        </newspaper>
        <newspaper id="1072">
            <title>Telegraph (Launceston, Tas. : 1881 - 1883)</title>
            <state>Tasmania</state>
            <issn>22052658</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1072</troveUrl>
            <startDate>1881-07-02</startDate>
            <endDate>1883-06-15</endDate>
        </newspaper>
        <newspaper id="1233">
            <title>The Austral-Asiatic Review (Hobart Town, Tas. : 1833)</title>
            <state>Tasmania</state>
            <issn>2206883X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1233</troveUrl>
            <startDate>1833-02-26</startDate>
            <endDate>1833-12-31</endDate>
        </newspaper>
        <newspaper id="1232">
            <title>The Austral-Asiatic Review, Tasmanian and Australian Advertiser (Hobart Town, Tas. : 1837 - 1844)</title>
            <state>Tasmania</state>
            <issn>22068813</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1232</troveUrl>
            <startDate>1837-10-10</startDate>
            <endDate>1844-10-10</endDate>
        </newspaper>
        <newspaper id="1252">
            <title>The Banner (Strahan, Tas. : 1900 - 1901)</title>
            <state>Tasmania</state>
            <issn>22067604</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1252</troveUrl>
            <startDate>1901-01-02</startDate>
            <endDate>1901-03-02</endDate>
        </newspaper>
        <newspaper id="941">
            <title>The Britannia and Trades' Advocate (Hobart Town, Tas. : 1846 - 1851)</title>
            <state>Tasmania</state>
            <issn>22045570</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/941</troveUrl>
            <startDate>1846-01-01</startDate>
            <endDate>1851-07-03</endDate>
        </newspaper>
        <newspaper id="271">
            <title>The Clipper (Hobart, Tas. : 1893 - 1909)</title>
            <state>Tasmania</state>
            <issn>1839714X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/271</troveUrl>
            <startDate>1893-04-08</startDate>
            <endDate>1909-12-25</endDate>
        </newspaper>
        <newspaper id="1077">
            <title>The Coastal News and North Western Advertiser (Ulverstone, Tas. : 1890 - 1893)</title>
            <state>Tasmania</state>
            <issn>22052593</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1077</troveUrl>
            <startDate>1890-09-20</startDate>
            <endDate>1893-12-29</endDate>
        </newspaper>
        <newspaper id="1243">
            <title>The Colonial Record (Launceston Tas. : 1839)</title>
            <state>Tasmania</state>
            <issn>22067795</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1243</troveUrl>
            <startDate>1839-03-11</startDate>
            <endDate>1839-06-24</endDate>
        </newspaper>
        <newspaper id="952">
            <title>The Colonist (Launceston, Tas. : 1888 - 1891)</title>
            <state>Tasmania</state>
            <issn>22046216</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/952</troveUrl>
            <startDate>1888-01-21</startDate>
            <endDate>1891-03-28</endDate>
        </newspaper>
        <newspaper id="944">
            <title>The Colonist and Van Diemen's Land Commercial and Agricultural Advertiser (Hobart Town, Tas. : 1832 - 1834)</title>
            <state>Tasmania</state>
            <issn>22045678</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/944</troveUrl>
            <startDate>1832-07-06</startDate>
            <endDate>1834-07-22</endDate>
        </newspaper>
        <newspaper id="170">
            <title>The Cornwall Chronicle (Launceston, Tas. : 1835 - 1880)</title>
            <state>Tasmania</state>
            <issn>18389015</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/170</troveUrl>
            <startDate>1835-02-14</startDate>
            <endDate>1880-08-30</endDate>
        </newspaper>
        <newspaper id="1236">
            <title>The Cornwall Press and Commercial Advertiser (Launceston, Tas. : 1829)</title>
            <state>Tasmania</state>
            <issn>2206804X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1236</troveUrl>
            <startDate>1829-02-17</startDate>
            <endDate>1829-06-23</endDate>
        </newspaper>
        <newspaper id="21">
            <title>The Courier (Hobart, Tas. : 1840 - 1859)</title>
            <state>Tasmania</state>
            <issn>18354769</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/21</troveUrl>
            <startDate>1840-10-06</startDate>
            <endDate>1859-05-31</endDate>
        </newspaper>
        <newspaper id="1046">
            <title>The Derwent Star and Van Diemen's Land Intelligencer (Hobart, Tas. : 1810 - 1812)</title>
            <state>Tasmania</state>
            <issn>22052054</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1046</troveUrl>
            <startDate>1810-04-03</startDate>
            <endDate>1812-02-07</endDate>
        </newspaper>
        <newspaper id="1268">
            <title>The Federalist (Launceston, Tas. : 1898 - 1899)</title>
            <state>Tasmania</state>
            <issn>22068120</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1268</troveUrl>
            <startDate>1898-07-09</startDate>
            <endDate>1899-07-08</endDate>
        </newspaper>
        <newspaper id="1239">
            <title>The Hobart Town Chronicle (Tas. : 1833)</title>
            <state>Tasmania</state>
            <issn>22067639</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1239</troveUrl>
            <startDate>1833-02-26</startDate>
            <endDate>1833-07-02</endDate>
        </newspaper>
        <newspaper id="19">
            <title>The Hobart Town Courier (Tas. : 1827 - 1839)</title>
            <state>Tasmania</state>
            <issn>18354742</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/19</troveUrl>
            <startDate>1827-10-20</startDate>
            <endDate>1839-06-28</endDate>
        </newspaper>
        <newspaper id="20">
            <title>The Hobart Town Courier and Van Diemen's Land Gazette (Tas. : 1839 - 1840)</title>
            <state>Tasmania</state>
            <issn>18354750</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/20</troveUrl>
            <startDate>1839-07-05</startDate>
            <endDate>1840-10-02</endDate>
        </newspaper>
        <newspaper id="33">
            <title>The Hobart Town Daily Mercury (Tas. : 1858 - 1860)</title>
            <state>Tasmania</state>
            <issn>18356729</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/33</troveUrl>
            <startDate>1858-01-01</startDate>
            <endDate>1860-06-30</endDate>
        </newspaper>
        <newspaper id="4">
            <title>The Hobart Town Gazette and Southern Reporter (Tas. : 1816 - 1821)</title>
            <state>Tasmania</state>
            <issn>18340946</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/4</troveUrl>
            <startDate>1816-05-11</startDate>
            <endDate>1821-01-13</endDate>
        </newspaper>
        <newspaper id="32">
            <title>The Hobart Town Mercury (Tas. : 1857)</title>
            <state>Tasmania</state>
            <issn>18356737</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/32</troveUrl>
            <startDate>1857-02-02</startDate>
            <endDate>1857-12-28</endDate>
        </newspaper>
        <newspaper id="31">
            <title>The Hobarton Mercury (Tas. : 1854 - 1857)</title>
            <state>Tasmania</state>
            <issn>18356710</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/31</troveUrl>
            <startDate>1854-07-05</startDate>
            <endDate>1857-01-30</endDate>
        </newspaper>
        <newspaper id="1237">
            <title>The Independent (Launceston, Tas. : 1831 - 1835)</title>
            <state>Tasmania</state>
            <issn>22068163</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1237</troveUrl>
            <startDate>1831-03-28</startDate>
            <endDate>1835-01-31</endDate>
        </newspaper>
        <newspaper id="1244">
            <title>The Irish Exile and Freedom's Advocate (Hobart Town, Tas. : 1850 - 1851)</title>
            <state>Tasmania</state>
            <issn>22068201</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1244</troveUrl>
            <startDate>1850-01-26</startDate>
            <endDate>1851-04-12</endDate>
        </newspaper>
        <newspaper id="158">
            <title>The Leven Lever (Ulverstone, Tas. : 1919 - 1920)</title>
            <state>Tasmania</state>
            <issn>18383769</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/158</troveUrl>
            <startDate>1919-06-14</startDate>
            <endDate>1920-12-11</endDate>
        </newspaper>
        <newspaper id="10">
            <title>The Mercury (Hobart, Tas. : 1860 - 1954)</title>
            <state>Tasmania</state>
            <issn>10399992</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/10</troveUrl>
            <startDate>1860-07-02</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="1253">
            <title>The Midland News (Oatlands, Tas. : 1902 - 1904)</title>
            <state>Tasmania</state>
            <issn>22069607</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1253</troveUrl>
            <startDate>1902-05-17</startDate>
            <endDate>1904-03-12</endDate>
        </newspaper>
        <newspaper id="1251">
            <title>The Mount Lyell Standard and Strahan Gazette (Queenstown, Tas. : 1896 - 1902)</title>
            <state>Tasmania</state>
            <issn>22068562</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1251</troveUrl>
            <startDate>1896-11-28</startDate>
            <endDate>1902-12-22</endDate>
        </newspaper>
        <newspaper id="1257">
            <title>The News (Hobart, Tas. : 1924 - 1925)</title>
            <state>Tasmania</state>
            <issn>22068449</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1257</troveUrl>
            <startDate>1924-05-30</startDate>
            <endDate>1925-12-26</endDate>
        </newspaper>
        <newspaper id="1075">
            <title>The North Coast Standard (Latrobe, Tas. : 1890 - 1894)</title>
            <state>Tasmania</state>
            <issn>22052674</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1075</troveUrl>
            <startDate>1890-11-26</startDate>
            <endDate>1894-08-10</endDate>
        </newspaper>
        <newspaper id="949">
            <title>The North West Post (Formby, Tas. : 1887 - 1916)</title>
            <state>Tasmania</state>
            <issn>22046097</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/949</troveUrl>
            <startDate>1887-04-02</startDate>
            <endDate>1916-12-30</endDate>
        </newspaper>
        <newspaper id="115">
            <title>The North Western Advocate and the Emu Bay Times (Tas. : 1899 - 1919)</title>
            <state>Tasmania</state>
            <issn>18379680</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/115</troveUrl>
            <startDate>1899-01-04</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="1074">
            <title>The North Western Chronicle (Latrobe, Tas. : 1887 - 1888)</title>
            <state>Tasmania</state>
            <issn>22052224</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1074</troveUrl>
            <startDate>1887-07-04</startDate>
            <endDate>1888-05-25</endDate>
        </newspaper>
        <newspaper id="1256">
            <title>The Northern Standard (Ulverstone, Tas. : 1921 - 1923)</title>
            <state>Tasmania</state>
            <issn>22068465</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1256</troveUrl>
            <startDate>1921-12-31</startDate>
            <endDate>1923-07-28</endDate>
        </newspaper>
        <newspaper id="160">
            <title>The Observer (Hobart, Tas. : 1845 - 1846)</title>
            <state>Tasmania</state>
            <issn>18383777</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/160</troveUrl>
            <startDate>1845-06-05</startDate>
            <endDate>1846-03-31</endDate>
        </newspaper>
        <newspaper id="1245">
            <title>The People's Advocate or True Friend of Tasmania (Launceston, Tas. : 1855 - 1856)</title>
            <state>Tasmania</state>
            <issn>22068589</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1245</troveUrl>
            <startDate>1855-04-12</startDate>
            <endDate>1856-12-29</endDate>
        </newspaper>
        <newspaper id="1240">
            <title>The People's Horn Boy (Hobart Town, Tas. : 1834)</title>
            <state>Tasmania</state>
            <issn>22067655</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1240</troveUrl>
            <startDate>1834-08-22</startDate>
            <endDate>1834-12-13</endDate>
        </newspaper>
        <newspaper id="1230">
            <title>The Tasmanian (Hobart Town, Tas. : 1827 - 1839)</title>
            <state>Tasmania</state>
            <issn>22068856</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1230</troveUrl>
            <startDate>1827-10-18</startDate>
            <endDate>1839-09-27</endDate>
        </newspaper>
        <newspaper id="946">
            <title>The Tasmanian (Launceston, Tas. : 1871 - 1879)</title>
            <state>Tasmania</state>
            <issn>22045813</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/946</troveUrl>
            <startDate>1871-01-21</startDate>
            <endDate>1879-12-27</endDate>
        </newspaper>
        <newspaper id="947">
            <title>The Tasmanian (Launceston, Tas. : 1881 - 1895)</title>
            <state>Tasmania</state>
            <issn>2204583X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/947</troveUrl>
            <startDate>1881-01-01</startDate>
            <endDate>1895-12-28</endDate>
        </newspaper>
        <newspaper id="1234">
            <title>The Tasmanian and Austral-Asiatic Review (Hobart Town, Tas. : 1844 - 1845)</title>
            <state>Tasmania</state>
            <issn>22068783</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1234</troveUrl>
            <startDate>1844-10-17</startDate>
            <endDate>1845-06-26</endDate>
        </newspaper>
        <newspaper id="1041">
            <title>The Tasmanian Colonist (Hobart Town, Tas. : 1851 - 1855)</title>
            <state>Tasmania</state>
            <issn>22051023</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1041</troveUrl>
            <startDate>1851-07-07</startDate>
            <endDate>1855-07-30</endDate>
        </newspaper>
        <newspaper id="948">
            <title>The Tasmanian Daily News (Hobart Town, Tas. : 1855 - 1858)</title>
            <state>Tasmania</state>
            <issn>22046070</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/948</troveUrl>
            <startDate>1855-05-14</startDate>
            <endDate>1858-06-01</endDate>
        </newspaper>
        <newspaper id="1269">
            <title>The Tasmanian Democrat (Launceston, Tas. : 1891 - 1898)</title>
            <state>Tasmania</state>
            <issn>2206849X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1269</troveUrl>
            <startDate>1891-09-26</startDate>
            <endDate>1898-07-01</endDate>
        </newspaper>
        <newspaper id="1247">
            <title>The Tasmanian Telegraph (Hobart Town, Tas. : 1858 - 1859)</title>
            <state>Tasmania</state>
            <issn>22068961</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1247</troveUrl>
            <startDate>1858-06-19</startDate>
            <endDate>1859-04-16</endDate>
        </newspaper>
        <newspaper id="1263">
            <title>The Tasmanian Times (Hobart Town, Tas. : 1867 - 1870)</title>
            <state>Tasmania</state>
            <issn>22068511</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1263</troveUrl>
            <startDate>1867-05-18</startDate>
            <endDate>1870-12-31</endDate>
        </newspaper>
        <newspaper id="950">
            <title>The Tasmanian Tribune (Hobart Town, Tas. : 1872 - 1876)</title>
            <state>Tasmania</state>
            <issn>22046321</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/950</troveUrl>
            <startDate>1872-04-08</startDate>
            <endDate>1876-07-01</endDate>
        </newspaper>
        <newspaper id="1035">
            <title>The Teetotal Advocate (Launceston, Tas. : 1843)</title>
            <state>Tasmania</state>
            <issn>14403625</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1035</troveUrl>
            <startDate>1843-04-03</startDate>
            <endDate>1843-12-30</endDate>
        </newspaper>
        <newspaper id="945">
            <title>The True Colonist Van Diemen's Land Political Despatch, and Agricultural and Commercial... (Hobart Town, Tas. : 1834 - 1844)</title>
            <state>Tasmania</state>
            <issn>22045694</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/945</troveUrl>
            <startDate>1834-08-05</startDate>
            <endDate>1844-12-26</endDate>
        </newspaper>
        <newspaper id="1047">
            <title>The Van Diemen's Land Gazette and General Advertiser (Hobart, Tas. : 1814)</title>
            <state>Tasmania</state>
            <issn>22052135</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1047</troveUrl>
            <startDate>1814-05-21</startDate>
            <endDate>1814-09-10</endDate>
        </newspaper>
        <newspaper id="1249">
            <title>The Weekly Times (Hobart Town, Tas. : 1863)</title>
            <state>Tasmania</state>
            <issn>22069399</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1249</troveUrl>
            <startDate>1863-03-14</startDate>
            <endDate>1863-12-12</endDate>
        </newspaper>
        <newspaper id="951">
            <title>Tribune (Hobart, Tas. : 1876 - 1879)</title>
            <state>Tasmania</state>
            <issn>22046348</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/951</troveUrl>
            <startDate>1876-07-03</startDate>
            <endDate>1879-10-31</endDate>
        </newspaper>
        <newspaper id="869">
            <title>Trumpeter General (Hobart, Tas. : 1833 - 1834)</title>
            <state>Tasmania</state>
            <issn>22041583</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/869</troveUrl>
            <startDate>1833-11-29</startDate>
            <endDate>1834-12-26</endDate>
        </newspaper>
        <newspaper id="867">
            <title>Van Diemen's Land Chronicle (Hobart, Tas. : 1841)</title>
            <state>Tasmania</state>
            <issn>22037675</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/867</troveUrl>
            <startDate>1841-07-23</startDate>
            <endDate>1841-12-24</endDate>
        </newspaper>
        <newspaper id="1073">
            <title>Voice (Hobart, Tas. : 1931 - 1953)</title>
            <state>Tasmania</state>
            <issn>22052186</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1073</troveUrl>
            <startDate>1931-01-03</startDate>
            <endDate>1953-12-26</endDate>
        </newspaper>
        <newspaper id="1266">
            <title>Weekly Examiner (Launceston, Tas. : 1872 - 1878)</title>
            <state>Tasmania</state>
            <issn>22068538</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1266</troveUrl>
            <startDate>1872-01-06</startDate>
            <endDate>1878-12-28</endDate>
        </newspaper>
        <newspaper id="117">
            <title>Wellington Times and Agricultural and Mining Gazette (Tas. : 1890 - 1897)</title>
            <state>Tasmania</state>
            <issn>18379702</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/117</troveUrl>
            <startDate>1890-10-01</startDate>
            <endDate>1897-10-30</endDate>
        </newspaper>
        <newspaper id="1132">
            <title>Western Tiers (Tas. : 1980 - 2004)</title>
            <state>Tasmania</state>
            <issn>22054316</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1132</troveUrl>
            <startDate>1980-04-01</startDate>
            <endDate>2004-01-20</endDate>
        </newspaper>
        <newspaper id="861">
            <title>World (Hobart, Tas. : 1918 - 1924)</title>
            <state>Tasmania</state>
            <issn>22037039</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/861</troveUrl>
            <startDate>1918-07-01</startDate>
            <endDate>1924-05-31</endDate>
        </newspaper>
        <newspaper id="270">
            <title>Zeehan and Dundas Herald (Tas. : 1890 - 1922)</title>
            <state>Tasmania</state>
            <issn>18397158</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/270</troveUrl>
            <startDate>1890-10-14</startDate>
            <endDate>1922-05-31</endDate>
        </newspaper>
        <newspaper id="295">
            <title>Advertiser (Footscray, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000941</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/295</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="148">
            <title>Advertiser (Hurstbridge, Vic. : 1922 - 1939)</title>
            <state>Victoria</state>
            <issn>18380344</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/148</troveUrl>
            <startDate>1922-06-23</startDate>
            <endDate>1939-12-22</endDate>
        </newspaper>
        <newspaper id="792">
            <title>Advocate (Melbourne, Vic. : 1868 - 1954)</title>
            <state>Victoria</state>
            <issn>2203398X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/792</troveUrl>
            <startDate>1868-02-01</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="156">
            <title>Alexandra and Yea Standard and Yarck, Gobur, Thornton and Acheron Express (Vic. : 1908 - 1949)</title>
            <state>Victoria</state>
            <issn>13252488</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/156</troveUrl>
            <startDate>1908-02-21</startDate>
            <endDate>1949-06-24</endDate>
        </newspaper>
        <newspaper id="155">
            <title>Alexandra and Yea Standard, Gobur, Thornton and Acheron Express (Vic. : 1877 - 1908)</title>
            <state>Victoria</state>
            <issn>18376940</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/155</troveUrl>
            <startDate>1877-07-14</startDate>
            <endDate>1908-02-14</endDate>
        </newspaper>
        <newspaper id="154">
            <title>Alexandra and Yea Standard, Thornton, Gobur and Acheron Express (Vic. : 1877)</title>
            <state>Victoria</state>
            <issn>18376932</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/154</troveUrl>
            <startDate>1877-07-07</startDate>
            <endDate>1877-07-07</endDate>
        </newspaper>
        <newspaper id="157">
            <title>Alexandra Standard and Yarck, Gobur, Thornton, Taggerty and Acheron Express (Vic. : 1949 - 1954)</title>
            <state>Victoria</state>
            <issn>13252496</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/157</troveUrl>
            <startDate>1949-07-01</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="153">
            <title>Alexandra Times (Vic. : 1868 - 1877)</title>
            <state>Victoria</state>
            <issn>1325247X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/153</troveUrl>
            <startDate>1868-06-02</startDate>
            <endDate>1877-06-30</endDate>
        </newspaper>
        <newspaper id="533">
            <title>Alpine Observer and North-Eastern Herald (Vic. : 1916 - 1918)</title>
            <state>Victoria</state>
            <issn>22018034</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/533</troveUrl>
            <startDate>1916-11-03</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="754">
            <title>Ararat Chronicle and Willaura and Lake Bolac Districts Recorder (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033270</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/754</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="755">
            <title>Avoca Free Press and Farmers' and Miners' Journal (Vic. : 1900; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033297</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/755</troveUrl>
            <startDate>1900-09-01</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="756">
            <title>Avoca Mail (Vic. : 1863 - 1900; 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033300</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/756</troveUrl>
            <startDate>1863-12-11</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="240">
            <title>Bairnsdale Advertiser and Tambo and Omeo Chronicle (Vic. : 1882 - 1918)</title>
            <state>Victoria</state>
            <issn>18389139</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/240</troveUrl>
            <startDate>1882-02-14</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="534">
            <title>Ballan Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019375</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/534</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="757">
            <title>Bealiba Times (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033327</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/757</troveUrl>
            <startDate>1915-01-08</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="959">
            <title>Bell's Life in Victoria and Sporting Chronicle (Melbourne, Vic. : 1857 - 1868)</title>
            <state>Victoria</state>
            <issn>22044868</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/959</troveUrl>
            <startDate>1857-01-03</startDate>
            <endDate>1868-01-04</endDate>
        </newspaper>
        <newspaper id="216">
            <title>Benalla Ensign (Vic. : 1938 - 1954)</title>
            <state>Victoria</state>
            <issn>13268635</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/216</troveUrl>
            <startDate>1938-02-18</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="717">
            <title>Benalla Standard (Vic. : 1901 - 1925)</title>
            <state>Victoria</state>
            <issn>22030549</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/717</troveUrl>
            <startDate>1901-01-04</startDate>
            <endDate>1925-12-25</endDate>
        </newspaper>
        <newspaper id="346">
            <title>Bendigo Advertiser (Vic. : 1855 - 1918)</title>
            <state>Victoria</state>
            <issn>22004696</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/346</troveUrl>
            <startDate>1855-09-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="315">
            <title>Bendigonian (Bendigo, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>18346448</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/315</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="535">
            <title>Berringa Herald (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019901</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/535</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="320">
            <title>Berwick Shire News and Pakenham and Cranbourne Gazette (Berwick, Vic. : 1914 - 1917)</title>
            <state>Victoria</state>
            <issn>13241419</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/320</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1917-04-11</endDate>
        </newspaper>
        <newspaper id="785">
            <title>Beulah Record and Mallee Advocate (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>2203384X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/785</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1914-06-26</endDate>
        </newspaper>
        <newspaper id="786">
            <title>Beulah Standard and Mallee and Wimmera Advertiser (Vic. : 1916 - 1918)</title>
            <state>Victoria</state>
            <issn>22033866</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/786</troveUrl>
            <startDate>1916-01-06</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="536">
            <title>Birchip Advertiser and Watchem Sentinel (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019103</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/536</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="760">
            <title>Birregurra Times (Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>22033378</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/760</troveUrl>
            <startDate>1918-07-09</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="537">
            <title>Boort Standard and Quambatook Herald (Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22017712</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/537</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1915-07-29</endDate>
        </newspaper>
        <newspaper id="245">
            <title>Brighton Southern Cross (Vic. : 1896 - 1918)</title>
            <state>Victoria</state>
            <issn>18390943</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/245</troveUrl>
            <startDate>1896-01-04</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="294">
            <title>Broadmeadows Camp Sentry (Vic. : 1917)</title>
            <state>Victoria</state>
            <issn>22000879</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/294</troveUrl>
            <startDate>1917-07-27</startDate>
            <endDate>1917-08-03</endDate>
        </newspaper>
        <newspaper id="293">
            <title>Brunswick and Coburg Leader (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22002480</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/293</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="780">
            <title>Brunswick and Coburg Star (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22033742</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/780</troveUrl>
            <startDate>1914-01-16</startDate>
            <endDate>1916-11-17</endDate>
        </newspaper>
        <newspaper id="538">
            <title>Bruthen and Tambo Times (Vic. : 1914 - 1919)</title>
            <state>Victoria</state>
            <issn>22019804</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/538</troveUrl>
            <startDate>1914-01-14</startDate>
            <endDate>1919-03-27</endDate>
        </newspaper>
        <newspaper id="539">
            <title>Bunyip Free Press and Berwick Shire Guardian (Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22020128</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/539</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1915-12-16</endDate>
        </newspaper>
        <newspaper id="750">
            <title>Camberwell and Hawthorn Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2203319X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/750</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="43">
            <title>Camperdown Chronicle (Vic. : 1877 - 1954)</title>
            <state>Victoria</state>
            <issn>14447541</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/43</troveUrl>
            <startDate>1877-01-01</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="761">
            <title>Camperdown Herald (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033394</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/761</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="767">
            <title>Casterton Free Press and Glenelg Shire Advertiser (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033491</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/767</troveUrl>
            <startDate>1915-01-11</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="540">
            <title>Castlemaine Mail (Vic. : 1917 - 1918)</title>
            <state>Victoria</state>
            <issn>22017755</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/540</troveUrl>
            <startDate>1917-10-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="870">
            <title>Champion (Melbourne, Vic. : 1895 - 1897)</title>
            <state>Victoria</state>
            <issn>22037446</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/870</troveUrl>
            <startDate>1895-06-22</startDate>
            <endDate>1897-05-29</endDate>
        </newspaper>
        <newspaper id="541">
            <title>Chiltern and Howlong Times and Ovens Register (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018263</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/541</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-04-05</endDate>
        </newspaper>
        <newspaper id="705">
            <title>Chinese Times (Melbourne, Vic. : 1902 - 1922)</title>
            <state>Victoria</state>
            <issn>22026592</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/705</troveUrl>
            <startDate>1902-02-05</startDate>
            <endDate>1922-07-22</endDate>
        </newspaper>
        <newspaper id="847">
            <title>Chronicle, South Yarra Gazette, Toorak Times and Malvern Standard (Vic. : 1892 - 1893)</title>
            <state>Victoria</state>
            <issn>22039643</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/847</troveUrl>
            <startDate>1892-01-02</startDate>
            <endDate>1893-12-30</endDate>
        </newspaper>
        <newspaper id="957">
            <title>Church of England Messenger (Melbourne, Vic. : 1905)</title>
            <state>Victoria</state>
            <issn>2204745X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/957</troveUrl>
            <startDate>1905-09-22</startDate>
            <endDate>1905-12-29</endDate>
        </newspaper>
        <newspaper id="542">
            <title>Clunes Guardian and Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019405</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/542</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="543">
            <title>Cobden Times (Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>22019626</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/543</troveUrl>
            <startDate>1918-08-17</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="544">
            <title>Cobden Times and Heytesbury Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019642</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/544</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-08-14</endDate>
        </newspaper>
        <newspaper id="545">
            <title>Cobram Courier (Vic. : 1888 - 1954)</title>
            <state>Victoria</state>
            <issn>22017887</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/545</troveUrl>
            <startDate>1888-09-12</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="546">
            <title>Cohuna Farmer's Weekly (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019847</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/546</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="763">
            <title>Colac Reformer (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033432</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/763</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="547">
            <title>Coleraine Albion and Western Advertiser (Vic. : 1902; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019421</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/547</troveUrl>
            <startDate>1902-04-18</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="548">
            <title>Corryong Courier (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018301</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/548</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="895">
            <title>Countryman (Melbourne, Vic. : 1924 - 1929)</title>
            <state>Victoria</state>
            <issn>22037365</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/895</troveUrl>
            <startDate>1924-07-04</startDate>
            <endDate>1929-12-20</endDate>
        </newspaper>
        <newspaper id="549">
            <title>Cressy and Lismore Pioneer and Western Plains Representative (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22019669</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/549</troveUrl>
            <startDate>1915-01-07</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="550">
            <title>Creswick Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019448</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/550</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="312">
            <title>Dandenong Advertiser and Cranbourne, Berwick and Oakleigh Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001751</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/312</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="551">
            <title>Daylesford Advocate, Yandoit, Glenlyon and Eganstown Chronicle (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019464</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/551</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="787">
            <title>Dimboola Banner and Wimmera and Mallee Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033882</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/787</troveUrl>
            <startDate>1914-01-13</startDate>
            <endDate>1918-12-13</endDate>
        </newspaper>
        <newspaper id="552">
            <title>Donald Times (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22019146</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/552</troveUrl>
            <startDate>1915-12-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="553">
            <title>Dookie and Katamatite Recorder (Vic. : 1902 - 1920)</title>
            <state>Victoria</state>
            <issn>22017909</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/553</troveUrl>
            <startDate>1902-08-29</startDate>
            <endDate>1920-12-23</endDate>
        </newspaper>
        <newspaper id="554">
            <title>Dunmunkle Standard (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019138</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/554</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="758">
            <title>Dunolly and Betbetshire Express and County of Gladstone Advertiser (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033343</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/758</troveUrl>
            <startDate>1915-01-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="751">
            <title>Echuca and Moama Advertiser and Farmers' Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033211</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/751</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="201">
            <title>Elsternwick Leader and East Brighton, ... (Vic. : 1887)</title>
            <state>Victoria</state>
            <issn>18384730</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/201</troveUrl>
            <startDate>1887-07-16</startDate>
            <endDate>1887-07-16</endDate>
        </newspaper>
        <newspaper id="149">
            <title>Eltham and Whittlesea Shires Advertiser (Vic. : 1940 - 1942)</title>
            <state>Victoria</state>
            <issn>18380352</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/149</troveUrl>
            <startDate>1940-01-12</startDate>
            <endDate>1942-08-28</endDate>
        </newspaper>
        <newspaper id="147">
            <title>Eltham and Whittlesea Shires Advertiser and Diamond Creek Valley Advocate (Vic. : 1917 - 1922)</title>
            <state>Victoria</state>
            <issn>18380336</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/147</troveUrl>
            <startDate>1917-04-06</startDate>
            <endDate>1922-06-16</endDate>
        </newspaper>
        <newspaper id="218">
            <title>Euroa Advertiser (Vic. : 1884 - 1920)</title>
            <state>Victoria</state>
            <issn>18387675</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/218</troveUrl>
            <startDate>1884-07-25</startDate>
            <endDate>1920-12-24</endDate>
        </newspaper>
        <newspaper id="217">
            <title>Euroa Advertiser and Violet Town, Longwood, Avenel, Strathbogie, Balmattam and Miepoll Gazette (Vic. : 1884)</title>
            <state>Victoria</state>
            <issn>18387667</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/217</troveUrl>
            <startDate>1884-03-15</startDate>
            <endDate>1884-07-18</endDate>
        </newspaper>
        <newspaper id="770">
            <title>Euroa Gazette (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>2203353X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/770</troveUrl>
            <startDate>1915-01-05</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="146">
            <title>Evelyn Observer and Bourke East Record (Vic. : 1902 - 1917)</title>
            <state>Victoria</state>
            <issn>18380328</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/146</troveUrl>
            <startDate>1902-10-24</startDate>
            <endDate>1917-03-30</endDate>
        </newspaper>
        <newspaper id="145">
            <title>Evelyn Observer, and South and East Bourke Record (Vic. : 1882 - 1902)</title>
            <state>Victoria</state>
            <issn>1838031X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/145</troveUrl>
            <startDate>1882-06-09</startDate>
            <endDate>1902-10-17</endDate>
        </newspaper>
        <newspaper id="765">
            <title>Every Week (Bairnsdale, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033459</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/765</troveUrl>
            <startDate>1914-07-09</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="894">
            <title>Farmers' Advocate (Melbourne, Vic. : 1917 - 1924)</title>
            <state>Victoria</state>
            <issn>22037349</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/894</troveUrl>
            <startDate>1917-01-26</startDate>
            <endDate>1924-06-27</endDate>
        </newspaper>
        <newspaper id="555">
            <title>Federal Standard (Chiltern, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201828X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/555</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="152">
            <title>Fitzroy City Press (Vic. : 1881 - 1920)</title>
            <state>Victoria</state>
            <issn>1838403X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/152</troveUrl>
            <startDate>1881-07-16</startDate>
            <endDate>1920-06-04</endDate>
        </newspaper>
        <newspaper id="303">
            <title>Flemington Spectator (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001115</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/303</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="774">
            <title>Footscray Chronicle (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033629</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/774</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="556">
            <title>Foster and Toora Mirror and South Gippsland Shire Advocate (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>22018964</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/556</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1914-08-06</endDate>
        </newspaper>
        <newspaper id="557">
            <title>Foster Mirror and South Gippsland Shire Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018980</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/557</troveUrl>
            <startDate>1914-08-13</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="236">
            <title>Frankston and Somerville Standard (Vic. : 1921 - 1939)</title>
            <state>Victoria</state>
            <issn>18388183</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/236</troveUrl>
            <startDate>1921-01-07</startDate>
            <endDate>1939-05-05</endDate>
        </newspaper>
        <newspaper id="233">
            <title>Frankston Standard (Frankston, Vic. : 1949)</title>
            <state>Victoria</state>
            <issn>18388205</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/233</troveUrl>
            <startDate>1949-08-04</startDate>
            <endDate>1949-12-21</endDate>
        </newspaper>
        <newspaper id="873">
            <title>Free Lance (Melbourne, Vic. : 1896)</title>
            <state>Victoria</state>
            <issn>2203823X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/873</troveUrl>
            <startDate>1896-04-23</startDate>
            <endDate>1896-10-17</endDate>
        </newspaper>
        <newspaper id="292">
            <title>Geelong Advertiser (Vic. : 1840 - 1845)</title>
            <state>Victoria</state>
            <issn>14401398</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/292</troveUrl>
            <startDate>1840-11-21</startDate>
            <endDate>1845-05-24</endDate>
        </newspaper>
        <newspaper id="284">
            <title>Geelong Advertiser (Vic. : 1847 - 1851)</title>
            <state>Victoria</state>
            <issn>1440141X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/284</troveUrl>
            <startDate>1847-10-29</startDate>
            <endDate>1851-12-20</endDate>
        </newspaper>
        <newspaper id="558">
            <title>Geelong Advertiser (Vic. : 1859 - 1929)</title>
            <state>Victoria</state>
            <issn>22019944</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/558</troveUrl>
            <startDate>1859-01-01</startDate>
            <endDate>1929-03-04</endDate>
        </newspaper>
        <newspaper id="283">
            <title>Geelong Advertiser and Intelligencer (Vic. : 1851 - 1856)</title>
            <state>Victoria</state>
            <issn>14401428</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/283</troveUrl>
            <startDate>1851-12-22</startDate>
            <endDate>1856-08-09</endDate>
        </newspaper>
        <newspaper id="285">
            <title>Geelong Advertiser and Squatters' Advocate (Vic. : 1845 - 1847)</title>
            <state>Victoria</state>
            <issn>14401401</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/285</troveUrl>
            <startDate>1845-05-28</startDate>
            <endDate>1847-10-26</endDate>
        </newspaper>
        <newspaper id="848">
            <title>Gippsland Chronicle and Crooked River and Stringer's Creek Advertiser (Vic. : 1866)</title>
            <state>Victoria</state>
            <issn>22039163</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/848</troveUrl>
            <startDate>1866-07-21</startDate>
            <endDate>1866-10-13</endDate>
        </newspaper>
        <newspaper id="484">
            <title>Gippsland Guardian (Vic. : 1855 - 1868)</title>
            <state>Victoria</state>
            <issn>22013539</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/484</troveUrl>
            <startDate>1855-10-05</startDate>
            <endDate>1868-12-31</endDate>
        </newspaper>
        <newspaper id="559">
            <title>Gippsland Independent, Buln Buln, Warragul, Berwick, Poowong and Jeetho Shire Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018948</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/559</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="316">
            <title>Gippsland Mercury (Sale, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001611</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/316</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="560">
            <title>Gippsland Standard and Alberton Shire Representative (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018662</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/560</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="108">
            <title>Gippsland Times (Vic. : 1861 - 1954)</title>
            <state>Victoria</state>
            <issn>18346456</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/108</troveUrl>
            <startDate>1861-08-14</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="561">
            <title>Gippslander and Mirboo Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019006</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/561</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="562">
            <title>Gisborne Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017771</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/562</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="563">
            <title>Glengarry, Toongabbie and Cowwarr Journal and Central Gippsland Reporter (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>22018093</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/563</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1914-12-31</endDate>
        </newspaper>
        <newspaper id="564">
            <title>Gordon, Egerton and Ballan Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019480</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/564</troveUrl>
            <startDate>1913-05-23</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="1133">
            <title>Goulburn Valley Stock and Property Journal (Vic. : 1916 - 1942)</title>
            <state>Victoria</state>
            <issn>22054332</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1133</troveUrl>
            <startDate>1916-01-05</startDate>
            <endDate>1942-12-23</endDate>
        </newspaper>
        <newspaper id="775">
            <title>Graphic of Australia (Melbourne, Vic. : 1916 - 1918)</title>
            <state>Victoria</state>
            <issn>22033645</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/775</troveUrl>
            <startDate>1916-01-21</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="565">
            <title>Great Southern Advocate (Vic. : 1889 - 1906; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019022</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/565</troveUrl>
            <startDate>1889-09-13</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="321">
            <title>Great Southern Star (Leongatha, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000674</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/321</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="566">
            <title>Grenville Standard (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22019987</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/566</troveUrl>
            <startDate>1915-01-09</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="567">
            <title>Hamilton Spectator (Vic. : 1870 - 1918)</title>
            <state>Victoria</state>
            <issn>22019545</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/567</troveUrl>
            <startDate>1870-01-08</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="927">
            <title>Hamilton Spectator and Grange District Advertiser (South Melbourne, Vic. : 1860 - 1870)</title>
            <state>Victoria</state>
            <issn>22047123</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/927</troveUrl>
            <startDate>1860-06-02</startDate>
            <endDate>1870-01-05</endDate>
        </newspaper>
        <newspaper id="322">
            <title>Hawthorn and Camberwell Citizen (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>22001484</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/322</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1914-06-09</endDate>
        </newspaper>
        <newspaper id="323">
            <title>Hawthorn, Kew, Camberwell Citizen (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001506</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/323</troveUrl>
            <startDate>1914-05-01</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="143">
            <title>Healesville and Yarra Glen Guardian (Vic. : 1900 - 1942)</title>
            <state>Victoria</state>
            <issn>18380298</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/143</troveUrl>
            <startDate>1900-04-20</startDate>
            <endDate>1942-10-17</endDate>
        </newspaper>
        <newspaper id="144">
            <title>Healesville Guardian (Lilydale, Vic. : 1942 - 1954)</title>
            <state>Victoria</state>
            <issn>18380301</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/144</troveUrl>
            <startDate>1942-10-24</startDate>
            <endDate>1956-04-27</endDate>
        </newspaper>
        <newspaper id="140">
            <title>Healesville Guardian (Vic. : 1893 - 1898)</title>
            <state>Victoria</state>
            <issn>18380263</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/140</troveUrl>
            <startDate>1893-12-21</startDate>
            <endDate>1898-01-29</endDate>
        </newspaper>
        <newspaper id="141">
            <title>Healesville Guardian and Yarra Glen Advocate (Vic. : 1898)</title>
            <state>Victoria</state>
            <issn>18380271</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/141</troveUrl>
            <startDate>1898-02-05</startDate>
            <endDate>1898-08-13</endDate>
        </newspaper>
        <newspaper id="142">
            <title>Healesville Guardian and Yarra Glen Guardian (Vic. : 1898 - 1900)</title>
            <state>Victoria</state>
            <issn>1838028X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/142</troveUrl>
            <startDate>1898-08-20</startDate>
            <endDate>1900-04-06</endDate>
        </newspaper>
        <newspaper id="324">
            <title>Heidelberg News and Greensborough and Diamond Creek Chronicle (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22001212</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/324</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1916-07-01</endDate>
        </newspaper>
        <newspaper id="325">
            <title>Heidelberg News and Greensborough, Eltham and Diamond Creek Chronicle (Vic. : 1916 - 1918)</title>
            <state>Victoria</state>
            <issn>22001255</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/325</troveUrl>
            <startDate>1916-07-08</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="568">
            <title>Heyfield Herald (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201859X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/568</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="762">
            <title>Heytesbury Reformer and Cobden and Camperdown Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033416</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/762</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="569">
            <title>Hopetoun Courier and Mallee Pioneer (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019170</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/569</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="940">
            <title>Illustrated Australian Mail (Vic. : 1861 - 1862)</title>
            <state>Victoria</state>
            <issn>22047611</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/940</troveUrl>
            <startDate>1861-12-20</startDate>
            <endDate>1862-02-22</endDate>
        </newspaper>
        <newspaper id="70">
            <title>Illustrated Australian News (Melbourne, Vic. : 1876 - 1889)</title>
            <state>Victoria</state>
            <issn>18373593</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/70</troveUrl>
            <startDate>1876-01-19</startDate>
            <endDate>1889-05-01</endDate>
        </newspaper>
        <newspaper id="71">
            <title>Illustrated Australian News (Melbourne, Vic. : 1890 - 1896)</title>
            <state>Victoria</state>
            <issn>18373623</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/71</troveUrl>
            <startDate>1890-06-02</startDate>
            <endDate>1892-12-01</endDate>
        </newspaper>
        <newspaper id="105">
            <title>Illustrated Australian News and Musical Times (Melbourne, Vic. : 1889 - 1890)</title>
            <state>Victoria</state>
            <issn>18373615</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/105</troveUrl>
            <startDate>1889-06-01</startDate>
            <endDate>1890-05-01</endDate>
        </newspaper>
        <newspaper id="72">
            <title>Illustrated Australian News for Home Readers (Melbourne, Vic. : 1867 - 1875)</title>
            <state>Victoria</state>
            <issn>18373577</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/72</troveUrl>
            <startDate>1867-07-20</startDate>
            <endDate>1875-12-29</endDate>
        </newspaper>
        <newspaper id="231">
            <title>Independent (Footscray, Vic. : 1883 - 1922)</title>
            <state>Victoria</state>
            <issn>18389201</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/231</troveUrl>
            <startDate>1883-03-31</startDate>
            <endDate>1922-12-23</endDate>
        </newspaper>
        <newspaper id="570">
            <title>Inglewood Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201778X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/570</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="1189">
            <title>Jamboree Daily (Frankston, Vic. : 1934; 1949; 1955; 1964; 1976; 1992; 2007)</title>
            <state>Victoria</state>
            <issn>22062688</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1189</troveUrl>
            <startDate>1934-12-28</startDate>
            <endDate>2007-01-13</endDate>
        </newspaper>
        <newspaper id="571">
            <title>Jamieson and Woodspoint Chronicle and Upper Goulburn Advertiser (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22018050</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/571</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1916-11-10</endDate>
        </newspaper>
        <newspaper id="712">
            <title>Jewish Herald (Vic. : 1879 - 1920)</title>
            <state>Victoria</state>
            <issn>2202896X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/712</troveUrl>
            <startDate>1879-12-12</startDate>
            <endDate>1920-12-24</endDate>
        </newspaper>
        <newspaper id="297">
            <title>Kerang New Times (Vic. : 1901 - 1918)</title>
            <state>Victoria</state>
            <issn>22002510</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/297</troveUrl>
            <startDate>1901-03-29</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="766">
            <title>Kerang Observer (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033475</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/766</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="195">
            <title>Kerang Times and Swan Hill Gazette (Vic. : 1877 - 1889)</title>
            <state>Victoria</state>
            <issn>18384838</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/195</troveUrl>
            <startDate>1877-09-14</startDate>
            <endDate>1894-11-09</endDate>
        </newspaper>
        <newspaper id="779">
            <title>Kilmore Advertiser (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033726</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/779</troveUrl>
            <startDate>1915-01-23</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="127">
            <title>Kilmore Free Press (Kilmore, Vic. : 1870 - 1954)</title>
            <state>Victoria</state>
            <issn>14452510</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/127</troveUrl>
            <startDate>1870-01-06</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="125">
            <title>Kilmore Free Press and Bourke and Dalhousie Advertiser (Kilmore, Vic. : 1865)</title>
            <state>Victoria</state>
            <issn>18379559</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/125</troveUrl>
            <startDate>1865-03-23</startDate>
            <endDate>1865-03-23</endDate>
        </newspaper>
        <newspaper id="126">
            <title>Kilmore Free Press and Counties of Bourke and Dalhousie Advertiser (Kilmore, Vic. : 1865 - 1868)</title>
            <state>Victoria</state>
            <issn>18379567</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/126</troveUrl>
            <startDate>1865-03-30</startDate>
            <endDate>1867-12-26</endDate>
        </newspaper>
        <newspaper id="572">
            <title>Kooweerup Sun, Lang Lang Guardian and Cranbourne Shire Record (Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>22019227</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/572</troveUrl>
            <startDate>1918-07-17</startDate>
            <endDate>1918-12-18</endDate>
        </newspaper>
        <newspaper id="573">
            <title>Koroit Sentinel and Tower Hill Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019685</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/573</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="574">
            <title>Korong Vale Lance and North West Advertiser (Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22017801</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/574</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1915-07-24</endDate>
        </newspaper>
        <newspaper id="752">
            <title>Kyabram Free Press and Rodney and Deakin Shire Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033238</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/752</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="753">
            <title>Kyabram Guardian (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033254</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/753</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="196">
            <title>Kyabram Union (Vic. : 1886 - 1894)</title>
            <state>Victoria</state>
            <issn>18384811</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/196</troveUrl>
            <startDate>1886-05-28</startDate>
            <endDate>1894-03-09</endDate>
        </newspaper>
        <newspaper id="575">
            <title>Kyneton Guardian (Vic. : 1870 - 1880; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017828</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/575</troveUrl>
            <startDate>1870-11-16</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="795">
            <title>Labor Call (Melbourne, Vic. : 1906; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034048</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/795</troveUrl>
            <startDate>1906-11-01</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="576">
            <title>Lancefield Mercury and West Bourke Agricultural Record (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017844</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/576</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="577">
            <title>Lang Lang Guardian (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018794</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/577</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-07-12</endDate>
        </newspaper>
        <newspaper id="319">
            <title>Leader (Melbourne, Vic. : 1862 - 1918)</title>
            <state>Victoria</state>
            <issn>22002219</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/319</troveUrl>
            <startDate>1862-01-04</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="243">
            <title>Lilydale Express and Yarra Glen, Wandin Yallock, Upper Yarra, Healesville and Ringwood Chronicle (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>1839101X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/243</troveUrl>
            <startDate>1914-01-23</startDate>
            <endDate>1914-06-19</endDate>
        </newspaper>
        <newspaper id="578">
            <title>Lismore, Derrinallum and Cressy Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019707</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/578</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-23</endDate>
        </newspaper>
        <newspaper id="579">
            <title>Maldon News (Vic. : 1916 - 1918)</title>
            <state>Victoria</state>
            <issn>22020160</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/579</troveUrl>
            <startDate>1916-06-02</startDate>
            <endDate>1918-11-06</endDate>
        </newspaper>
        <newspaper id="168">
            <title>Malvern and Caulfield Standard (Vic. :  1906)</title>
            <state>Victoria</state>
            <issn>18389023</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/168</troveUrl>
            <startDate>1906-09-15</startDate>
            <endDate>1906-10-27</endDate>
        </newspaper>
        <newspaper id="580">
            <title>Malvern Courier and Caulfield Mirror (Vic. : 1914 - 1917)</title>
            <state>Victoria</state>
            <issn>22018190</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/580</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1917-03-30</endDate>
        </newspaper>
        <newspaper id="781">
            <title>Malvern News (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22033769</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/781</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1916-11-25</endDate>
        </newspaper>
        <newspaper id="169">
            <title>Malvern Standard (Vic. : 1906 - 1931)</title>
            <state>Victoria</state>
            <issn>18389031</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/169</troveUrl>
            <startDate>1906-11-03</startDate>
            <endDate>1931-02-12</endDate>
        </newspaper>
        <newspaper id="317">
            <title>Maryborough and Dunolly Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001557</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/317</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="874">
            <title>Melbourne Punch (Vic. : 1855 - 1900)</title>
            <state>Victoria</state>
            <issn>22038256</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/874</troveUrl>
            <startDate>1855-08-02</startDate>
            <endDate>1900-05-03</endDate>
        </newspaper>
        <newspaper id="1025">
            <title>Melbourne Times (Vic. : 1842 - 1843)</title>
            <state>Victoria</state>
            <issn>1440219X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1025</troveUrl>
            <startDate>1842-04-09</startDate>
            <endDate>1843-12-08</endDate>
        </newspaper>
        <newspaper id="332">
            <title>Melton Express (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22000755</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/332</troveUrl>
            <startDate>1915-01-09</startDate>
            <endDate>1918-12-14</endDate>
        </newspaper>
        <newspaper id="122">
            <title>Mercury (Fitzroy, Vic. : 1875 - 1877)</title>
            <state>Victoria</state>
            <issn>18384048</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/122</troveUrl>
            <startDate>1875-01-02</startDate>
            <endDate>1877-03-17</endDate>
        </newspaper>
        <newspaper id="123">
            <title>Mercury and Weekly Courier (Vic. : 1878 - 1903)</title>
            <state>Victoria</state>
            <issn>18384056</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/123</troveUrl>
            <startDate>1878-01-05</startDate>
            <endDate>1903-02-21</endDate>
        </newspaper>
        <newspaper id="777">
            <title>Mildura Telegraph and Darling and Lower Murray Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033688</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/777</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="788">
            <title>Minyip Guardian and Sheep Hills Advocate (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033904</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/788</troveUrl>
            <startDate>1915-01-05</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="333">
            <title>Moorabbin News (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000690</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/333</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="206">
            <title>Mornington and Dromana Standard (Vic. : 1908 - 1911)</title>
            <state>Victoria</state>
            <issn>1838479X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/206</troveUrl>
            <startDate>1908-07-11</startDate>
            <endDate>1911-03-04</endDate>
        </newspaper>
        <newspaper id="210">
            <title>Mornington Standard (Frankston, Vic. : 1911 - 1920)</title>
            <state>Victoria</state>
            <issn>18384803</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/210</troveUrl>
            <startDate>1911-03-11</startDate>
            <endDate>1920-12-24</endDate>
        </newspaper>
        <newspaper id="205">
            <title>Mornington Standard (Vic. : 1889 - 1908)</title>
            <state>Victoria</state>
            <issn>18384781</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/205</troveUrl>
            <startDate>1889-10-05</startDate>
            <endDate>1908-07-04</endDate>
        </newspaper>
        <newspaper id="581">
            <title>Mortlake Dispatch (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019715</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/581</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="133">
            <title>Morwell Advertiser (Morwell, Vic. : 1888 - 1954) </title>
            <state>Victoria</state>
            <issn>1837963X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/133</troveUrl>
            <startDate>1888-07-07</startDate>
            <endDate>1954-12-20</endDate>
        </newspaper>
        <newspaper id="132">
            <title>Morwell Advertiser and Weekly Chronicle (Morwell, Vic. : 1887 - 1888) </title>
            <state>Victoria</state>
            <issn>18379621</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/132</troveUrl>
            <startDate>1887-01-29</startDate>
            <endDate>1888-06-30</endDate>
        </newspaper>
        <newspaper id="773">
            <title>Morwell and Yinnar Gazette (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22033602</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/773</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1916-04-05</endDate>
        </newspaper>
        <newspaper id="582">
            <title>Mount Alexander Mail (Vic. : 1854 - 1917)</title>
            <state>Victoria</state>
            <issn>22017747</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/582</troveUrl>
            <startDate>1854-05-13</startDate>
            <endDate>1917-09-29</endDate>
        </newspaper>
        <newspaper id="791">
            <title>Mount Wycheproof Ensign and East Wimmera Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033963</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/791</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="583">
            <title>Murchison Advertiser and Murchison, Toolamba, Mooroopna and Dargalong Express (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017976</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/583</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="584">
            <title>Myrtleford Mail and Whorouly Witness (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018077</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/584</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="585">
            <title>Nagambie Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017925</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/585</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="586">
            <title>Narracan Shire Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018115</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/586</troveUrl>
            <startDate>1914-01-14</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="587">
            <title>Nathalia Herald and Picola, Narioka, Kotupna and Moira Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017941</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/587</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="588">
            <title>Nhill Free Press (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201926X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/588</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="797">
            <title>Norden (Melbourne, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034072</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/797</troveUrl>
            <startDate>1914-01-24</startDate>
            <endDate>1918-12-14</endDate>
        </newspaper>
        <newspaper id="151">
            <title>North Melbourne Advertiser (Vic. : 1873 - 1894)</title>
            <state>Victoria</state>
            <issn>18384013</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/151</troveUrl>
            <startDate>1873-07-09</startDate>
            <endDate>1894-04-27</endDate>
        </newspaper>
        <newspaper id="385">
            <title>North Melbourne Courier and West Melbourne Advertiser (Vic. : 1895 - 1913)</title>
            <state>Victoria</state>
            <issn>22008101</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/385</troveUrl>
            <startDate>1895-11-08</startDate>
            <endDate>1913-10-31</endDate>
        </newspaper>
        <newspaper id="384">
            <title>North Melbourne Gazette (Vic. : 1894 - 1901)</title>
            <state>Victoria</state>
            <issn>2200808X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/384</troveUrl>
            <startDate>1894-06-08</startDate>
            <endDate>1901-01-25</endDate>
        </newspaper>
        <newspaper id="589">
            <title>Northcote Leader (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22020144</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/589</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="590">
            <title>Northern District Standard (Vic. : 1915 - 1916)</title>
            <state>Victoria</state>
            <issn>22017720</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/590</troveUrl>
            <startDate>1915-08-05</startDate>
            <endDate>1916-03-30</endDate>
        </newspaper>
        <newspaper id="591">
            <title>Numurkah Leader (Vic. : 1895 - 1948)</title>
            <state>Victoria</state>
            <issn>2201795X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/591</troveUrl>
            <startDate>1895-04-10</startDate>
            <endDate>1948-12-24</endDate>
        </newspaper>
        <newspaper id="771">
            <title>Numurkah Standard and Wunghnu, Cobram, Yarroweyah and Strathmerton Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033556</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/771</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-03-27</endDate>
        </newspaper>
        <newspaper id="304">
            <title>Oakleigh and Caulfield Times Mulgrave and Ferntree Gully Guardian (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001158</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/304</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="215">
            <title>Oakleigh Leader (North Brighton, Vic. : 1888 - 1902)</title>
            <state>Victoria</state>
            <issn>18384072</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/215</troveUrl>
            <startDate>1888-02-11</startDate>
            <endDate>1902-01-04</endDate>
        </newspaper>
        <newspaper id="214">
            <title>Oakleigh Leader and District Record (Brighton, Vic. : 1887 - 1888)</title>
            <state>Victoria</state>
            <issn>18384064</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/214</troveUrl>
            <startDate>1887-10-15</startDate>
            <endDate>1888-02-04</endDate>
        </newspaper>
        <newspaper id="592">
            <title>Omeo Standard and Mining Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019820</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/592</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="778">
            <title>Ouyen and North West Express (Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>2203370X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/778</troveUrl>
            <startDate>1918-10-19</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="305">
            <title>Ouyen Mail (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22001468</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/305</troveUrl>
            <startDate>1915-08-04</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="306">
            <title>Ouyen Mail and Central Mallee Advertiser (Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22001441</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/306</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1915-07-28</endDate>
        </newspaper>
        <newspaper id="326">
            <title>Ovens and Murray Advertiser (Beechworth, Vic. : 1855 - 1918)</title>
            <state>Victoria</state>
            <issn>22001352</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/326</troveUrl>
            <startDate>1855-01-13</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="327">
            <title>Pakenham Gazette and Berwick Shire News (Pakenham East, Vic. : 1917 - 1918)</title>
            <state>Victoria</state>
            <issn>22001336</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/327</troveUrl>
            <startDate>1917-05-10</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="593">
            <title>Penshurst Free Press (Vic. : 1901 - 1918)</title>
            <state>Victoria</state>
            <issn>22019588</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/593</troveUrl>
            <startDate>1901-07-05</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="594">
            <title>Pitfield Banner and Hollybush Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019936</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/594</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="307">
            <title>Port Fairy Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22002529</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/307</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1946-12-28</endDate>
        </newspaper>
        <newspaper id="764">
            <title>Port Fairy Times and Macarthur News (Vic. : 1917 - 1918)</title>
            <state>Victoria</state>
            <issn>22033440</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/764</troveUrl>
            <startDate>1917-03-22</startDate>
            <endDate>1918-02-21</endDate>
        </newspaper>
        <newspaper id="308">
            <title>Port Melbourne Standard (Vic. : 1914 - 1920)</title>
            <state>Victoria</state>
            <issn>22001298</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/308</troveUrl>
            <startDate>1914-05-30</startDate>
            <endDate>1920-02-28</endDate>
        </newspaper>
        <newspaper id="1137">
            <title>Port Philip Gazette (Vic. : 1838 - 1845)</title>
            <state>Victoria</state>
            <issn>22054472</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1137</troveUrl>
            <startDate>1838-10-27</startDate>
            <endDate>1845-08-23</endDate>
        </newspaper>
        <newspaper id="1138">
            <title>Port Philip Gazette and Settler's Journal (Vic. : 1845 - 1850)</title>
            <state>Victoria</state>
            <issn>22054499</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1138</troveUrl>
            <startDate>1845-08-27</startDate>
            <endDate>1850-12-21</endDate>
        </newspaper>
        <newspaper id="1139">
            <title>Port Phillip Gazette (Vic. : 1851)</title>
            <state>Victoria</state>
            <issn>22054545</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1139</troveUrl>
            <startDate>1851-01-04</startDate>
            <endDate>1851-03-15</endDate>
        </newspaper>
        <newspaper id="936">
            <title>Port Phillip Patriot and Melbourne Advertiser (Vic. : 1839 - 1845)</title>
            <state>Victoria</state>
            <issn>22047492</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/936</troveUrl>
            <startDate>1839-02-06</startDate>
            <endDate>1845-09-30</endDate>
        </newspaper>
        <newspaper id="109">
            <title>Portland Guardian (Vic. : 1876 - 1953)</title>
            <state>Victoria</state>
            <issn>18346464</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/109</troveUrl>
            <startDate>1876-07-04</startDate>
            <endDate>1953-12-24</endDate>
        </newspaper>
        <newspaper id="110">
            <title>Portland Guardian and Normanby General Advertiser (Vic. : 1842 - 1843; 1854 - 1876)</title>
            <state>Victoria</state>
            <issn>08136149</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/110</troveUrl>
            <startDate>1842-08-27</startDate>
            <endDate>1876-06-30</endDate>
        </newspaper>
        <newspaper id="298">
            <title>Portland Observer and Normanby Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000925</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/298</troveUrl>
            <startDate>1914-01-05</startDate>
            <endDate>1918-12-23</endDate>
        </newspaper>
        <newspaper id="595">
            <title>Powlett Express and Victorian State Coalfields Advertiser (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>2201912X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/595</troveUrl>
            <startDate>1915-01-08</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="309">
            <title>Prahran Chronicle (Vic. : 1894 - 1906; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001735</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/309</troveUrl>
            <startDate>1894-01-06</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="328">
            <title>Preston Leader (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001190</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/328</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="776">
            <title>Public Opinion (Melbourne, Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22033661</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/776</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1915-01-28</endDate>
        </newspaper>
        <newspaper id="596">
            <title>Punch (Melbourne, Vic. : 1900 - 1918; 1925)</title>
            <state>Victoria</state>
            <issn>22018158</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/596</troveUrl>
            <startDate>1900-05-10</startDate>
            <endDate>1925-12-10</endDate>
        </newspaper>
        <newspaper id="597">
            <title>Quambatook Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201988X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/597</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="234">
            <title>Queenscliff Sentinel, Drysdale, ... (Vic. : 1882 - 1884)</title>
            <state>Victoria</state>
            <issn>18387160</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/234</troveUrl>
            <startDate>1882-12-02</startDate>
            <endDate>1884-12-20</endDate>
        </newspaper>
        <newspaper id="230">
            <title>Queenscliff Sentinel, Drysdale, Portarlington and Sorrento Advertiser (Vic. : 1885 - 1894)</title>
            <state>Victoria</state>
            <issn>18387187</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/230</troveUrl>
            <startDate>1885-06-20</startDate>
            <endDate>1894-09-29</endDate>
        </newspaper>
        <newspaper id="313">
            <title>Queenscliff Sentinel, Drysdale, Portarlington, Sorrento Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22002499</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/313</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="598">
            <title>Rainbow Argus (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019286</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/598</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="527">
            <title>Record (Emerald Hill, Vic. : 1868 - 1872)</title>
            <state>Victoria</state>
            <issn>18389678</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/527</troveUrl>
            <startDate>1868-08-06</startDate>
            <endDate>1872-07-18</endDate>
        </newspaper>
        <newspaper id="248">
            <title>Record (Emerald Hill, Vic. : 1881 - 1954)</title>
            <state>Victoria</state>
            <issn>18389694</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/248</troveUrl>
            <startDate>1881-04-01</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="244">
            <title>Reporter (Box Hill, Vic. : 1889 - 1918)</title>
            <state>Victoria</state>
            <issn>1839096X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/244</troveUrl>
            <startDate>1889-06-26</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="599">
            <title>Richmond Australian (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22019359</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/599</troveUrl>
            <startDate>1914-01-10</startDate>
            <endDate>1916-11-25</endDate>
        </newspaper>
        <newspaper id="310">
            <title>Richmond Guardian (Vic. : 1917 - 1918)</title>
            <state>Victoria</state>
            <issn>22001573</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/310</troveUrl>
            <startDate>1917-01-06</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="329">
            <title>Ringwood and Croydon Chronicle (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001778</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/329</troveUrl>
            <startDate>1914-08-07</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="600">
            <title>Riponshire Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019391</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/600</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="601">
            <title>Rochester Express (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018751</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/601</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="602">
            <title>Rosedale Courier (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201862X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/602</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="603">
            <title>Rupanyup Spectator and Lubeck, Banyena, Rich Avon and Lallat Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019294</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/603</troveUrl>
            <startDate>1914-01-15</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="604">
            <title>Rutherglen Sun and Chiltern Valley Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018328</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/604</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="749">
            <title>Sandringham News (Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>22033173</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/749</troveUrl>
            <startDate>1918-08-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="318">
            <title>Sandringham Southern Cross (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22001638</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/318</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="789">
            <title>Sea Lake Times and Berriwillock Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033920</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/789</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="1043">
            <title>Seamen's Strike Bulletin (Melbourne, Vic. : 1919)</title>
            <state>Victoria</state>
            <issn>2205085X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1043</troveUrl>
        </newspaper>
        <newspaper id="772">
            <title>Seaside News (Cheltenham, Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033572</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/772</troveUrl>
            <startDate>1915-01-09</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="334">
            <title>Seymour Express and Goulburn Valley, Avenel, Graytown, Nagambie, Tallarook and Yea Advertiser (Vic. : 1882 - 1891; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000712</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/334</troveUrl>
            <startDate>1882-01-06</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="331">
            <title>Shepparton Advertiser (Vic. : 1914 - 1953)</title>
            <state>Victoria</state>
            <issn>22000658</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/331</troveUrl>
            <startDate>1914-01-05</startDate>
            <endDate>1953-06-26</endDate>
        </newspaper>
        <newspaper id="605">
            <title>Shepparton News (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22020187</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/605</troveUrl>
            <startDate>1914-01-05</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="330">
            <title>Snowy River Mail (Orbost, Vic. : 1911 - 1918)</title>
            <state>Victoria</state>
            <issn>22000739</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/330</troveUrl>
            <startDate>1911-09-07</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="208">
            <title>South Bourke and Mornington Journal (Richmond, Vic. : 1877 - 1920; 1926 - 1927)</title>
            <state>Victoria</state>
            <issn>18388213</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/208</troveUrl>
            <startDate>1877-01-10</startDate>
            <endDate>1927-08-25</endDate>
        </newspaper>
        <newspaper id="150">
            <title>South Bourke Standard (Vic. : 1861 - 1873)</title>
            <state>Victoria</state>
            <issn>18384021</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/150</troveUrl>
            <startDate>1861-05-31</startDate>
            <endDate>1873-12-26</endDate>
        </newspaper>
        <newspaper id="782">
            <title>South Gippsland Shire Echo (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033785</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/782</troveUrl>
            <startDate>1914-02-06</startDate>
            <endDate>1918-06-21</endDate>
        </newspaper>
        <newspaper id="794">
            <title>Spectator and Methodist Chronicle (Melbourne, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034021</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/794</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-25</endDate>
        </newspaper>
        <newspaper id="875">
            <title>Sporting Globe (Melbourne, Vic. : 1922 - 1954)</title>
            <state>Victoria</state>
            <issn>22037470</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/875</troveUrl>
            <startDate>1922-07-22</startDate>
            <endDate>1954-12-29</endDate>
        </newspaper>
        <newspaper id="798">
            <title>Sporting Judge (Melbourne, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034099</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/798</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="1141">
            <title>Sportsman (Melbourne, Vic. : 1882 - 1904)</title>
            <state>Victoria</state>
            <issn>22054626</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1141</troveUrl>
            <startDate>1882-02-08</startDate>
            <endDate>1904-05-03</endDate>
        </newspaper>
        <newspaper id="299">
            <title>St Arnaud Mercury (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000771</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/299</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="237">
            <title>Standard (Frankston, Vic. : 1939 - 1949)</title>
            <state>Victoria</state>
            <issn>18388191</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/237</troveUrl>
            <startDate>1939-05-12</startDate>
            <endDate>1949-07-28</endDate>
        </newspaper>
        <newspaper id="335">
            <title>Standard (Port Melbourne, Vic. : 1884 - 1914)</title>
            <state>Victoria</state>
            <issn>22001271</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/335</troveUrl>
            <startDate>1884-05-24</startDate>
            <endDate>1914-05-23</endDate>
        </newspaper>
        <newspaper id="606">
            <title>Stawell News and Pleasant Creek Chronicle (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019324</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/606</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="796">
            <title>Stock and Land (Melbourne, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034056</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/796</troveUrl>
            <startDate>1914-07-01</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="607">
            <title>Stratford Sentinel and Briagolong Express (Vic. : 1911 - 1916)</title>
            <state>Victoria</state>
            <issn>22018646</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/607</troveUrl>
            <startDate>1911-10-20</startDate>
            <endDate>1916-06-16</endDate>
        </newspaper>
        <newspaper id="212">
            <title>Sunbury News (Vic. : 1892)</title>
            <state>Victoria</state>
            <issn>01566350</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/212</troveUrl>
            <startDate>1892-06-18</startDate>
            <endDate>1892-11-19</endDate>
        </newspaper>
        <newspaper id="202">
            <title>Sunbury News (Vic. : 1900 - 1910)</title>
            <state>Victoria</state>
            <issn>18384862</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/202</troveUrl>
            <startDate>1900-07-07</startDate>
            <endDate>1910-12-24</endDate>
        </newspaper>
        <newspaper id="203">
            <title>Sunbury News and Bulla and Melton Advertiser (Vic. : 1892 - 1900)</title>
            <state>Victoria</state>
            <issn>18384854</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/203</troveUrl>
            <startDate>1892-11-26</startDate>
            <endDate>1900-06-30</endDate>
        </newspaper>
        <newspaper id="251">
            <title>Sunshine Advocate (Vic. : 1924 - 1954)</title>
            <state>Victoria</state>
            <issn>10364439</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/251</troveUrl>
            <startDate>1924-03-01</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="300">
            <title>Swan Hill Guardian and Lake Boga Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000895</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/300</troveUrl>
            <startDate>1914-01-05</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="713">
            <title>Table Talk (Melbourne, Vic. : 1885 - 1939)</title>
            <state>Victoria</state>
            <issn>22028986</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/713</troveUrl>
            <startDate>1885-06-26</startDate>
            <endDate>1939-09-14</endDate>
        </newspaper>
        <newspaper id="608">
            <title>Talbot Leader (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>2201960X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/608</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="609">
            <title>Terang Express (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019782</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/609</troveUrl>
            <startDate>1914-01-06</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="809">
            <title>The Age (Melbourne, Vic. : 1854 - 1954)</title>
            <state>Victoria</state>
            <issn>03126307</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/809</troveUrl>
            <startDate>1854-10-17</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="229">
            <title>The Ararat Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>18389120</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/229</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="13">
            <title>The Argus (Melbourne, Vic. : 1848 - 1957)</title>
            <state>Victoria</state>
            <issn>18339719</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/13</troveUrl>
            <startDate>1848-09-15</startDate>
            <endDate>1957-01-19</endDate>
        </newspaper>
        <newspaper id="460">
            <title>The Australasian (Melbourne, Vic. : 1864 - 1946)</title>
            <state>Victoria</state>
            <issn>22014705</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/460</troveUrl>
            <startDate>1864-10-01</startDate>
            <endDate>1946-04-06</endDate>
        </newspaper>
        <newspaper id="49">
            <title>The Australasian Sketcher with Pen and Pencil (Melbourne, Vic. : 1873 - 1889)</title>
            <state>Victoria</state>
            <issn>18373429</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/49</troveUrl>
            <startDate>1873-04-19</startDate>
            <endDate>1889-12-26</endDate>
        </newspaper>
        <newspaper id="103">
            <title>The Australian News for Home Readers (Vic. : 1864 - 1867)</title>
            <state>Victoria</state>
            <issn>18373542</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/103</troveUrl>
            <startDate>1864-01-25</startDate>
            <endDate>1867-06-28</endDate>
        </newspaper>
        <newspaper id="246">
            <title>The Bacchus Marsh Express (Vic. : 1866 - 1918)</title>
            <state>Victoria</state>
            <issn>18390951</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/246</troveUrl>
            <startDate>1866-07-21</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="232">
            <title>The Ballarat Courier (Vic. : 1869 - 1880; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>08196818</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/232</troveUrl>
            <startDate>1869-12-01</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="185">
            <title>The Ballarat Star (Vic. : 1865 - 1924)</title>
            <state>Victoria</state>
            <issn>18389864</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/185</troveUrl>
            <startDate>1865-01-02</startDate>
            <endDate>1924-09-13</endDate>
        </newspaper>
        <newspaper id="805">
            <title>The Banner (Melbourne, Vic. : 1853 - 1854)</title>
            <state>Victoria</state>
            <issn>22032436</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/805</troveUrl>
            <startDate>1853-08-19</startDate>
            <endDate>1858-12-09</endDate>
        </newspaper>
        <newspaper id="223">
            <title>The Benalla Ensign and Farmer's and Squatter's Journal (Vic. : 1869 - 1872)</title>
            <state>Victoria</state>
            <issn>18387659</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/223</troveUrl>
            <startDate>1869-07-23</startDate>
            <endDate>1872-03-30</endDate>
        </newspaper>
        <newspaper id="806">
            <title>The Bendigo Independent (Vic. : 1891 - 1918)</title>
            <state>Victoria</state>
            <issn>22032452</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/806</troveUrl>
            <startDate>1891-01-01</startDate>
            <endDate>1918-11-30</endDate>
        </newspaper>
        <newspaper id="129">
            <title>The Broadford Courier (Broadford, Vic. : 1891 - 1893)</title>
            <state>Victoria</state>
            <issn>18379524</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/129</troveUrl>
            <startDate>1891-12-11</startDate>
            <endDate>1893-08-24</endDate>
        </newspaper>
        <newspaper id="131">
            <title>The Broadford Courier (Broadford, Vic. : 1916 - 1920)</title>
            <state>Victoria</state>
            <issn>18379540</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/131</troveUrl>
            <startDate>1916-02-18</startDate>
            <endDate>1920-12-24</endDate>
        </newspaper>
        <newspaper id="128">
            <title>The Broadford Courier and Reedy Creek Times (Broadford, Vic. : 1891)</title>
            <state>Victoria</state>
            <issn>18379516</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/128</troveUrl>
            <startDate>1891-02-28</startDate>
            <endDate>1891-12-04</endDate>
        </newspaper>
        <newspaper id="130">
            <title>The Broadford Courier and Reedy Creek Times (Broadford, Vic. : 1893 - 1916)</title>
            <state>Victoria</state>
            <issn>18379532</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/130</troveUrl>
            <startDate>1893-09-01</startDate>
            <endDate>1916-02-11</endDate>
        </newspaper>
        <newspaper id="249">
            <title>The Casterton News and the Merino and Sandford Record (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>18389198</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/249</troveUrl>
            <startDate>1914-01-05</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="194">
            <title>The Caulfield and Elsternwick Leader (North Brighton, Vic. : 1888 - 1902)</title>
            <state>Victoria</state>
            <issn>18384773</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/194</troveUrl>
            <startDate>1888-02-18</startDate>
            <endDate>1902-01-04</endDate>
        </newspaper>
        <newspaper id="706">
            <title>The Chinese Advertiser (Ballarat, Vic. : 1856)</title>
            <state>Victoria</state>
            <issn>22027154</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/706</troveUrl>
            <startDate>1856-06-14</startDate>
            <endDate>1856-06-28</endDate>
        </newspaper>
        <newspaper id="954">
            <title>The Church of England Messenger (Melbourne, Vic. : 1870 - 1876)</title>
            <state>Victoria</state>
            <issn>22044809</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/954</troveUrl>
            <startDate>1870-01-29</startDate>
            <endDate>1876-03-09</endDate>
        </newspaper>
        <newspaper id="955">
            <title>The Church of England Messenger and Ecclesiastical Gazette for the Diocese of Melbourne and Ballarat (Vic. : 1876 - 1889)</title>
            <state>Victoria</state>
            <issn>22044825</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/955</troveUrl>
            <startDate>1876-04-13</startDate>
            <endDate>1889-02-01</endDate>
        </newspaper>
        <newspaper id="953">
            <title>The Church of England Messenger for the Diocese of Melbourne (Vic. : 1869)</title>
            <state>Victoria</state>
            <issn>22044744</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/953</troveUrl>
            <startDate>1869-01-28</startDate>
            <endDate>1869-12-30</endDate>
        </newspaper>
        <newspaper id="956">
            <title>The Church of England Messenger for Victoria and Ecclesiastical Gazette for the Diocese of Melbourne (Vic. : 1889 - 1905)</title>
            <state>Victoria</state>
            <issn>22044841</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/956</troveUrl>
            <startDate>1889-03-01</startDate>
            <endDate>1905-09-01</endDate>
        </newspaper>
        <newspaper id="207">
            <title>The Coburg Leader (Vic. : 1890 - 1913)</title>
            <state>Victoria</state>
            <issn>18387152</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/207</troveUrl>
            <startDate>1890-08-06</startDate>
            <endDate>1913-03-28</endDate>
        </newspaper>
        <newspaper id="241">
            <title>The Colac Herald (Vic. : 1875 - 1918)</title>
            <state>Victoria</state>
            <issn>18337325</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/241</troveUrl>
            <startDate>1869-12-31</startDate>
            <endDate>1918-12-30</endDate>
        </newspaper>
        <newspaper id="1053">
            <title>The Colonial Mining Journal, Railway and Share Gazette (Vic. : 1858 - 1859)</title>
            <state>Victoria</state>
            <issn>22052852</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1053</troveUrl>
            <startDate>1858-09-02</startDate>
            <endDate>1859-08-04</endDate>
        </newspaper>
        <newspaper id="1054">
            <title>The Colonial Mining Journal, Railway and Share Gazette and Illustrated Record (Melbourne, Vic. : 1859 - 1861)</title>
            <state>Victoria</state>
            <issn>22052879</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1054</troveUrl>
            <startDate>1859-09-01</startDate>
            <endDate>1861-08-08</endDate>
        </newspaper>
        <newspaper id="901">
            <title>The Dandenong Journal (Vic. : 1927 - 1954)</title>
            <state>Victoria</state>
            <issn>22044884</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/901</troveUrl>
            <startDate>1927-09-01</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="199">
            <title>The Elsternwick Leader (Brighton, Vic. : 1888)</title>
            <state>Victoria</state>
            <issn>18384765</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/199</troveUrl>
            <startDate>1888-02-11</startDate>
            <endDate>1888-02-11</endDate>
        </newspaper>
        <newspaper id="200">
            <title>The Elsternwick Leader and Caulfield and Balaclava Guardian (Brighton, Vic. : 1887)</title>
            <state>Victoria</state>
            <issn>18384749</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/200</troveUrl>
            <startDate>1887-07-23</startDate>
            <endDate>1887-07-30</endDate>
        </newspaper>
        <newspaper id="198">
            <title>The Elsternwick Leader and District Record (Brighton, Vic. : 1887 - 1888)</title>
            <state>Victoria</state>
            <issn>18384757</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/198</troveUrl>
            <startDate>1887-08-06</startDate>
            <endDate>1888-02-04</endDate>
        </newspaper>
        <newspaper id="685">
            <title>The English and Chinese Advertiser (Vic. : 1856 - 1858)</title>
            <state>Victoria</state>
            <issn>22025227</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/685</troveUrl>
            <startDate>1856-10-25</startDate>
            <endDate>1858-08-07</endDate>
        </newspaper>
        <newspaper id="242">
            <title>The Essendon Gazette and Keilor, Bulla and Broadmeadows Reporter (Moonee Ponds, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>18390978</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/242</troveUrl>
            <startDate>1914-01-01</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="807">
            <title>The Farmer's Journal and Gardener's Chronicle (Melbourne, Vic. : 1862 - 1864)</title>
            <state>Victoria</state>
            <issn>22032517</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/807</troveUrl>
            <startDate>1862-01-11</startDate>
            <endDate>1864-09-23</endDate>
        </newspaper>
        <newspaper id="296">
            <title>The Gippsland Farmers' Journal (Traralgon, Vic. : 1893 - 1896; 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000615</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/296</troveUrl>
            <startDate>1893-10-03</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="1206">
            <title>The Gippsland Farmers' Journal and Traralgon, Heyfield and Rosedale News (Vic. : 1887 - 1893)</title>
            <state>Victoria</state>
            <issn>22062629</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1206</troveUrl>
            <startDate>1887-01-27</startDate>
            <endDate>1893-09-29</endDate>
        </newspaper>
        <newspaper id="1190">
            <title>The Herald (Melbourne, Vic. : 1949 Supplement)</title>
            <state>Victoria</state>
            <issn>22062459</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1190</troveUrl>
            <startDate>1949-01-06</startDate>
            <endDate>1949-01-06</endDate>
        </newspaper>
        <newspaper id="225">
            <title>The Horsham Times (Vic. : 1882 - 1954)</title>
            <state>Victoria</state>
            <issn>18388175</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/225</troveUrl>
            <startDate>1882-01-17</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="610">
            <title>The Independent (Benalla) (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22020209</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/610</troveUrl>
            <startDate>1914-07-14</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="211">
            <title>The Kerang Times (Vic. : 1889 - 1901)</title>
            <state>Victoria</state>
            <issn>18384846</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/211</troveUrl>
            <startDate>1888-12-07</startDate>
            <endDate>1901-03-26</endDate>
        </newspaper>
        <newspaper id="197">
            <title>The Kyabram Union and Rodney Shire Advocate (Vic. : 1894 - 1894)</title>
            <state>Victoria</state>
            <issn>1838482X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/197</troveUrl>
            <startDate>1894-03-16</startDate>
            <endDate>1894-12-21</endDate>
        </newspaper>
        <newspaper id="250">
            <title>The Lilydale Express (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>10362894</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/250</troveUrl>
            <startDate>1914-06-26</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="1052">
            <title>The Lorgnette (Melbourne, Vic. : 1878 - 1898)</title>
            <state>Victoria</state>
            <issn>22052801</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1052</troveUrl>
            <startDate>1878-07-01</startDate>
            <endDate>1898-12-01</endDate>
        </newspaper>
        <newspaper id="209">
            <title>The Maffra Spectator (Vic. : 1882 - 1920)</title>
            <state>Victoria</state>
            <issn>18387683</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/209</troveUrl>
            <startDate>1882-02-02</startDate>
            <endDate>1920-12-30</endDate>
        </newspaper>
        <newspaper id="999">
            <title>The Maritime Worker (Melbourne, Vic. : 1938 - 1954)</title>
            <state>Victoria</state>
            <issn>22048405</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/999</troveUrl>
            <startDate>1938-04-01</startDate>
            <endDate>1954-11-23</endDate>
        </newspaper>
        <newspaper id="239">
            <title>The McIvor Times and Rodney Advertiser (Heathcote, Vic. : 1863 - 1918)</title>
            <state>Victoria</state>
            <issn>18390986</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/239</troveUrl>
            <startDate>1863-05-14</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="935">
            <title>The Melbourne Advertiser (Vic. : 1838)</title>
            <state>Victoria</state>
            <issn>22047468</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/935</troveUrl>
            <startDate>1838-01-01</startDate>
            <endDate>1838-02-19</endDate>
        </newspaper>
        <newspaper id="18">
            <title>The Melbourne Argus (Vic. : 1846 - 1848)</title>
            <state>Victoria</state>
            <issn>18339700</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/18</troveUrl>
            <startDate>1846-06-02</startDate>
            <endDate>1848-09-12</endDate>
        </newspaper>
        <newspaper id="1024">
            <title>The Melbourne Courier (Vic. : 1845 - 1846)</title>
            <state>Victoria</state>
            <issn>14403692</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1024</troveUrl>
            <startDate>1845-06-16</startDate>
            <endDate>1846-03-11</endDate>
        </newspaper>
        <newspaper id="939">
            <title>The Melbourne Daily News (Vic. : 1848 - 1851)</title>
            <state>Victoria</state>
            <issn>22047581</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/939</troveUrl>
            <startDate>1848-11-17</startDate>
            <endDate>1851-12-31</endDate>
        </newspaper>
        <newspaper id="938">
            <title>The Melbourne Daily News and Port Phillip Patriot (Vic. : 1848)</title>
            <state>Victoria</state>
            <issn>22047549</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/938</troveUrl>
            <startDate>1848-10-09</startDate>
            <endDate>1848-11-16</endDate>
        </newspaper>
        <newspaper id="958">
            <title>The Melbourne Leader (Vic. : 1861)</title>
            <state>Victoria</state>
            <issn>22044949</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/958</troveUrl>
            <startDate>1861-01-12</startDate>
            <endDate>1861-12-28</endDate>
        </newspaper>
        <newspaper id="1023">
            <title>The Melbourne Weekly Courier (Vic. : 1844 - 1845)</title>
            <state>Victoria</state>
            <issn>14403684</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1023</troveUrl>
            <startDate>1844-01-06</startDate>
            <endDate>1845-03-28</endDate>
        </newspaper>
        <newspaper id="228">
            <title>The Mildura Cultivator (Vic. : 1888 - 1920)</title>
            <state>Victoria</state>
            <issn>18387691</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/228</troveUrl>
            <startDate>1888-05-19</startDate>
            <endDate>1920-09-29</endDate>
        </newspaper>
        <newspaper id="222">
            <title>The North Eastern Ensign (Benalla, Vic. : 1872 - 1938)</title>
            <state>Victoria</state>
            <issn>13268627</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/222</troveUrl>
            <startDate>1872-04-05</startDate>
            <endDate>1938-02-11</endDate>
        </newspaper>
        <newspaper id="937">
            <title>The Port Phillip Patriot and Morning Advertiser (Vic. : 1845 - 1848)</title>
            <state>Victoria</state>
            <issn>22047506</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/937</troveUrl>
            <startDate>1845-10-01</startDate>
            <endDate>1848-10-07</endDate>
        </newspaper>
        <newspaper id="247">
            <title>The Prahran Telegraph (Vic. : 1889 - 1930)</title>
            <state>Victoria</state>
            <issn>18391028</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/247</troveUrl>
            <startDate>1889-01-05</startDate>
            <endDate>1930-08-30</endDate>
        </newspaper>
        <newspaper id="235">
            <title>The Queenscliff Sentinel (Vic. : 1884 - 1885)</title>
            <state>Victoria</state>
            <issn>18387179</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/235</troveUrl>
            <startDate>1884-12-27</startDate>
            <endDate>1885-06-13</endDate>
        </newspaper>
        <newspaper id="428">
            <title>The Record and Emerald Hill and Sandridge Advertiser (Vic. : 1872 - 1881)</title>
            <state>Victoria</state>
            <issn>18389686</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/428</troveUrl>
            <startDate>1872-08-08</startDate>
            <endDate>1881-03-25</endDate>
        </newspaper>
        <newspaper id="768">
            <title>The Romsey Examiner (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033505</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/768</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="960">
            <title>The Snowy River Mail and Tambo and Croajingolong Gazette (Orbost, Vic. : 1890 - 1911)</title>
            <state>Victoria</state>
            <issn>22044906</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/960</troveUrl>
            <startDate>1890-08-09</startDate>
            <endDate>1911-08-31</endDate>
        </newspaper>
        <newspaper id="1281">
            <title>The St. James and Devenish Herald (Dookie, Vic. : 1905)</title>
            <state>Victoria</state>
            <issn>22071202</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1281</troveUrl>
            <startDate>1905-04-13</startDate>
            <endDate>1905-12-22</endDate>
        </newspaper>
        <newspaper id="189">
            <title>The Star (Ballarat, Vic. : 1855 - 1864)</title>
            <state>Victoria</state>
            <issn>18389856</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/189</troveUrl>
            <startDate>1855-09-22</startDate>
            <endDate>1864-12-31</endDate>
        </newspaper>
        <newspaper id="1191">
            <title>The Sun News Pictorial (Melbourne, Vic. : 1956 Supplement)</title>
            <state>Victoria</state>
            <issn>22062351</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1191</troveUrl>
            <startDate>1956-01-07</startDate>
            <endDate>1956-01-07</endDate>
        </newspaper>
        <newspaper id="383">
            <title>The Telegraph, St Kilda, Prahran and South Yarra Guardian (Vic. : 1866 - 1888)</title>
            <state>Victoria</state>
            <issn>22008055</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/383</troveUrl>
            <startDate>1866-01-06</startDate>
            <endDate>1888-12-29</endDate>
        </newspaper>
        <newspaper id="961">
            <title>The Tocsin (Melbourne, Vic. : 1897 - 1906)</title>
            <state>Victoria</state>
            <issn>22044944</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/961</troveUrl>
            <startDate>1897-10-02</startDate>
            <endDate>1906-10-25</endDate>
        </newspaper>
        <newspaper id="808">
            <title>The Victorian Farmers Journal and Gardeners Chronicle (Melbourne, Vic. : 1860 - 1862)</title>
            <state>Victoria</state>
            <issn>22032495</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/808</troveUrl>
            <startDate>1860-07-07</startDate>
            <endDate>1862-01-04</endDate>
        </newspaper>
        <newspaper id="716">
            <title>The Yackandandah Times (Vic. : 1890 - 1931)</title>
            <state>Victoria</state>
            <issn>22030646</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/716</troveUrl>
            <startDate>1890-08-16</startDate>
            <endDate>1931-05-29</endDate>
        </newspaper>
        <newspaper id="390">
            <title>The Yarragon, Trafalgar and Moe Settlement News (Vic. : 1904 - 1920)</title>
            <state>Victoria</state>
            <issn>22010998</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/390</troveUrl>
            <startDate>1904-03-03</startDate>
            <endDate>1920-12-23</endDate>
        </newspaper>
        <newspaper id="611">
            <title>Toora and Welshpool Ensign and South Gippsland Observer (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019049</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/611</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="612">
            <title>Trafalgar and Yarragon Times (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019065</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/612</troveUrl>
            <startDate>1914-01-16</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="135">
            <title>Traralgon Record (Traralgon, Vic. : 1886 - 1932)  </title>
            <state>Victoria</state>
            <issn>18379591</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/135</troveUrl>
            <startDate>1886-01-22</startDate>
            <endDate>1932-12-22</endDate>
        </newspaper>
        <newspaper id="134">
            <title>Traralgon Record and Morwell, Mirboo,Toongabbie, Heyfield,Tyers and Callignee Advertiser (Traralgon, Vic. : 1883 - 1886)</title>
            <state>Victoria</state>
            <issn>18379583</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/134</troveUrl>
            <startDate>1883-12-14</startDate>
            <endDate>1886-01-15</endDate>
        </newspaper>
        <newspaper id="793">
            <title>Tribune (Melbourne, Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22034005</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/793</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-26</endDate>
        </newspaper>
        <newspaper id="613">
            <title>Truth (Melbourne ed.) (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018174</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/613</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="614">
            <title>Tungamah and Lake Rowan Express and St. James Gazette (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017992</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/614</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="615">
            <title>Ultima and Chillingollah Star (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018247</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/615</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="616">
            <title>Upper Murray and Mitta Herald (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018573</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/616</troveUrl>
            <startDate>1914-01-08</startDate>
            <endDate>1918-12-19</endDate>
        </newspaper>
        <newspaper id="799">
            <title>Vigilante (Melbourne, Vic. : 1918)</title>
            <state>Victoria</state>
            <issn>22034102</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/799</troveUrl>
            <startDate>1918-07-01</startDate>
            <endDate>1918-12-01</endDate>
        </newspaper>
        <newspaper id="617">
            <title>Violet Town Sentinel (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018018</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/617</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="783">
            <title>Walhalla Chronicle (Vic. : 1914)</title>
            <state>Victoria</state>
            <issn>22033807</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/783</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1914-05-29</endDate>
        </newspaper>
        <newspaper id="784">
            <title>Walhalla Chronicle and Moondarra Advertiser (Vic. : 1914 - 1915)</title>
            <state>Victoria</state>
            <issn>22033823</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/784</troveUrl>
            <startDate>1914-06-05</startDate>
            <endDate>1915-07-30</endDate>
        </newspaper>
        <newspaper id="301">
            <title>Wangaratta Chronicle (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22000798</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/301</troveUrl>
            <startDate>1914-01-07</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="618">
            <title>Warracknabeal Herald (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22020217</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/618</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-24</endDate>
        </newspaper>
        <newspaper id="139">
            <title>Warragul Guardian (Warragul, Vic. : 1895 - 1900)</title>
            <state>Victoria</state>
            <issn>18380255</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/139</troveUrl>
            <startDate>1895-01-08</startDate>
            <endDate>1900-12-28</endDate>
        </newspaper>
        <newspaper id="137">
            <title>Warragul Guardian and Buln Buln and Narracan Shire Advocate (Warragul, Vic. : 1879 - 1894)    </title>
            <state>Victoria</state>
            <issn>18380239</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/137</troveUrl>
            <startDate>1879-10-16</startDate>
            <endDate>1894-01-05</endDate>
        </newspaper>
        <newspaper id="138">
            <title>Warragul Guardian and West Gippsland Advertiser (Warragul, Vic. : 1894)</title>
            <state>Victoria</state>
            <issn>18380247</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/138</troveUrl>
            <startDate>1894-01-09</startDate>
            <endDate>1894-12-28</endDate>
        </newspaper>
        <newspaper id="227">
            <title>Warrnambool Standard (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>08129762</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/227</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-31</endDate>
        </newspaper>
        <newspaper id="619">
            <title>Wedderburn Express and Korongshire Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22017860</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/619</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="620">
            <title>Weekly News (Yarraville) (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22018131</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/620</troveUrl>
            <startDate>1914-04-04</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="621">
            <title>Weekly Times (Melbourne, Vic. : 1869 - 1954)</title>
            <state>Victoria</state>
            <issn>22021159</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/621</troveUrl>
            <startDate>1869-09-11</startDate>
            <endDate>1954-12-29</endDate>
        </newspaper>
        <newspaper id="707">
            <title>Weekly Times Annual (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22027580</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/707</troveUrl>
            <startDate>1914-11-07</startDate>
            <endDate>1918-11-02</endDate>
        </newspaper>
        <newspaper id="238">
            <title>Werribee Shire Banner (Vic. : 1911 - 1952)</title>
            <state>Victoria</state>
            <issn>1838966X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/238</troveUrl>
            <startDate>1911-09-07</startDate>
            <endDate>1952-12-25</endDate>
        </newspaper>
        <newspaper id="136">
            <title>West Gippsland Gazette (Warragul, Vic. : 1898 - 1930)  </title>
            <state>Victoria</state>
            <issn>18379575</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/136</troveUrl>
            <startDate>1898-07-05</startDate>
            <endDate>1930-12-23</endDate>
        </newspaper>
        <newspaper id="622">
            <title>West Wimmera Mail and Natimuk Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22019243</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/622</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-27</endDate>
        </newspaper>
        <newspaper id="759">
            <title>Willaura Farmer (Vic. : 1914 - 1916)</title>
            <state>Victoria</state>
            <issn>22033351</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/759</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1916-06-29</endDate>
        </newspaper>
        <newspaper id="302">
            <title>Williamstown Advertiser (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22002502</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/302</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="193">
            <title>Williamstown Chronicle (Vic. : 1856 - 1954)</title>
            <state>Victoria</state>
            <issn>18387144</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/193</troveUrl>
            <startDate>1856-09-13</startDate>
            <endDate>1954-12-23</endDate>
        </newspaper>
        <newspaper id="213">
            <title>Williamstown Trade Circular (Vic. : 1855 - 1856)</title>
            <state>Victoria</state>
            <issn>18387136</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/213</troveUrl>
            <startDate>1855-06-02</startDate>
            <endDate>1856-09-06</endDate>
        </newspaper>
        <newspaper id="800">
            <title>Winner (Melbourne, Vic. : 1914 - 1917)</title>
            <state>Victoria</state>
            <issn>22034129</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/800</troveUrl>
            <startDate>1914-07-29</startDate>
            <endDate>1917-12-26</endDate>
        </newspaper>
        <newspaper id="204">
            <title>Wodonga and Towong Sentinel (Vic. : 1885 - 1954)</title>
            <state>Victoria</state>
            <issn>18387705</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/204</troveUrl>
            <startDate>1885-09-05</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="872">
            <title>Woman Voter (Melbourne, Vic. : 1911 - 1919)</title>
            <state>Victoria</state>
            <issn>22037462</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/872</troveUrl>
            <startDate>1911-03-06</startDate>
            <endDate>1919-12-18</endDate>
        </newspaper>
        <newspaper id="769">
            <title>Woodend Star (Vic. : 1915 - 1918)</title>
            <state>Victoria</state>
            <issn>22033521</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/769</troveUrl>
            <startDate>1915-01-09</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="790">
            <title>Woomelang Sun and Lascelles and Ouyen Advocate (Vic. : 1914 - 1918)</title>
            <state>Victoria</state>
            <issn>22033947</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/790</troveUrl>
            <startDate>1914-01-09</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="124">
            <title>Yea Chronicle (Yea, Vic. : 1891 - 1920)</title>
            <state>Victoria</state>
            <issn>18376924</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/124</troveUrl>
            <startDate>1891-01-01</startDate>
            <endDate>1920-12-23</endDate>
        </newspaper>
        <newspaper id="175">
            <title>Albany Advertiser (WA : 1897 - 1950)</title>
            <state>Western Australia</state>
            <issn>14469936</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/175</troveUrl>
            <startDate>1897-02-20</startDate>
            <endDate>1950-12-28</endDate>
        </newspaper>
        <newspaper id="1106">
            <title>Bruce Rock Post and Corrigin and Narembeen Guardian (WA : 1924 - 1948)</title>
            <state>Western Australia</state>
            <issn>22054073</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1106</troveUrl>
            <startDate>1924-05-16</startDate>
            <endDate>1948-10-28</endDate>
        </newspaper>
        <newspaper id="1107">
            <title>Bruce Rock Post and Corrigin Guardian (WA : 1917 - 1924)</title>
            <state>Western Australia</state>
            <issn>22054057</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1107</troveUrl>
            <startDate>1917-03-02</startDate>
            <endDate>1924-05-09</endDate>
        </newspaper>
        <newspaper id="1108">
            <title>Bruce Rock-Corrigin Post, Narembeen-Kondinin Guardian (WA : 1948 - 1954)</title>
            <state>Western Australia</state>
            <issn>22054138</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1108</troveUrl>
            <startDate>1948-11-04</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="345">
            <title>Bunbury Herald (WA : 1892 - 1919)</title>
            <state>Western Australia</state>
            <issn>22004181</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/345</troveUrl>
            <startDate>1892-09-28</startDate>
            <endDate>1919-08-13</endDate>
        </newspaper>
        <newspaper id="1111">
            <title>Call (Perth, WA : 1920 - 1927)</title>
            <state>Western Australia</state>
            <issn>22053476</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1111</troveUrl>
            <startDate>1920-04-30</startDate>
            <endDate>1927-12-16</endDate>
        </newspaper>
        <newspaper id="1112">
            <title>Call (Perth, WA : 1945 - 1953)</title>
            <state>Western Australia</state>
            <issn>22054006</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1112</troveUrl>
            <startDate>1945-06-28</startDate>
            <endDate>1953-07-30</endDate>
        </newspaper>
        <newspaper id="1109">
            <title>Call and Bailey's Weekly (Perth, WA : 1940-1945)</title>
            <state>Western Australia</state>
            <issn>22053964</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1109</troveUrl>
            <startDate>1940-12-19</startDate>
            <endDate>1945-06-21</endDate>
        </newspaper>
        <newspaper id="1110">
            <title>Call and WA Sportsman (Perth, WA : 1918 - 1920)</title>
            <state>Western Australia</state>
            <issn>2205345X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1110</troveUrl>
            <startDate>1918-09-13</startDate>
            <endDate>1920-04-23</endDate>
        </newspaper>
        <newspaper id="1113">
            <title>Call News-Pictorial (Perth, WA : 1927 - 1931)</title>
            <state>Western Australia</state>
            <issn>22053514</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1113</troveUrl>
            <startDate>1927-12-22</startDate>
            <endDate>1931-09-03</endDate>
        </newspaper>
        <newspaper id="844">
            <title>Camp Chronicle (Midland Junction, WA : 1915 - 1918)</title>
            <state>Western Australia</state>
            <issn>22038159</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/844</troveUrl>
            <startDate>1915-12-09</startDate>
            <endDate>1918-08-01</endDate>
        </newspaper>
        <newspaper id="933">
            <title>Collie Mail (Perth, WA : 1914 - 1918)</title>
            <state>Western Australia</state>
            <issn>22047190</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/933</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-21</endDate>
        </newspaper>
        <newspaper id="343">
            <title>Coolgardie Miner (WA : 1913 - 1917)</title>
            <state>Western Australia</state>
            <issn>22004254</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/343</troveUrl>
            <startDate>1913-03-01</startDate>
            <endDate>1917-12-29</endDate>
        </newspaper>
        <newspaper id="1174">
            <title>Coolgardie Miner (WA : 1935 - 1954)</title>
            <state>Western Australia</state>
            <issn>22057498</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1174</troveUrl>
            <startDate>1935-04-12</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1272">
            <title>Coolgardie Mining Review (WA : 1895 - 1897)</title>
            <state>Western Australia</state>
            <issn>2206916X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1272</troveUrl>
            <startDate>1895-12-28</startDate>
            <endDate>1897-05-08</endDate>
        </newspaper>
        <newspaper id="1114">
            <title>Daily Telegraph and North Murchison and Pilbarra Gazette (WA : 1920 - 1947)</title>
            <state>Western Australia</state>
            <issn>22053980</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1114</troveUrl>
            <startDate>1920-03-25</startDate>
            <endDate>1947-01-31</endDate>
        </newspaper>
        <newspaper id="734">
            <title>Eastern Districts Chronicle (York, WA : 1877 - 1927)</title>
            <state>Western Australia</state>
            <issn>22030115</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/734</troveUrl>
            <startDate>1877-10-31</startDate>
            <endDate>1927-01-07</endDate>
        </newspaper>
        <newspaper id="1116">
            <title>Fremantle Herald (WA : 1913 - 1915)</title>
            <state>Western Australia</state>
            <issn>22053336</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1116</troveUrl>
            <startDate>1913-04-18</startDate>
            <endDate>1915-12-24</endDate>
        </newspaper>
        <newspaper id="1196">
            <title>Fremantle Mercury (WA : 1932 - 1933)</title>
            <state>Western Australia</state>
            <issn>22062270</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1196</troveUrl>
            <startDate>1932-11-30</startDate>
            <endDate>1933-02-09</endDate>
        </newspaper>
        <newspaper id="1117">
            <title>Geraldton Express (WA : 1906 - 1919)</title>
            <state>Western Australia</state>
            <issn>22054030</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1117</troveUrl>
            <startDate>1906-01-02</startDate>
            <endDate>1919-02-28</endDate>
        </newspaper>
        <newspaper id="173">
            <title>Geraldton Guardian (WA : 1906 - 1928)</title>
            <state>Western Australia</state>
            <issn>18390625</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/173</troveUrl>
            <startDate>1906-10-02</startDate>
            <endDate>1942-05-17</endDate>
        </newspaper>
        <newspaper id="221">
            <title>Geraldton Guardian (WA : 1948 - 1950)</title>
            <state>Western Australia</state>
            <issn>14433346</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/221</troveUrl>
            <startDate>1948-01-03</startDate>
            <endDate>1950-12-30</endDate>
        </newspaper>
        <newspaper id="220">
            <title>Geraldton Guardian and Express (WA : 1929 - 1947)</title>
            <state>Western Australia</state>
            <issn>18390633</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/220</troveUrl>
            <startDate>1929-01-03</startDate>
            <endDate>1947-12-30</endDate>
        </newspaper>
        <newspaper id="811">
            <title>Gnowangerup Star and Tambellup-Ongerup Gazette (WA : 1915 - 1942)</title>
            <state>Western Australia</state>
            <issn>22037241</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/811</troveUrl>
            <startDate>1915-08-28</startDate>
            <endDate>1944-07-29</endDate>
        </newspaper>
        <newspaper id="1118">
            <title>Gnowangerup Times (WA : 1912 - 1918)</title>
            <state>Western Australia</state>
            <issn>22054154</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1118</troveUrl>
            <startDate>1912-10-12</startDate>
            <endDate>1918-03-30</endDate>
        </newspaper>
        <newspaper id="812">
            <title>Goomalling-Dowerin Mail (WA : 1911 - 1916)</title>
            <state>Western Australia</state>
            <issn>22037772</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/812</troveUrl>
            <startDate>1911-01-06</startDate>
            <endDate>1916-08-11</endDate>
        </newspaper>
        <newspaper id="813">
            <title>Goomalling-Dowerin Mail (WA : 1916 - 1922)</title>
            <state>Western Australia</state>
            <issn>22037799</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/813</troveUrl>
            <startDate>1916-12-01</startDate>
            <endDate>1922-05-12</endDate>
        </newspaper>
        <newspaper id="735">
            <title>Great Southern Herald (Katanning, WA : 1901 - 1954)</title>
            <state>Western Australia</state>
            <issn>14469944</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/735</troveUrl>
            <startDate>1901-10-05</startDate>
            <endDate>1954-12-24</endDate>
        </newspaper>
        <newspaper id="814">
            <title>Great Southern Leader (Pingelly, WA : 1907 - 1934)</title>
            <state>Western Australia</state>
            <issn>22037225</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/814</troveUrl>
            <startDate>1907-08-09</startDate>
            <endDate>1934-11-02</endDate>
        </newspaper>
        <newspaper id="1274">
            <title>Group Settlement Chronicle and Margaret-Augusta Mail (Busselton, WA : 1923 - 1930)</title>
            <state>Western Australia</state>
            <issn>22069208</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1274</troveUrl>
            <startDate>1923-12-04</startDate>
            <endDate>1930-10-07</endDate>
        </newspaper>
        <newspaper id="1175">
            <title>Hamersley News (Perth, WA: 1969 - 1980)</title>
            <state>Western Australia</state>
            <issn>2205927X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1175</troveUrl>
            <startDate>1969-03-20</startDate>
            <endDate>1980-03-27</endDate>
        </newspaper>
        <newspaper id="931">
            <title>Harvey Chronicle (Pinjarra, WA : 1915 - 1916)</title>
            <state>Western Australia</state>
            <issn>22046925</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/931</troveUrl>
            <startDate>1915-09-10</startDate>
            <endDate>1916-11-03</endDate>
        </newspaper>
        <newspaper id="181">
            <title>Inquirer (Perth, WA : 1840 - 1855)</title>
            <state>Western Australia</state>
            <issn>14401312</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/181</troveUrl>
            <startDate>1840-08-05</startDate>
            <endDate>1855-06-27</endDate>
        </newspaper>
        <newspaper id="342">
            <title>Kalgoorlie Miner (WA : 1895 - 1950)</title>
            <state>Western Australia</state>
            <issn>13226681</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/342</troveUrl>
            <startDate>1895-09-14</startDate>
            <endDate>1950-12-30</endDate>
        </newspaper>
        <newspaper id="73">
            <title>Kalgoorlie Western Argus (WA : 1896 - 1916)</title>
            <state>Western Australia</state>
            <issn>18373488</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/73</troveUrl>
            <startDate>1896-02-13</startDate>
            <endDate>1916-11-28</endDate>
        </newspaper>
        <newspaper id="976">
            <title>Laverton Mercury (Laverton, WA : 1899 - 1919)</title>
            <state>Western Australia</state>
            <issn>22048723</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/976</troveUrl>
            <startDate>1899-09-16</startDate>
            <endDate>1919-12-18</endDate>
        </newspaper>
        <newspaper id="1119">
            <title>Local Option Advocate (Perth, WA : 1919 - 1927)</title>
            <state>Western Australia</state>
            <issn>22053352</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1119</troveUrl>
            <startDate>1919-06-01</startDate>
            <endDate>1927-12-30</endDate>
        </newspaper>
        <newspaper id="977">
            <title>Meekatharra Miner (WA : 1909 - 1918)</title>
            <state>Western Australia</state>
            <issn>2204874X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/977</troveUrl>
            <startDate>1909-08-07</startDate>
            <endDate>1918-07-06</endDate>
        </newspaper>
        <newspaper id="815">
            <title>Merredin Mercury (WA : 1912 - 1921)</title>
            <state>Western Australia</state>
            <issn>22037187</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/815</troveUrl>
            <startDate>1912-08-14</startDate>
            <endDate>1921-12-22</endDate>
        </newspaper>
        <newspaper id="253">
            <title>Mirror (Perth, WA : 1921 - 1956)</title>
            <state>Western Australia</state>
            <issn>18396305</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/253</troveUrl>
            <startDate>1921-04-17</startDate>
            <endDate>1956-08-11</endDate>
        </newspaper>
        <newspaper id="817">
            <title>Mount Magnet Miner and Lennonville Leader (WA : 1896 - 1926)</title>
            <state>Western Australia</state>
            <issn>22037209</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/817</troveUrl>
            <startDate>1896-06-13</startDate>
            <endDate>1926-07-17</endDate>
        </newspaper>
        <newspaper id="1120">
            <title>Murchison Advocate (WA : 1898 - 1912)</title>
            <state>Western Australia</state>
            <issn>22053271</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1120</troveUrl>
            <startDate>1898-09-03</startDate>
            <endDate>1912-02-01</endDate>
        </newspaper>
        <newspaper id="1082">
            <title>Narrogin Observer (WA : 1952 - 1954)</title>
            <state>Western Australia</state>
            <issn>22051821</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1082</troveUrl>
            <startDate>1952-01-04</startDate>
            <endDate>1955-04-28</endDate>
        </newspaper>
        <newspaper id="1081">
            <title>Narrogin Observer and Williams District Representative (WA : 1905 - 1918)</title>
            <state>Western Australia</state>
            <issn>22051813</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1081</troveUrl>
            <startDate>1905-08-26</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="1122">
            <title>New Call (Perth, WA : 1931 - 1934)</title>
            <state>Western Australia</state>
            <issn>22053530</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1122</troveUrl>
            <startDate>1931-09-10</startDate>
            <endDate>1934-05-10</endDate>
        </newspaper>
        <newspaper id="1121">
            <title>New Call and Bailey's Weekly (Perth, WA : 1934 - 1940)</title>
            <state>Western Australia</state>
            <issn>22053557</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1121</troveUrl>
            <startDate>1934-05-17</startDate>
            <endDate>1940-12-12</endDate>
        </newspaper>
        <newspaper id="932">
            <title>Nor-West Echo (Broome, WA : 1914 - 1918)</title>
            <state>Western Australia</state>
            <issn>2204695X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/932</troveUrl>
            <startDate>1914-01-03</startDate>
            <endDate>1918-12-28</endDate>
        </newspaper>
        <newspaper id="846">
            <title>Norseman Esperance Guardian and Dundas Goldfields Advertiser (WA : 1896)</title>
            <state>Western Australia</state>
            <issn>2203837X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/846</troveUrl>
            <startDate>1896-01-18</startDate>
            <endDate>1896-04-11</endDate>
        </newspaper>
        <newspaper id="736">
            <title>Norseman Times (WA : 1898 - 1920)</title>
            <state>Western Australia</state>
            <issn>22030158</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/736</troveUrl>
            <startDate>1898-01-08</startDate>
            <endDate>1920-09-28</endDate>
        </newspaper>
        <newspaper id="818">
            <title>Northam Courier (WA : 1909 - 1922)</title>
            <state>Western Australia</state>
            <issn>22037756</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/818</troveUrl>
            <startDate>1909-11-16</startDate>
            <endDate>1922-05-12</endDate>
        </newspaper>
        <newspaper id="254">
            <title>Northern Times (Carnarvon, WA : 1905 - 1952)</title>
            <state>Western Australia</state>
            <issn>08140170</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/254</troveUrl>
            <startDate>1905-08-26</startDate>
            <endDate>1952-06-05</endDate>
        </newspaper>
        <newspaper id="1123">
            <title>Nungarin Trayning Mail and Kununoppin Advertiser (WA : 1917 - 1922)</title>
            <state>Western Australia</state>
            <issn>22053727</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1123</troveUrl>
            <startDate>1917-07-10</startDate>
            <endDate>1922-03-10</endDate>
        </newspaper>
        <newspaper id="1090">
            <title>Pingelly-Brookton Leader (WA : 1925 - 1926)</title>
            <state>Western Australia</state>
            <issn>2205250X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1090</troveUrl>
            <startDate>1925-10-08</startDate>
            <endDate>1926-07-08</endDate>
        </newspaper>
        <newspaper id="1124">
            <title>Primary Producer (Perth, WA : 1916 - 1921)</title>
            <state>Western Australia</state>
            <issn>22053417</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1124</troveUrl>
            <startDate>1916-09-29</startDate>
            <endDate>1921-07-29</endDate>
        </newspaper>
        <newspaper id="738">
            <title>South Western Advertiser (Perth, WA : 1910 - 1954)</title>
            <state>Western Australia</state>
            <issn>22029028</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/738</troveUrl>
            <startDate>1910-11-23</startDate>
            <endDate>1954-12-30</endDate>
        </newspaper>
        <newspaper id="1126">
            <title>South Western Times (Bunbury, WA : 1917 - 1929)</title>
            <state>Western Australia</state>
            <issn>22053395</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1126</troveUrl>
            <startDate>1917-01-04</startDate>
            <endDate>1929-12-31</endDate>
        </newspaper>
        <newspaper id="341">
            <title>Southern Advertiser (Bunbury, WA : 1888)</title>
            <state>Western Australia</state>
            <issn>22004238</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/341</troveUrl>
            <startDate>1888-01-03</startDate>
            <endDate>1888-08-14</endDate>
        </newspaper>
        <newspaper id="819">
            <title>Southern Times (Bunbury, WA : 1888 - 1916)</title>
            <state>Western Australia</state>
            <issn>22037284</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/819</troveUrl>
            <startDate>1888-08-28</startDate>
            <endDate>1916-12-30</endDate>
        </newspaper>
        <newspaper id="929">
            <title>Sparks' Fortnightly (Perth, WA : 1916 - 1919)</title>
            <state>Western Australia</state>
            <issn>22046887</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/929</troveUrl>
            <startDate>1916-12-09</startDate>
            <endDate>1919-04-26</endDate>
        </newspaper>


>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="93">
            <title>Sunday Times (Perth, WA : 1902 - 1954)</title>
            <state>Western Australia</state>
            <issn>14429527</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/93</troveUrl>
            <startDate>1902-03-30</startDate>
            <endDate>1955-02-27</endDate>
        </newspaper>
        <newspaper id="1142">
            <title>Swan River Guardian (WA : 1836 - 1838)</title>
            <state>Western Australia</state>
            <issn>22057099</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1142</troveUrl>
            <startDate>1836-10-13</startDate>
            <endDate>1838-02-22</endDate>
        </newspaper>
        <newspaper id="1127">
            <title>Tambellup Times (WA : 1912 - 1924)</title>
            <state>Western Australia</state>
            <issn>22054170</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1127</troveUrl>
            <startDate>1912-10-12</startDate>
            <endDate>1924-08-09</endDate>
        </newspaper>

>>>>>>>>>>>>>>>>>>>>

        <newspaper id="1270">
            <title>The Albany Mail and King George's Sound Advertiser (WA : 1883 - 1889)</title>
            <state>Western Australia</state>
            <issn>22069089</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1270</troveUrl>
            <startDate>1883-01-01</startDate>
            <endDate>1889-08-28</endDate>
        </newspaper>
        <newspaper id="930">
            <title>The All British (Perth, WA : 1916)</title>
            <state>Western Australia</state>
            <issn>22046909</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/930</troveUrl>
            <startDate>1916-03-31</startDate>
            <endDate>1916-04-14</endDate>
        </newspaper>
        <newspaper id="1105">
            <title>The Australian (Perth, WA : 1907 - 1908)</title>
            <state>Western Australia</state>
            <issn>22053255</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1105</troveUrl>
            <startDate>1907-04-18</startDate>
            <endDate>1908-12-23</endDate>
        </newspaper>
        <newspaper id="1080">
            <title>The Australian (Perth, WA : 1917 - 1923)</title>
            <state>Western Australia</state>
            <issn>22051783</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1080</troveUrl>
            <startDate>1917-08-29</startDate>
            <endDate>1923-04-20</endDate>
        </newspaper>
        <newspaper id="1084">
            <title>The Avon Gazette and Kellerberrin News (WA : 1914 - 1916)</title>
            <state>Western Australia</state>
            <issn>22051953</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1084</troveUrl>
            <startDate>1914-07-10</startDate>
            <endDate>1915-12-25</endDate>
        </newspaper>
        <newspaper id="1085">
            <title>The Avon Gazette and York Times (WA : 1916 - 1930)</title>
            <state>Western Australia</state>
            <issn>22051996</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1085</troveUrl>
            <startDate>1916-01-15</startDate>
            <endDate>1930-08-01</endDate>
        </newspaper>
        <newspaper id="973">
            <title>The Beverley Times (WA : 1905 - 1977)</title>
            <state>Western Australia</state>
            <issn>22048537</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/973</troveUrl>
            <startDate>1905-07-22</startDate>
            <endDate>1977-08-11</endDate>
        </newspaper>
        <newspaper id="974">
            <title>The Black Range Courier and Sandstone Observer (WA : 1907 - 1915)</title>
            <state>Western Australia</state>
            <issn>22048707</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/974</troveUrl>
            <startDate>1907-01-05</startDate>
            <endDate>1915-10-27</endDate>
        </newspaper>
        <newspaper id="1079">
            <title>The Blackwood Times (Bunbury, WA : 1905 - 1920; 1945 - 1954)</title>
            <state>Western Australia</state>
            <issn>22051767</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1079</troveUrl>
            <startDate>1905-05-03</startDate>
            <endDate>1955-02-25</endDate>
        </newspaper>
        <newspaper id="1202">
            <title>The Broad Arrow Standard (WA : 1896 - 1899)</title>
            <state>Western Australia</state>
            <issn>22062432</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1202</troveUrl>
            <startDate>1896-08-26</startDate>
            <endDate>1899-02-04</endDate>
        </newspaper>
        <newspaper id="344">
            <title>The Bunbury Herald and Blackwood Express (WA : 1919 - 1929)</title>
            <state>Western Australia</state>
            <issn>22004203</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/344</troveUrl>
            <startDate>1919-08-16</startDate>
            <endDate>1929-12-20</endDate>
        </newspaper>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="1271">
            <title>The Collie Miner (WA : 1900 - 1916)</title>
            <state>Western Australia</state>
            <issn>22069143</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1271</troveUrl>
            <startDate>1900-06-02</startDate>
            <endDate>1916-10-28</endDate>
        </newspaper>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="275">
            <title>The Daily News (Perth, WA : 1882 - 1950)</title>
            <state>Western Australia</state>
            <issn>18398138</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/275</troveUrl>
            <startDate>1882-07-26</startDate>
            <endDate>1950-12-30</endDate>
        </newspaper>
        <newspaper id="1115">
            <title>The Daily Telegraph (Meekatharra, WA : 1918 - 1947)</title>
            <state>Western Australia</state>
            <issn>22053948</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1115</troveUrl>
            <startDate>1918-07-12</startDate>
            <endDate>1920-03-18</endDate>
        </newspaper>
        <newspaper id="934">
            <title>The Eastern Recorder (Kellerberrin, WA : 1914 - 1918)</title>
            <state>Western Australia</state>
            <issn>22047034</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/934</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1918-12-20</endDate>
        </newspaper>
        <newspaper id="1192">
            <title>The Echo (Fremantle, WA : 1905)</title>
            <state>Western Australia</state>
            <issn>2206219X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1192</troveUrl>
            <startDate>1905-08-19</startDate>
            <endDate>1905-09-30</endDate>
        </newspaper>
        <newspaper id="1193">
            <title>The Empire (Fremantle, WA : 1907 - 1908)</title>
            <state>Western Australia</state>
            <issn>22062211</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1193</troveUrl>
            <startDate>1907-05-18</startDate>
            <endDate>1908-09-05</endDate>
        </newspaper>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="975">
            <title>The Evening Star (Boulder, WA : 1898 - 1921)</title>
            <state>Western Australia</state>
            <issn>22048383</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/975</troveUrl>
            <startDate>1898-03-21</startDate>
            <endDate>1921-02-26</endDate>
        </newspaper>
        <newspaper id="1194">
            <title>The Fremantle Mail (WA : 1903 - 1904)</title>
            <state>Western Australia</state>
            <issn>22062238</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1194</troveUrl>
            <startDate>1903-09-16</startDate>
            <endDate>1904-04-02</endDate>
        </newspaper>
        <newspaper id="1197">
            <title>The Golden Gate (Fremantle, WA : 1911 - 1912)</title>
            <state>Western Australia</state>
            <issn>22062297</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1197</troveUrl>
            <startDate>1911-07-29</startDate>
            <endDate>1912-08-16</endDate>
        </newspaper>
        <newspaper id="1273">
            <title>The Goldfields Morning Chronicle (Coolgardie, WA : 1896 - 1898)</title>
            <state>Western Australia</state>
            <issn>22069186</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1273</troveUrl>
            <startDate>1896-07-06</startDate>
            <endDate>1898-10-27</endDate>
        </newspaper>
        <newspaper id="1203">
            <title>The Hannan's Herald (Kalgoorlie, WA : 1895 - 1896)</title>
            <state>Western Australia</state>
            <issn>22062416</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1203</troveUrl>
            <startDate>1895-09-16</startDate>
            <endDate>1896-09-26</endDate>
        </newspaper>
        <newspaper id="386">
            <title>The Herald (Fremantle, WA : 1867 - 1886)</title>
            <state>Western Australia</state>
            <issn>22008128</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/386</troveUrl>
            <startDate>1867-02-02</startDate>
            <endDate>1886-07-03</endDate>
        </newspaper>

<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="180">
            <title>The Inquirer and Commercial News (Perth, WA : 1855 - 1901)</title>
            <state>Western Australia</state>
            <issn>18389767</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/180</troveUrl>
            <startDate>1855-07-04</startDate>
            <endDate>1901-06-28</endDate>
        </newspaper>
        <newspaper id="928">
            <title>The Labor Vanguard (Perth, WA : 1911; 1916)</title>
            <state>Western Australia</state>
            <issn>22046860</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/928</troveUrl>
            <startDate>1911-08-12</startDate>
            <endDate>1916-08-17</endDate>
        </newspaper>
        <newspaper id="1088">
            <title>The Leonora Miner (WA : 1910 - 1928)</title>
            <state>Western Australia</state>
            <issn>22052267</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1088</troveUrl>
            <startDate>1910-03-19</startDate>
            <endDate>1928-11-03</endDate>
        </newspaper>
        <newspaper id="1275">
            <title>The Magnet Mirror and Murchison Reflector (Meekatharra, WA : 1928 - 1935)</title>
            <state>Western Australia</state>
            <issn>22069224</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1275</troveUrl>
            <startDate>1928-01-05</startDate>
            <endDate>1935-01-10</endDate>
        </newspaper>
        <newspaper id="1195">
            <title>The Mail (Fremantle, WA : 1904 - 1905)</title>
            <state>Western Australia</state>
            <issn>22062254</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1195</troveUrl>
            <startDate>1904-04-05</startDate>
            <endDate>1905-07-28</endDate>
        </newspaper>
        <newspaper id="1204">
            <title>The Malcolm Chronicle and Leonora Advertiser (WA : 1897 - 1905)</title>
            <state>Western Australia</state>
            <issn>22062394</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1204</troveUrl>
            <startDate>1897-12-03</startDate>
            <endDate>1905-04-21</endDate>
        </newspaper>
        <newspaper id="1276">
            <title>The Manganese Record, Peak Hill, Nullagine and Marble Bar Gazette (Meekatharra, WA : 1928 - 1941)</title>
            <state>Western Australia</state>
            <issn>22069240</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1276</troveUrl>
            <startDate>1928-09-22</startDate>
            <endDate>1941-07-11</endDate>
        </newspaper>

>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="1277">
            <title>The Menzies Miner (WA : 1895 - 1901)</title>
            <state>Western Australia</state>
            <issn>22069267</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1277</troveUrl>
            <startDate>1896-01-11</startDate>
            <endDate>1901-09-14</endDate>
        </newspaper>
        <newspaper id="1198">
            <title>The Messenger (Fremantle, WA : 1895)</title>
            <state>Western Australia</state>
            <issn>22062327</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1198</troveUrl>
            <startDate>1895-03-07</startDate>
            <endDate>1895-12-20</endDate>
        </newspaper>
        <newspaper id="816">
            <title>The Midlands Advertiser (Moora, WA : 1907 - 1930)</title>
            <state>Western Australia</state>
            <issn>22037306</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/816</troveUrl>
            <startDate>1907-09-27</startDate>
            <endDate>1930-03-21</endDate>
        </newspaper>
        <newspaper id="978">
            <title>The Moora Herald and Midland Districts Advocate (WA : 1914 - 1930)</title>
            <state>Western Australia</state>
            <issn>22048685</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/978</troveUrl>
            <startDate>1914-01-02</startDate>
            <endDate>1930-03-28</endDate>
        </newspaper>
        <newspaper id="1278">
            <title>The Mt. Leonora Miner (WA : 1899 - 1910)</title>
            <state>Western Australia</state>
            <issn>22069321</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1278</troveUrl>
            <startDate>1899-07-08</startDate>
            <endDate>1910-03-05</endDate>
        </newspaper>
        <newspaper id="1279">
            <title>The Murchison Times and Day Dawn Gazette (Cue, WA : 1894 - 1925)</title>
            <state>Western Australia</state>
            <issn>22069488</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1279</troveUrl>
            <startDate>1894-08-15</startDate>
            <endDate>1925-12-05</endDate>
        </newspaper>
        <newspaper id="845">
            <title>The Norseman Pioneer (WA : 1896 - 1897)</title>
            <state>Western Australia</state>
            <issn>22038396</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/845</troveUrl>
            <startDate>1896-04-25</startDate>
            <endDate>1897-12-18</endDate>
        </newspaper>
        <newspaper id="1083">
            <title>The Northam Advertiser (WA : 1895 - 1918; 1948 - 1954)</title>
            <state>Western Australia</state>
            <issn>22052151</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1083</troveUrl>
            <startDate>1895-06-01</startDate>
            <endDate>1955-05-27</endDate>
        </newspaper>
        <newspaper id="26">
            <title>The Perth Gazette and Independent Journal of Politics and News (WA : 1848 - 1864)</title>
            <state>Western Australia</state>
            <issn>18355811</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/26</troveUrl>
            <startDate>1848-01-01</startDate>
            <endDate>1864-09-30</endDate>
        </newspaper>
        <newspaper id="28">
            <title>The Perth Gazette and West Australian Times (WA : 1864 - 1874)</title>
            <state>Western Australia</state>
            <issn>18355846</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/28</troveUrl>
            <startDate>1864-10-07</startDate>
            <endDate>1874-06-26</endDate>
        </newspaper>
        <newspaper id="6">
            <title>The Perth Gazette and Western Australian Journal (WA : 1833 - 1847)</title>
            <state>Western Australia</state>
            <issn>18340938</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/6</troveUrl>
            <startDate>1833-01-05</startDate>
            <endDate>1847-12-25</endDate>
        </newspaper>


>>>>>>>>>>>>>>>>>>>>>>

        <newspaper id="737">
            <title>The Pilbarra Goldfield News (Marble Bar, WA : 1897 - 1923)</title>
            <state>Western Australia</state>
            <issn>22030174</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/737</troveUrl>
            <startDate>1897-02-19</startDate>
            <endDate>1923-03-20</endDate>
        </newspaper>
        <newspaper id="1089">
            <title>The Pingelly Leader (WA : 1906 - 1925)</title>
            <state>Western Australia</state>
            <issn>22052321</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1089</troveUrl>
            <startDate>1906-08-03</startDate>
            <endDate>1925-10-01</endDate>
        </newspaper>
        <newspaper id="1201">
            <title>The Possum (Fremantle, WA : 1890)</title>
            <state>Western Australia</state>
            <issn>22062599</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1201</troveUrl>
            <startDate>1890-10-21</startDate>
            <endDate>1890-12-06</endDate>
        </newspaper>
        <newspaper id="1199">
            <title>The Possum (Perth, WA : 1887 - 1888)</title>
            <state>Western Australia</state>
            <issn>22062521</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1199</troveUrl>
            <startDate>1887-07-30</startDate>
            <endDate>1888-01-28</endDate>
        </newspaper>
        <newspaper id="1125">
            <title>The Reformer (Perth, WA : 1906 - 1919)</title>
            <state>Western Australia</state>
            <issn>22053379</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1125</troveUrl>
            <startDate>1906-08-31</startDate>
            <endDate>1919-04-01</endDate>
        </newspaper>
        <newspaper id="739">
            <title>The South-Western News (Busselton, WA : 1903 - 1949)</title>
            <state>Western Australia</state>
            <issn>22030190</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/739</troveUrl>
            <startDate>1903-10-26</startDate>
            <endDate>1949-12-22</endDate>
        </newspaper>
        <newspaper id="979">
            <title>The Southern Argus and Wagin-Arthur Express (Perth, WA : 1905 - 1924)</title>
            <state>Western Australia</state>
            <issn>22048634</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/979</troveUrl>
            <startDate>1905-04-05</startDate>
            <endDate>1924-10-24</endDate>
        </newspaper>
        <newspaper id="980">
            <title>The Southern Cross Times (WA : 1900 - 1920)</title>
            <state>Western Australia</state>
            <issn>22048650</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/980</troveUrl>
            <startDate>1900-10-27</startDate>
            <endDate>1920-12-18</endDate>
        </newspaper>
        <newspaper id="1010">
            <title>The Southern Cross Times (WA : 1923 - 1940)</title>
            <state>Western Australia</state>
            <issn>2204955X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1010</troveUrl>
            <startDate>1923-06-30</startDate>
            <endDate>1940-08-03</endDate>
        </newspaper>
        <newspaper id="1087">
            <title>The Southern Districts Advocate (Katanning, WA : 1913 - 1936)</title>
            <state>Western Australia</state>
            <issn>22052208</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1087</troveUrl>
            <startDate>1913-10-25</startDate>
            <endDate>1936-08-31</endDate>
        </newspaper>
        <newspaper id="1091">
            <title>The Sun (Kalgoorlie, WA : 1898 - 1919)</title>
            <state>Western Australia</state>
            <issn>22052526</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1091</troveUrl>
            <startDate>1898-10-16</startDate>
            <endDate>1919-06-29</endDate>
        </newspaper>
        <newspaper id="255">
            <title>The Sunday Mirror (Perth, WA : 1920 - 1921)</title>
            <state>Western Australia</state>
            <issn>18396313</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/255</troveUrl>
            <startDate>1920-06-27</startDate>
            <endDate>1921-04-10</endDate>
        </newspaper>
        <newspaper id="981">
            <title>The Swan Express (Midland Junction, WA : 1900 - 1954)</title>
            <state>Western Australia</state>
            <issn>22048596</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/981</troveUrl>
            <startDate>1900-12-01</startDate>
            <endDate>1954-12-22</endDate>
        </newspaper>
        <newspaper id="1200">
            <title>The W.A. Bulletin (Fremantle, WA : 1888 - 1890)</title>
            <state>Western Australia</state>
            <issn>22062548</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1200</troveUrl>
            <startDate>1888-02-04</startDate>
            <endDate>1890-08-02</endDate>
        </newspaper>
        <newspaper id="1086">
            <title>The W.A. Record (Perth, WA : 1888 - 1922)</title>
            <state>Western Australia</state>
            <issn>22051880</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1086</troveUrl>
            <startDate>1888-07-19</startDate>
            <endDate>1922-04-01</endDate>
        </newspaper>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        <newspaper id="30">
            <title>The West Australian (Perth, WA : 1879 - 1954)</title>
            <state>Western Australia</state>
            <issn>03126323</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/30</troveUrl>
            <startDate>1879-11-18</startDate>
            <endDate>1954-12-31</endDate>
        </newspaper>
        <newspaper id="27">
            <title>The West Australian Times (Perth, WA : 1863 - 1864)</title>
            <state>Western Australia</state>
            <issn>1835582X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/27</troveUrl>
            <startDate>1863-10-01</startDate>
            <endDate>1864-09-29</endDate>
        </newspaper>
        <newspaper id="29">
            <title>The Western Australian Times (Perth, WA : 1874 - 1879)</title>
            <state>Western Australia</state>
            <issn>18355838</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/29</troveUrl>
            <startDate>1874-07-03</startDate>
            <endDate>1879-11-14</endDate>
        </newspaper>
        <newspaper id="1130">
            <title>The Westonian (WA : 1915 - 1920)</title>
            <state>Western Australia</state>
            <issn>22053700</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1130</troveUrl>
            <startDate>1915-04-24</startDate>
            <endDate>1920-12-24</endDate>
        </newspaper>
        <newspaper id="1280">
            <title>The Yalgoo Observer and Murchison Chronicle (Meekatharra, WA : 1923 - 1941)</title>
            <state>Western Australia</state>
            <issn>22069348</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1280</troveUrl>
            <startDate>1923-06-07</startDate>
            <endDate>1941-07-11</endDate>
        </newspaper>
        <newspaper id="740">
            <title>Toodyay Herald (WA : 1912 - 1954)</title>
            <state>Western Australia</state>
            <issn>22029001</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/740</troveUrl>
            <startDate>1912-03-16</startDate>
            <endDate>1954-05-27</endDate>
        </newspaper>
        <newspaper id="982">
            <title>Truth (Perth, WA : 1903 - 1931)</title>
            <state>Western Australia</state>
            <issn>22048553</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/982</troveUrl>
            <startDate>1903-07-25</startDate>
            <endDate>1931-03-29</endDate>
        </newspaper>
        <newspaper id="1128">
            <title>Victorian Express (Geraldton, WA : 1878 - 1894)</title>
            <state>Western Australia</state>
            <issn>22053298</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1128</troveUrl>
            <startDate>1878-09-18</startDate>
            <endDate>1894-10-26</endDate>
        </newspaper>
        <newspaper id="1129">
            <title>WA Sportsman (Perth, WA : 1914 - 1918)</title>
            <state>Western Australia</state>
            <issn>22053433</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1129</troveUrl>
            <startDate>1914-05-29</startDate>
            <endDate>1918-09-06</endDate>
        </newspaper>
        <newspaper id="98">
            <title>West Australian Sunday Times (Perth, WA : 1897 - 1902)</title>
            <state>Western Australia</state>
            <issn>18373771</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/98</troveUrl>
            <startDate>1897-12-19</startDate>
            <endDate>1902-03-23</endDate>
        </newspaper>
        <newspaper id="99">
            <title>Western Argus (Kalgoorlie, WA : 1894 - 1896)</title>
            <state>Western Australia</state>
            <issn>18373496</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/99</troveUrl>
            <startDate>1894-11-24</startDate>
            <endDate>1895-12-19</endDate>
        </newspaper>
        <newspaper id="100">
            <title>Western Argus (Kalgoorlie, WA : 1916 - 1938)</title>
            <state>Western Australia</state>
            <issn>1837347X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/100</troveUrl>
            <startDate>1916-12-05</startDate>
            <endDate>1938-06-28</endDate>
        </newspaper>
        <newspaper id="101">
            <title>Western Mail (Perth, WA : 1885 - 1954)</title>
            <state>Western Australia</state>
            <issn>18373763</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/101</troveUrl>
            <startDate>1885-12-19</startDate>
            <endDate>1956-12-20</endDate>
        </newspaper>
        <newspaper id="1205">
            <title>Westralian Clarion (Kalgoorlie, WA : 1903)</title>
            <state>Western Australia</state>
            <issn>22062378</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1205</troveUrl>
            <startDate>1903-10-27</startDate>
            <endDate>1903-11-24</endDate>
        </newspaper>
        <newspaper id="741">
            <title>Westralian Worker (Perth, WA : 1900 - 1951)</title>
            <state>Western Australia</state>
            <issn>22030212</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/741</troveUrl>
            <startDate>1900-09-07</startDate>
            <endDate>1951-06-22</endDate>
        </newspaper>
        <newspaper id="820">
            <title>Wickepin Argus (WA : 1910 - 1934)</title>
            <state>Western Australia</state>
            <issn>2203-7268</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/820</troveUrl>
            <startDate>1910-11-26</startDate>
            <endDate>1934-12-20</endDate>
        </newspaper>
        <newspaper id="1009">
            <title>Yilgarn Merredin Times (Southern Cross, WA : 1921 - 1923)</title>
            <state>Western Australia</state>
            <issn>22049509</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1009</troveUrl>
            <startDate>1921-01-08</startDate>
            <endDate>1923-06-23</endDate>
        </newspaper>
        <newspaper id="1131">
            <title>York Advocate (WA : 1915)</title>
            <state>Western Australia</state>
            <issn>2205331X</issn>
            <troveUrl>http://trove.nla.gov.au/ndp/del/title/1131</troveUrl>
            <startDate>1915-10-02</startDate>
            <endDate>1915-11-06</endDate>
        </newspaper>
    </records>
</response>

Examples
Click on any of the examples below to open them in this console. If you want to use them in your own code you'll need to get an API key and add '&key=[Your API key]' to the url.

See the Trove API documentation for a full list of available parameters and detailed information on constructing queries.

Search everything
Search newspapers
Search other zones
Get record
List/get newspaper titles
List/get Trove contributors
Search everything
Parameters	url
zone: all
q (query): wragge
encoding: xml (default)
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge&zone=all
zone: all
q (query): wragge
encoding: json
n (number of results): 50
http://api.trove.nla.gov.au/result?q=wragge&zone=all&encoding=json&n=50
zone: all
q (query): nuc:ANL (contributor id)
encoding: json
n (number of results): 50
http://api.trove.nla.gov.au/result?q=nuc:ANL&zone=all&encoding=json
zone: all
q (query): wragge
encoding: json
n (number of results): 20 (default)
l-australian: y (in Australia or by Australians)
l-availability: y/f (freely accessible online)
http://api.trove.nla.gov.au/result?q=wragge&zone=all&encoding=json&l-australia=y&l-availability=y/f
Search newspapers
Parameters	url
zone: newspaper
q (query): wragge AND weather
encoding: json
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge+AND+weather&zone=newspaper&encoding=json
zone: newspaper
q (query): wragge AND weather
encoding: json
l-year: 1903
l-category: Article
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=newspaper&encoding=json&l-year=1903
zone: newspaper
q (query): wragge AND weather
encoding: json
l-decade: 190
facet: year
n (number of results): 0
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=newspaper&encoding=json&l-decade=190&facet=year&n=0
Search other zones
Parameters	url
zone: book,picture
q (query): wragge AND weather
encoding: json
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=wragge AND weather&zone=book,picture&encoding=json
zone: book
q (query): weather
encoding: json
l-format: Thesis
n (number of results): 20 (default)
http://api.trove.nla.gov.au/result?q=weather&zone=book&encoding=json&l-format=Thesis
zone: book
q (query): weather
encoding: json
facet: format
n (number of results): 0
http://api.trove.nla.gov.au/result?q=weather&zone=book&encoding=json&facet=format&n=0
zone: list
q (query): war memorials
encoding: json
http://api.trove.nla.gov.au/result?q=war memorials&zone=list&encoding=json
Get record
Parameters	url
type: newspaper
article id: 41697877
reclevel: full
encoding: json
http://api.trove.nla.gov.au/newspaper/41697877?encoding=json&reclevel=full
type: newspaper
article id: 146871507
reclevel: full
include: articletext
http://api.trove.nla.gov.au/newspaper/41697877?reclevel=full&include=articletext
type: work
article id: 36904481
reclevel: full
encoding: json
http://api.trove.nla.gov.au/work/36904481?encoding=json&reclevel=full
type: work
article id: 34769014
reclevel: full
include: workVersions,holdings
encoding: json
http://api.trove.nla.gov.au/work/34769014?encoding=json&include=workVersions,holdings&reclevel=full
type: list
list id: 1442
reclevel: full
include: listItems
encoding: json
http://api.trove.nla.gov.au/list/1442?encoding=json&reclevel=full&include=listItems
List/get newspaper titles
Parameters	url
state: vic
http://api.trove.nla.gov.au/newspaper/titles?state=vic
title id: 35
encoding: json
http://api.trove.nla.gov.au/newspaper/title/35?encoding=json
title id: 35
include: years
encoding: json
http://api.trove.nla.gov.au/newspaper/title/35?encoding=json&include=years
List/get Trove contributors
Parameters	url
encoding: json
http://api.trove.nla.gov.au/contributor?encoding=json
NUC identifier: ANL
reclevel: full
encoding: json
http://api.trove.nla.gov.au/contributor/ANL?encoding=json&reclevel=full
Created by Tim Sherratt (@wragge).
