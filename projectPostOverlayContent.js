export var projectOverlayContent = [React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Modeling the Propagation of True/Fake News on Twitter"
    ),
    React.createElement(
        "h2",
        null,
        "TL;DR"
    ),
    React.createElement(
        "p",
        null,
        "It\u2019s a research project that investigates how fake news spreads through Twitter and how its propagation may fare against that of true news. It starts a recursive algorithm on a true or fake news Tweet, goes through its replies to check for keywords, and recurses the algorithm on matching replies. The spread is quantified as such."
    ),
    React.createElement(
        "h2",
        null,
        "Important Links"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Presentation Poster (detailed overview of work): ",
            React.createElement(
                "a",
                { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing" },
                "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"
            )
        ),
        React.createElement(
            "li",
            null,
            "Research Plan: ",
            React.createElement(
                "a",
                { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing" },
                "https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing"
            )
        ),
        React.createElement(
            "li",
            null,
            "Github repository: ",
            React.createElement(
                "a",
                { target: "_blank", rel: "noopener noreferrer", href: "https://github.com/arjnai21/TwitterDataCollection" },
                "https://github.com/arjnai21/TwitterDataCollection"
            )
        )
    ),
    React.createElement(
        "h2",
        null,
        "Table of Contents"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Situational Context: Research Program"
        ),
        React.createElement(
            "li",
            null,
            "Objectives"
        ),
        React.createElement(
            "li",
            null,
            "General Algorithm"
        ),
        React.createElement(
            "li",
            null,
            "Implementation: Data Structure"
        ),
        React.createElement(
            "li",
            null,
            "Implementation: Algorithm"
        ),
        React.createElement(
            "li",
            null,
            "Analysis and Interpretation of Acquired Data"
        ),
        React.createElement(
            "li",
            null,
            "Results"
        ),
        React.createElement(
            "li",
            null,
            "Conclusions"
        ),
        React.createElement(
            "li",
            null,
            "Future Work"
        )
    ),
    React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/ExampleGraph.png", style: { float: "right", width: "50em", verticalAlign: "middle", margin: "1em" } }),
    React.createElement(
        "h2",
        null,
        "Situational Context: Research Program"
    ),
    React.createElement(
        "p",
        null,
        "This was a research project that I did with a friend named ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://github.com/arjnai21" },
            "Arjun"
        ),
        " (https://github.com/arjnai21) in our sophomore year in high school. Our high school has a rather robust research program. We can find a topic and begin research under a teacher to be known as a \u201Cmentor\u201D by selecting one out of a pool of certain research teachers. Having a mentor is necessary to participate in research competitions. Then, once we have a mentor and a research plan, we can enter our research into research competitions. Our high school is well known for winning research competitions, so at the lowest level of research competitions, there is the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://researchexpo.bergen.org/index.html" },
            "BCA Research Expo"
        ),
        " (https://researchexpo.bergen.org/index.html). The BCA Research Expo\u2019s purpose is for students to share what they researched to the community, get judged and critiqued by professionals in the industry, and select the finalists who will compete in ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://www.societyforscience.org/isef/" },
            "ISEF"
        ),
        " (Regeneron International Science and Engineering Fair) (https://www.societyforscience.org/isef/). This is a complex process, so we wanted to learn the ropes and see how the research program works so that in a future research project, we\u2019ll know what we are doing and how to win."
    ),
    React.createElement(
        "p",
        null,
        "This was a difficult venture into the research program because our mentor, to be frank, ironically was not very knowledgeable about the research program. However, we couldn\u2019t select a different mentor. Each mentor teacher is specialized in a specific category, and our mentor was the only teacher appropriate for our research category. As a result, we learned how the research program worked in a very rough way."
    ),
    React.createElement(
        "p",
        null,
        "We were stuck in a dilemma where we had to figure out how the research program and competition work by ourselves. We ended up asking another research teacher many questions. Because neither of us nor our mentor understood how the research program and competition worked, we ended up entering the competition extremely prematurely. Somehow, we were led to believe that we had to enter the competition each year. Unaware that the competition should only be entered after at least a year of research, this would become a constant, stressful rush to meet deadlines until the end. We would be researching as we make each benchmark for registration of the competition."
    ),
    React.createElement(
        "p",
        null,
        "We first made an ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing" },
            "ISEF Research Plan"
        ),
        " (https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing). This was necessary for registration. As you can tell, we were very optimistic about the amount of work we would be able to get done. We would not be able to have enough time to achieve much of our goals. However, I do hope to continue this project into fruition in the future."
    ),
    React.createElement(
        "p",
        null,
        "At the competition, we had to have abstracts ready to give out to anyone. This is our final ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/document/d/1AGx6HuaYF52fA6x6T9c-rQ-5NCT_JgDKDogp4jsV9IE/edit?usp=sharing" },
            "abstract"
        ),
        " (https://docs.google.com/document/d/1AGx6HuaYF52fA6x6T9c-rQ-5NCT_JgDKDogp4jsV9IE/edit?usp=sharing). Finally, we needed a ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing" },
            "poster"
        ),
        " for our booth at the competition (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing). The content of the poster contains the main points of our presentation (12-15 min) in front of the judges. Although the project was massively rushed to meet deadlines, we won the BCA Mathematics Award (MATH) as you can see in the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://researchexpo.bergen.org/winners.html" },
            "results"
        ),
        " (https://researchexpo.bergen.org/winners.html)."
    ),
    React.createElement(
        "h2",
        null,
        "Objectives"
    ),
    React.createElement(
        "p",
        null,
        "To investigate the impact of fake news in online society, we set out to answer these questions."
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "What is the average number of people reached and/or influenced by fake news from a single source?"
        ),
        React.createElement(
            "li",
            null,
            "What is the rate at which fake news travels between people?"
        ),
        React.createElement(
            "li",
            null,
            "Does fake news spread faster and/or farther than true news?"
        ),
        React.createElement(
            "li",
            null,
            "To what extent is fake news passed on to others indirectly from a secondary source?"
        )
    ),
    React.createElement(
        "p",
        null,
        "The questions would be answered using the results of our algorithm."
    ),
    React.createElement(
        "h2",
        null,
        "General Algorithm"
    ),
    React.createElement(
        "p",
        null,
        "The algorithm begins on a Tweet that we determined to be true or fake news. We verified this using the fact checker Snopes. Before running the algorithm, we must determine a set of keywords relating to the true/fake news Tweet. If a recent Tweet of a user contains at least one of these keywords, that user will be considered \u201Cinfluenced\u201D. One will have to define what a recent Tweet is based on their hardware limitations."
    ),
    React.createElement(
        "p",
        null,
        "At the most general level, the algorithm is as follows."
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Iterate through the repliers of the Tweet."
        ),
        React.createElement(
            "li",
            null,
            "Iterate through the recent Tweets of each replier."
        ),
        React.createElement(
            "li",
            null,
            "If any of the recent Tweets contain a keyword, begin step 1 on that Tweet."
        )
    ),
    React.createElement(
        "h2",
        null,
        "Implementation: Data Structure"
    ),
    React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/ExampleGraph.png", style: { float: "right", width: "40em", verticalAlign: "middle", margin: "1em" } }),
    React.createElement(
        "p",
        null,
        "A Twitter user is represented as a \u201CNode\u201D. A Node is an object with the following properties:"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "\u201Cinfluenced\u201D - a boolean that signifies whether the user has made a Tweet with a keyword or not"
        ),
        React.createElement(
            "li",
            null,
            "\u201Clink\u201D - a string that identifies which user the Node is referring to by recording the link to the user\u2019s profile"
        ),
        React.createElement(
            "li",
            null,
            "\u201Cchildren\u201D - an array of Nodes with all repliers to the user\u2019s Tweets"
        )
    ),
    React.createElement(
        "p",
        null,
        "Effectively, this creates a directed graph of users, with the exception of the source Node (which represents a Tweet)."
    ),
    React.createElement(
        "p",
        null,
        "The image is from the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing" },
            "poster"
        ),
        " (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing) mentioned above. This is an example of what the graph may look like. In our analysis, we define the spread rate as the ratio of the number of influenced children over all children."
    ),
    React.createElement(
        "h2",
        null,
        "Implementation: Algorithm"
    ),
    React.createElement(
        "p",
        null,
        "Due to extreme time constraints, our implementation of the algorithm is rather limited. Nonetheless, we were still able to procure interesting results."
    ),
    React.createElement(
        "p",
        null,
        "We could not use Twitter\u2019s API because there was not enough time to get approved. Therefore, we made a Chrome Extension to scrape the web pages and obtain the information that we needed."
    ),
    React.createElement(
        "p",
        null,
        "The algorithm is as follows:"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "For each replier of the Tweet, initialize a new Node for the replier with its link."
        ),
        React.createElement(
            "li",
            null,
            "All of these newly created Nodes are appended to the Tweet\u2019s author\u2019s children array."
        ),
        React.createElement(
            "li",
            null,
            "For each replier of the Tweet, open a new tab to the replier\u2019s user profile."
        ),
        React.createElement(
            "li",
            null,
            "Iterate through the replier\u2019s recent Tweets."
        ),
        React.createElement(
            "li",
            null,
            "If any of the recent Tweets contains a keyword, mark the user as influenced and begin step 1 on that Tweet."
        )
    ),
    React.createElement(
        "p",
        null,
        "As one can imagine, this approach is very demanding on hardware since Chrome is already a bulky program. Due to limitations of hardware, we defined a user\u2019s recent Tweets as the 20 most recent Tweets made by the user. Also due to hardware limitations, we had to end the algorithm prematurely in cases where the graph got too large."
    ),
    React.createElement(
        "div",
        { style: { float: "right", margin: "1em" } },
        React.createElement(
            "div",
            null,
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig2.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 2: For each post, the number of nodes at each level were counted with a BFS algorithm. Many graphs that grew very large were prematurely terminated due to hardware limitations."
                )
            ),
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig3.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 3: The number of influenced nodes at each level that were counted with the same BFS algorithm."
                )
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig4.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 4: For each node, the influenced and uninfluenced children were counted. The calculated percentage was stored in an array. Finally, all of the percentages of a graph were averaged."
                )
            ),
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig5.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 5: The regression was calculated over the set of all counts of nodes at a level excluding outliers. The regression for true news was quadratic but without the linear term. The regression for fake news was linear. Both regressions had y-intercepts fixed at 1."
                )
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig6.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 6: The derivatives of the regressions as shown in Figure 5. Notice the intersection shortly before level 2."
                )
            ),
            React.createElement(
                "figure",
                { className: "twitterFigure" },
                React.createElement("img", { src: "src/img/Projects/TwitterDataCollection/Fig7.png", style: { width: "30em" } }),
                React.createElement(
                    "figcaption",
                    null,
                    "Figure 7: The ratio of all influenced nodes in a graph to the total number of nodes, influenced or not."
                )
            )
        )
    ),
    React.createElement(
        "h2",
        null,
        "Analysis and Interpretation of Acquired Data"
    ),
    React.createElement(
        "p",
        null,
        "Our data is represented as a directed, unweighted graph. This allows us to use a simple BFS to extract the following information:"
    ),
    React.createElement(
        "p",
        null,
        "Define a node\u2019s \u201Clevel\u201D to be the path length from the source Node to the given Node. We interpret an influenced user to have been exposed to the content of the source Node. This does not necessarily mean that the user believes the content. With our information, we have no way of verifying that."
    ),
    React.createElement(
        "h3",
        null,
        "Number of Nodes at each level"
    ),
    React.createElement(
        "p",
        null,
        "We interpreted this as the amount of people a node has reached at a certain degree of separation. As shown in the line graph, if one maps this value to its level, a general trend of concave up functions appear. It appears polynomial or exponential."
    ),
    React.createElement(
        "h3",
        null,
        "Average percent of influenced Nodes at a level"
    ),
    React.createElement(
        "p",
        null,
        "The percent of influenced Nodes at a level is defined by the ratio of the number of influenced nodes at a level divided by the number of nodes at the level. These percentages were averaged among all true news graphs and all fake news graphs respectively to compare the behavior of true and fake news. We interpreted this as the likelihood of news to spread at a certain degree of separation. Additionally, we interpreted it as the percentage of those who spread the news at the degree of separation."
    ),
    React.createElement(
        "h3",
        null,
        "Average percent of influenced children of each parent"
    ),
    React.createElement(
        "p",
        null,
        "This is the average spread rate that we briefly touched upon earlier. This is similar to the average percent of influence Nodes at a level. We interpret this value with a slightly different nuance; this tells us how efficiently news travels by word of mouth as you get further and further away from the source. In other words, how likely is someone to spread the news to somebody else?"
    ),
    React.createElement(
        "h3",
        null,
        "Percentage of influenced nodes over all Nodes in the graph"
    ),
    React.createElement(
        "p",
        null,
        "This is the ratio of the number of influenced Nodes divided by the number of all Nodes in the graph. We interpreted this as the \u201Cnet productivity\u201D of the source Node. In other words, how effective was the source in getting others to spread the news?"
    ),
    React.createElement(
        "h2",
        null,
        "Results"
    ),
    React.createElement(
        "p",
        null,
        "These results are directly from the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing" },
            "poster"
        ),
        " (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing)."
    ),
    React.createElement(
        "p",
        null,
        "In Figure 2, many of the graphs obtained, both fake and true, did not extend past the 1st level. In this case, repliers of the original source post were either influenced but were unable to spread the information or simply uninfluenced. For the graphs that did extend past the 1st level, the growth of nodes at a level for graphs of true topics varied less than the growth for fake topics. Notice the steep growth in nodes at a level of news source Fake 1 as compared to the more steady incline of news source Fake 4."
    ),
    React.createElement(
        "p",
        null,
        "In Figure 5, the regressions show that at first, the fastest growth in nodes at a level is from a fake news source, but just before level 4, the graphs of true news sources generally begin to increase faster. Thus, further down the levels, true news spreads to much more people. As seen in Figure 6, one can notice that at first, the rate at which fake news reaches more people increases the fastest. However, a little before level 2 the rate at which true news spreads grows faster than for fake news."
    ),
    React.createElement(
        "p",
        null,
        "Figure 4 shows the chance of success of one who has been influenced by the news to influence another. The majority of these \u201Cspread rates\u201D were between 10% and 25%. However, it is seen that one fake news source has a drastically high spread rate. Additionally, the lowest spread rate belongs to a true news source. Besides this, after excluding outliers, there aren\u2019t any apparent differences between the spread rates of true and fake news sources."
    ),
    React.createElement(
        "p",
        null,
        "Figure 3 shows the percent of people who would be influenced by the news at a certain degree of separation from the news source. Fake news is seemingly much more likely to influence others if shared from primary or secondary sources, but beyond these, people are less likely to be influenced. True news tends to influence the most people from secondary sources."
    ),
    React.createElement(
        "p",
        null,
        "Finally, Figure 7 can be interpreted as the \u201Cnet productivity\u201D of the original source. This is defined as the total percentage of all influenced nodes, regardless of level. However, besides the outlier, Figure 7 does not depict an apparent difference between fake and true sources."
    ),
    React.createElement(
        "h2",
        null,
        "Conclusions"
    ),
    React.createElement(
        "p",
        null,
        "These conclusions are directly from the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing" },
            "poster"
        ),
        " (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing)."
    ),
    React.createElement(
        "p",
        null,
        "Under our original assumption, we can conclude the following:"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Beyond the secondary source, the percentage of discussion lingers around 20%. Thus, degrees of separation past this secondary source do not alter the percentage of people discussing such news.  This means that it is important to target fake news at the source, rather than attempting to educate the user."
        ),
        React.createElement(
            "li",
            null,
            "At first, fake news permeates throughout Twitter at a faster rate to that of true news, but struggles to catch up with true news later. This shows that  fake news is most effective early in its release. This will likely result in promoters of fake news putting out large amounts of misleading content as quickly as possible."
        ),
        React.createElement(
            "li",
            null,
            "True news spreads farther and faster than true news in the long run. This suggests that the Twitter user base is able to discern between true and fake news well enough to limit the spread of fake news to its early stages."
        )
    ),
    React.createElement(
        "h2",
        null,
        "Future Work"
    ),
    React.createElement(
        "p",
        null,
        "I want to continue this work in the future. I want to recollect data in a much neater way without rushing so that we can get more reliable data to work with. Without the minuscule deadlines and stress, I believe that this research can be valuable for us to know. Who knows, it might even change how society behaves. My hope is that society may even learn to impede the spread of fake news."
    ),
    React.createElement(
        "p",
        null,
        "From the ",
        React.createElement(
            "a",
            { target: "_blank", rel: "noopener noreferrer", href: "https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing" },
            "research plan"
        ),
        " (https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing), you can see how we were only able to complete the first half of our plan. We only got to model the spread of true and fake news. The second half that we didn\u2019t get to, is in my opinion, the fun part. Using the statistics and probabilities that we acquired, we were going to simulate the spread of news by generating graphs. In a way, it\u2019s a form of machine learning. I sure hope to do that in the future. That would be really cool."
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Rhythm Bullet Hell"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Mystery Dungeon Tactics"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Competitive Programming"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "BCA Bus Map"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Trojan.Ransom.BCA"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
), React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "CAS"
    ),
    React.createElement(
        "p",
        null,
        "TODO"
    )
)];