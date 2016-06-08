"use strict";

var text = {};

text.sentences = ["Well, I watch the shows, I mean, I really see a lot of great, you know, I watch your show, and all the other shows, and you have the generals, and you have certain people that are great.", "My whole life is about winning, I don't lose often, I almost never lose.", "She had a pen in her hand, which Secret Service is not liking because they don’t know what it is, whether it’s a little bomb.", "What do I know about it? All I know is what's on the internet.", "He referred to my hands, if they're small, something else must be small.", "I've said if Ivanka weren't my daughter, perhaps I'd be dating her.", "The beauty of me is that I'm very rich.", "I’m speaking with myself, number one, because I have a very good brain and I’ve said a lot of things.", "My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.", "I know words, I have the best words.", "You know, it really doesn’t matter what the media write as long as you’ve got a young, and beautiful, piece of ass.", "I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively.", "It’s freezing and snowing in New York – we need global warming!", "I don't bring God into that picture....When I go to church and when I drink my little wine and have my little cracker, I guess that is a form of forgiveness.", "Beautiful, famous, successful, married – I’ve had them all, secretly, the world’s biggest names, but unlike Geraldo I don’t talk about it.", "We’re losing a lot of people because of the Internet, we have to see Bill Gates and a lot of different people who really understand what’s happening and maybe, in some ways, closing that Internet up in some ways.", "I beat China all the time.", "A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.", "The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.", "People are tired of these nice people.", "How come every time I show anger, disgust or impatience, enemies say I had a tantrum or meltdown—stupid or dishonest people?", "Sorry losers and haters, but my IQ is one of the highest—and you all know it!", "I never fall for scams. I am the only person who immediately walked out of my ‘Ali G’ interview.", "I promise not to talk about your massive plastic surgeries that didn’t work.", "A person who is flat chested is very hard to be a 10, ok?"];

text.paragraphs = ["I get up, take a shower and wash my hair. Then I read the newspapers and watch the news on television, and slowly the hair dries. It takes about an hour. I don’t use the blow dryer. Once it’s dry I comb it. Once I have it the way I like it—even though nobody else likes it—I spray it and it’s good for the day.", "I’m telling you, I used to use the word incompetent. Now I just call them stupid. I went to an Ivy League school. I’m very highly educated. I know words, I have the best words...but there is no better word than stupid. Right?", "Look, We can bring the American Dream back. That I will tell you. We're bringing it back. Okay? And I understand what you're saying. And I get that from so many people. 'Is The American Dream dead?' They are asking me the question, 'Is the American Dream dead?' And the American Dream is in trouble. That I can tell you. Okay? It's in trouble. But we're going to get it back and do some real jobs. How about the man with that beautiful red hat? Stand up! Stand up! What a hat!", "I get sued all the time, okay. I run a big business. You know I've always said it's very, very hard for a person who is very successful. I have done so many deals. Almost all of them have been tremendously successful. You'll see that when I file my statements. I mean you will see; you will be very proud of me, okay.", "And did you notice that baby was crying through half of the speech and I didn’t get angry? Not once. Did you notice that? That baby was driving me crazy. I didn’t get angry once because I didn’t want to insult the parents for not taking the kid out of the room!", "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert. If you saw the Miss Universe girls you would reconsider!"];
'use strict';

$(document).ready(function () {

	// DESKTOP

	// SLIDER SELECT
	$('.numberSlider').ionRangeSlider({
		min: 1,
		max: 6,
		from: 1
	});

	// SET VARIABLE FOR SLIDER NUMBER
	var sliderNumber;

	$('.numberSlider').on('change', function () {
		sliderNumber = this.value;
		console.log(this.value);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION

	$('[name="selection"]').on('click', function () {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < sliderNumber; i++) {
			var arraySelection = Math.floor(Math.random() * textArray.length + 1);
			var resultsToPage = textArray[arraySelection];
			console.log(resultsToPage);
			// $(".ipsumTextOutput").text(resultsToPage);
			$(".ipsumOutput").append('<p>' + resultsToPage + '</p>');
		}
		// DISPLAY ON PAGE
	});

	// MOBILE

	// SET VARIABLE FOR INPUT NUMBER
	var numberSelect;

	// PLUS/MINUS SELECT
	//FIND USER'S LENGTH SELECTION
	$('.plus, .minus').on('click', function () {

		// ASSIGN VALUE TO INPUT NUMBER VARIABLE
		numberSelect = parseInt($('#numberSelect').val());

		// MAKE SURE VALUE ENTERED IS A NUMBER, IF NOT CHANGE TO 1
		if (isNaN(numberSelect)) {
			numberSelect = 1;
		}

		// INCREMENT NUMBER BASED ON ITS DATASET
		numberSelect += parseInt($(this).data('increment'));

		// IF THE NEXT NUMBER IS LESS THAN 1 OR GREATER THAN 6, STOP THE FUNCTION FROM RUNNING
		if (numberSelect < 1 || numberSelect > 6) {
			return; // STOP THE FUNCTION FROM RUNNING
		}

		$('#numberSelect').val(numberSelect);
		console.log(numberSelect);
	});

	//FIND USER'S SENTENCE/PARAGRAPH SELECTION

	// var resultsToPost;

	$('[name="selection"]').on('click', function () {
		var textArray = text[this.value];
		// CHOOSE RANDOM NUMBERED ITEM FROM ARRAY

		for (var i = 0; i < numberSelect; i++) {
			var arraySelection = Math.floor(Math.random() * textArray.length + 1);
			var resultsToPost = textArray[arraySelection];
			// DISPLAY ON PAGE
			// $(".ipsumOutput").append(`<p>${resultsToPost}</p>`);
			// console.log(resultsToPost);	
		}
	});

	//DISPLAY WORDS ON PAGE
});