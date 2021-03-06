
$(function(){

    // YOU MUST EDIT THIS SECTION
    // You must supply a Trove API key
    var troveAPIKey = '9qnf10ej9pjv9mcs';
    // Either provide full API query here or include options below
    var apiQuery = 'Wyndham HallsCreek Kimberley Broome FitzroyCrossing Derby Kalumburu DrysdaleRiverMission WyndhamPolice Dispersed';
    // Words you want to search for -- separate multiple values with spaces, eg:
    // var keywords = 'weather wragge';
    var keywords = 'Meatworks Station Spearing Shooting LonelyGrave Rosewood Argyle Lissadell Carlton Goldrush ODonnell Pompey Stockdale CarrBoyd Ricketson McIlree Ashton Mulcahy';
    // How you want to combine keywords -- all, any, or phrase
    var keywordType = 'all'
    // Newspaper id numbers -- separate multiple values with spaces, eg:
    // var titles = '840 35';
    var titles = '80 25 9 36 111 47 63 118';
    // Add a byline, eg:
    var byline = 'Created by <a href="https://timsherratt.org">Tim Sherratt</a> and modified by DV_BoAB (Andrew Barker - Volunteer & President for :^) for the Kununurra Museum run by the Kununurra Historical Society. Also check out all of the web presence that I have created for KHS from the main website <a href="http://www.kununurra.org.au">http://www.kununurra.org.au</a>.'
    // var byline = '';
    // Add a tagline
    var tagline = 'How well do you know your Australian history? Try some Kimberley History Roulette!' 'The Kununurra Museum (is F***ing Awesome! :^)' 'In Researching Kimberley History, Dont speculate!, Investigate!'' ;
    // Leave this alone unless you're publishing on a non-https server
    var useHttps = 'true';

    // YOU CAN ALSO EDIT THESE MESSAGES IF YOU WANT TO
    // These are the hints you get after each guess
    // gt100 means the guess was greater than the target year + 100 years etc
    var messages = {};
    messages['gt100'] = "Doh!... really... that's your guess? It's much much earlier!";
    messages['gt50'] = "You Wallaby Brain, you're way off. It's a lot earlier.";
    messages['gt10'] = "Getting close, like measuring with a greenhide rope on a wet day - Maggie Lilly Oral History about the Miles from Wyndham, but it's still quite a bit earlier.";
    messages['gt1'] = "Almost! Try a bit earlier.";
    messages['lt100'] = "Doh, get Real! It's much much later.";
    messages['lt50'] = "You can do better than that. It's a lot later.";
    messages['lt10'] = "Close-ish, but it's still quite a bit later.";
    messages['lt1'] = "Oh dear! So close! Try just a bit later.";

    // These are the messages you get if you guess correctly
    // The numbers 1-10 represent to number of guesses taken
    var success_messages = [];
    success_messages[1] = 'What Now! How did you... are you cheating?';
    success_messages[2] = 'Ooh Look Out now, the force is strong with this one...';
    success_messages[3] = 'We salute you and your profound temporal knowledge!';
    success_messages[4] = 'Excellent work!';
    success_messages[5] = "Alright! But NOT that flash kid...";
    success_messages[6] = 'A good solid effort. Some room for improvement.';
    success_messages[7] = 'Not bad. Needs to pay more attention in class.';
    success_messages[8] = 'You had us worried, but you got there in the end.';
    success_messages[9] = 'Living dangerously, like a true Kimberley Gold-Rusher huh? You only just made it.';
    success_messages[10] = 'Eeek! A last gasp victory! Eureka - You made it to the gold!';

    // YOU DON'T REALLY NEED TO EDIT ANYTHING ELSE

    var total = 0;

    function clean_query() {
        var query;
        if (useHttps === 'false') {
            query = 'http://api.trove.nla.gov.au/result?zone=newspaper&l-category=Article&encoding=json'
        } else {
            query = 'https://trove-proxy.herokuapp.com/api/result?zone=newspaper&l-category=Article&encoding=json'
        }
        if (apiQuery !== "") {
            query = apiQuery.replace(/&n=\d+/, "").replace(/&s=\d+/, "").replace(/&key=[a-z0-9]+/, "").replace(/&encoding=xml/, "&encoding=xml")
        } else {
            if (keywords !== '') {
                words = keywords.split(' ');
                console.log(words);
                if (keywordType == 'any') {
                    q = words.join('+OR+');
                } else if (keywordType == 'phrase') {
                    q = '"' + words.join('+') + '"';
                } else {
                    q = words.join('+AND+');
                }
            } else {
                q = '%20';
            }
            query += '&q=' + q;
            if (titles !== '') {
                $.each(titles.split(' '), function(index, title) {
                    query += '&l-title=' + title;
                });
            }
        }
        return query
    }
    function get_article_query() {
        var number = Math.floor(Math.random() * total);
        var query = clean_query()
        query = query + "&n=1&s=" + number + "&key=" + troveAPIKey;
        return query;
    }
    function get_random_article() {
        $("#headline").text('Choosing a random article...');
        $("#article").showLoading();
        var query;
        if (total === 0) {
            query = clean_query()
            query = query + "&n=0&key=" + troveAPIKey;
            get_api_result(query, 'total');
        } else {
            query = get_article_query();
            get_api_result(query, 'article');
        }
    }
    function get_api_result(query, type) {
        $.ajax({
            "dataType": "jsonp",
            "url": query,
            "success": function(results) {
                process_results(results, type);
            },
            error: function(xmlReq, txtStatus, errThrown){
                $('#status').text(xmlReq.responseText);
            }
        });
    }
    function process_results(results, type) {
        if (type == 'total') {
            total = results.response.zone[0].records.total;
            console.log(total);
            query = get_article_query();
            get_api_result(query, 'article');
        } else if (type == 'article') {
            var article = results.response.zone[0].records.article[0];
            display_article(article);
        }
    }
    function display_article(article) {
        var date = $.format.date(article.date + ' 00:00:00.000', 'd MMMM yyyy');
        var year = article.date.substr(0,4);
        $('#headline').html(mask_year(article.heading, year));
        $('#summary').html(mask_year(article.snippet, year));
        if (article.title.value.indexOf('(')) {
            newspaper = article.title.value.substr(0, article.title.value.indexOf('(') - 1);
        } else {
            newspaper = article.title.value;
        }
        $('#paper').html(newspaper);
        $('#summary, #paper, #count').show();
        $('#date').text(date);
        $('#article-link').html('<a class="btn btn-mini btn-primary" href="' + article.troveUrl + '">Read article</a>');
        $('#year').data('year', year);
        $("#article").hideLoading();
        $("#year").focus();
        console.log(year)
    }
    function mask_year(text, year) {
        text = text.replace(year, '****');
        return text;
    }
    function guess() {
        var guess = $("#year").val();
        var guesses = $("#guesses").data("guesses") + 1;
        if (guess == $("#year").data('year')) {
            correct(guesses);
        } else {
            if (guesses < 10) {
                give_message(guess, guesses);
                $("#guesses").data("guesses", guesses);
                $("#guesses").text(10 - guesses);
                if (guesses == 4) {
                    $("#text-guesses").removeClass('status-ok').addClass('status-warning');
                    $("#count").removeClass('border-ok').addClass('border-warning');
                } else if (guesses == 7) {
                    $("#text-guesses").removeClass('status-warning').addClass('status-danger');
                    $("#count").removeClass('border-warning').addClass('border-danger');
                }
                if (guesses == 9) {
                    $("#text-guesses").text('guess left');
                }
                $("#year").focus();
            } else {
                $("#text-guesses").text('guesses left');
                fail();
            }

        }
    }
    function correct(guesses) {
        $("#status").html("<b>That's it!</b><br>" + success_messages[guesses]).removeClass().addClass('alert alert-success');
        $("#pub_details").show();
    }
    function give_message(guess, guesses) {
        var year = $("#year").data('year');
        var difference = parseInt(guess, 10) - year;
        var message;
        if (difference >= 100) {
            message = messages['gt100'];
            $("#status").removeClass().addClass('alert alert-danger').text(message);
        } else if (difference < 100 && difference >= 50) {
            message = messages['gt50'];
            $("#status").removeClass().addClass('alert alert-warning').text(message);
        } else if (difference < 50 && difference >= 10) {
            message = messages['gt10'];
            $("#status").removeClass().addClass('alert alert-info').text(message);
        } else if (difference < 10 && difference >= 1) {
            message = messages['gt1'];
            $("#status").removeClass().addClass('alert alert-success').text(message);
        } else if (difference <= -100) {
            message = messages['lt100'];
            $("#status").removeClass().addClass('alert alert-danger').text(message);
        } else if (difference > -100 && difference <= -50) {
            message = messages['lt50'];
            $("#status").removeClass().addClass('alert alert-warning').text(message);
        } else if (difference > -50 && difference <= -10) {
            message = messages['lt10'];
            $("#status").removeClass().addClass('alert alert-info').text(message);
        } else if (difference > -10 && difference <= -1) {
            message = messages['lt1'];
            $("#status").removeClass().addClass('alert alert-success').text(message);
        }

    }
    function fail() {
        $("#guesses").text(0);
        $("#status").removeClass().addClass('alert alert-danger').text("Ooops! Follow the link to read the article, or hit reload to try again.");
        $("#pub_details").show();
    }
    function reset() {
        $("#year").val("");
        $("#headline").text('Choosing a random article...');
        $("#guesses").data("guesses", 0).text(10);
        $("#text-guesses").removeClass('status-warning status-danger').addClass('status-ok');
        $("#count").removeClass('border-warning border-danger').addClass('border-ok');
        $("#summary").empty();
        $("#paper").empty();
        $("#pub_details").hide();
        $("#status").empty().removeClass();
        get_random_article();
    }
    $('#year').keydown(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            guess();
        }
    });
    $("#guess-button").button().click(function() { guess(); });
    $("#reload-button").button().click(function() { reset(); });
    $("#guesses").data("guesses", 0);
    $("#pub_details").hide();
    $('#tagline').html(tagline);
    $('#byline').html(byline);
    get_random_article();
});
