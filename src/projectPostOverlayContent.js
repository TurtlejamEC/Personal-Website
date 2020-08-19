export const projectOverlayContent = [
    <div>
        <h1>Modeling the Propagation of True/Fake News on Twitter</h1>
        <h2>TL;DR</h2>
        <p>It’s a research project that investigates how fake news spreads through Twitter and how its propagation may fare against that of true news. It starts a recursive algorithm on a true or fake news Tweet, goes through its replies to check for keywords, and recurses the algorithm on matching replies. The spread is quantified as such.</p>
        <h2>Important Links</h2>
        <ol>
            <li>Presentation Poster (detailed overview of work): <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"}>https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing</a></li>
            <li>Research Plan: <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing"}>https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing</a></li>
            <li>Github repository: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/arjnai21/TwitterDataCollection"}>https://github.com/arjnai21/TwitterDataCollection</a></li>
        </ol>
        <h2>Table of Contents</h2>
        <ol>
            <li>Situational Context: Research Program</li>
            <li>Objectives</li>
            <li>General Algorithm</li>
            <li>Implementation: Data Structure</li>
            <li>Implementation: Algorithm</li>
            <li>Analysis and Interpretation of Acquired Data</li>
            <li>Results</li>
            <li>Conclusions</li>
            <li>Future Work</li>
        </ol>
        <img src="src/img/Projects/TwitterDataCollection/ExampleGraph.png" style={{float:"right", width:"50em", verticalAlign:"middle", margin:"1em"}} />
        <h2>Situational Context: Research Program</h2>
        <p>This was a research project that I did with a friend named <a target="_blank" rel="noopener noreferrer" href={"https://github.com/arjnai21"}>Arjun</a> (https://github.com/arjnai21) in our sophomore year in high school. Our high school has a rather robust research program. We can find a topic and begin research under a teacher to be known as a “mentor” by selecting one out of a pool of certain research teachers. Having a mentor is necessary to participate in research competitions. Then, once we have a mentor and a research plan, we can enter our research into research competitions. Our high school is well known for winning research competitions, so at the lowest level of research competitions, there is the <a target="_blank" rel="noopener noreferrer" href={"https://researchexpo.bergen.org/index.html"}>BCA Research Expo</a> (https://researchexpo.bergen.org/index.html). The BCA Research Expo’s purpose is for students to share what they researched to the community, get judged and critiqued by professionals in the industry, and select the finalists who will compete in <a target="_blank" rel="noopener noreferrer" href={"https://www.societyforscience.org/isef/"}>ISEF</a> (Regeneron International Science and Engineering Fair) (https://www.societyforscience.org/isef/). This is a complex process, so we wanted to learn the ropes and see how the research program works so that in a future research project, we’ll know what we are doing and how to win.</p>
        <p>This was a difficult venture into the research program because our mentor, to be frank, ironically was not very knowledgeable about the research program. However, we couldn’t select a different mentor. Each mentor teacher is specialized in a specific category, and our mentor was the only teacher appropriate for our research category. As a result, we learned how the research program worked in a very rough way.</p>
        <p>We were stuck in a dilemma where we had to figure out how the research program and competition work by ourselves. We ended up asking another research teacher many questions. Because neither of us nor our mentor understood how the research program and competition worked, we ended up entering the competition extremely prematurely. Somehow, we were led to believe that we had to enter the competition each year. Unaware that the competition should only be entered after at least a year of research, this would become a constant, stressful rush to meet deadlines until the end. We would be researching as we make each benchmark for registration of the competition.</p>
        <p>We first made an <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing"}>ISEF Research Plan</a> (https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing). This was necessary for registration. As you can tell, we were very optimistic about the amount of work we would be able to get done. We would not be able to have enough time to achieve much of our goals. However, I do hope to continue this project into fruition in the future.</p>
        <p>At the competition, we had to have abstracts ready to give out to anyone. This is our final <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/document/d/1AGx6HuaYF52fA6x6T9c-rQ-5NCT_JgDKDogp4jsV9IE/edit?usp=sharing"}>abstract</a> (https://docs.google.com/document/d/1AGx6HuaYF52fA6x6T9c-rQ-5NCT_JgDKDogp4jsV9IE/edit?usp=sharing). Finally, we needed a <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"}>poster</a> for our booth at the competition (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing). The content of the poster contains the main points of our presentation (12-15 min) in front of the judges. Although the project was massively rushed to meet deadlines, we won the BCA Mathematics Award (MATH) as you can see in the <a target="_blank" rel="noopener noreferrer" href={"https://researchexpo.bergen.org/winners.html"}>results</a> (https://researchexpo.bergen.org/winners.html).</p>
        <h2>Objectives</h2>
        <p>To investigate the impact of fake news in online society, we set out to answer these questions.</p>
        <ol>
            <li>What is the average number of people reached and/or influenced by fake news from a single source?</li>
            <li>What is the rate at which fake news travels between people?</li>
            <li>Does fake news spread faster and/or farther than true news?</li>
            <li>To what extent is fake news passed on to others indirectly from a secondary source?</li>
        </ol>
        <p>The questions would be answered using the results of our algorithm.</p>
        <h2>General Algorithm</h2>
        <p>The algorithm begins on a Tweet that we determined to be true or fake news. We verified this using the fact checker Snopes. Before running the algorithm, we must determine a set of keywords relating to the true/fake news Tweet. If a recent Tweet of a user contains at least one of these keywords, that user will be considered “influenced”. One will have to define what a recent Tweet is based on their hardware limitations.</p>
        <p>At the most general level, the algorithm is as follows.</p>
        <ol>
            <li>Iterate through the repliers of the Tweet.</li>
            <li>Iterate through the recent Tweets of each replier.</li>
            <li>If any of the recent Tweets contain a keyword, begin step 1 on that Tweet.</li>
        </ol>
        <h2>Implementation: Data Structure</h2>
        <img src="src/img/Projects/TwitterDataCollection/ExampleGraph.png" style={{float:"right", width:"40em", verticalAlign:"middle", margin:"1em"}} />
        <p>A Twitter user is represented as a “Node”. A Node is an object with the following properties:</p>
        <ol>
            <li>“influenced” - a boolean that signifies whether the user has made a Tweet with a keyword or not</li>
            <li>“link” - a string that identifies which user the Node is referring to by recording the link to the user’s profile</li>
            <li>“children” - an array of Nodes with all repliers to the user’s Tweets</li>
        </ol>
        <p>Effectively, this creates a directed graph of users, with the exception of the source Node (which represents a Tweet).</p>
        <p>The image is from the <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"}>poster</a> (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing) mentioned above. This is an example of what the graph may look like. In our analysis, we define the spread rate as the ratio of the number of influenced children over all children.</p>
        <h2>Implementation: Algorithm</h2>
        <p>Due to extreme time constraints, our implementation of the algorithm is rather limited. Nonetheless, we were still able to procure interesting results.</p>
        <p>We could not use Twitter’s API because there was not enough time to get approved. Therefore, we made a Chrome Extension to scrape the web pages and obtain the information that we needed.</p>
        <p>The algorithm is as follows:</p>
        <ol>
            <li>For each replier of the Tweet, initialize a new Node for the replier with its link.</li>
            <li>All of these newly created Nodes are appended to the Tweet’s author’s children array.</li>
            <li>For each replier of the Tweet, open a new tab to the replier’s user profile.</li>
            <li>Iterate through the replier’s recent Tweets.</li>
            <li>If any of the recent Tweets contains a keyword, mark the user as influenced and begin step 1 on that Tweet.</li>
        </ol>
        <p>As one can imagine, this approach is very demanding on hardware since Chrome is already a bulky program. Due to limitations of hardware, we defined a user’s recent Tweets as the 20 most recent Tweets made by the user. Also due to hardware limitations, we had to end the algorithm prematurely in cases where the graph got too large.</p>
        <div style={{float: "right", margin: "1em"}}>
            <div>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig2.png" style={{width: "30em"}}/>
                    <figcaption>Figure 2: For each post, the number of nodes at each level were counted with a BFS algorithm. Many graphs that grew very large were prematurely terminated due to hardware limitations.</figcaption>
                </figure>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig3.png" style={{width: "30em"}}/>
                    <figcaption>Figure 3: The number of influenced nodes at each level that were counted with the same BFS algorithm.</figcaption>
                </figure>
            </div>
            <div>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig4.png" style={{width: "30em"}}/>
                    <figcaption>Figure 4: For each node, the influenced and uninfluenced children were counted. The calculated percentage was stored in an array. Finally, all of the percentages of a graph were averaged.
                    </figcaption>
                </figure>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig5.png" style={{width: "30em"}}/>
                    <figcaption>Figure 5: The regression was calculated over the set of all counts of nodes at a level excluding outliers. The regression for true news was quadratic but without the linear term. The regression for fake news was linear. Both regressions had y-intercepts fixed at 1.</figcaption>
                </figure>
            </div>
            <div>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig6.png" style={{width: "30em"}}/>
                    <figcaption>Figure 6: The derivatives of the regressions as shown in Figure 5. Notice the intersection shortly before level 2.</figcaption>
                </figure>
                <figure className={"twitterFigure"}>
                    <img src="src/img/Projects/TwitterDataCollection/Fig7.png" style={{width: "30em"}}/>
                    <figcaption>Figure 7: The ratio of all influenced nodes in a graph to the total number of nodes, influenced or not.</figcaption>
                </figure>
            </div>
        </div>
        <h2>Analysis and Interpretation of Acquired Data</h2>
        <p>Our data is represented as a directed, unweighted graph. This allows us to use a simple BFS to extract the following information:</p>
        <p>Define a node’s “level” to be the path length from the source Node to the given Node.
            We interpret an influenced user to have been exposed to the content of the source Node. This does not necessarily mean that the user believes the content. With our information, we have no way of verifying that.</p>
        <h3>Number of Nodes at each level</h3>
        <p>We interpreted this as the amount of people a node has reached at a certain degree of separation. As shown in the line graph, if one maps this value to its level, a general trend of concave up functions appear. It appears polynomial or exponential.</p>
        <h3>Average percent of influenced Nodes at a level</h3>
        <p>The percent of influenced Nodes at a level is defined by the ratio of the number of influenced nodes at a level divided by the number of nodes at the level. These percentages were averaged among all true news graphs and all fake news graphs respectively to compare the behavior of true and fake news. We interpreted this as the likelihood of news to spread at a certain degree of separation. Additionally, we interpreted it as the percentage of those who spread the news at the degree of separation.</p>
        <h3>Average percent of influenced children of each parent</h3>
        <p>This is the average spread rate that we briefly touched upon earlier. This is similar to the average percent of influence Nodes at a level. We interpret this value with a slightly different nuance; this tells us how efficiently news travels by word of mouth as you get further and further away from the source. In other words, how likely is someone to spread the news to somebody else?</p>
        <h3>Percentage of influenced nodes over all Nodes in the graph</h3>
        <p>This is the ratio of the number of influenced Nodes divided by the number of all Nodes in the graph. We interpreted this as the “net productivity” of the source Node. In other words, how effective was the source in getting others to spread the news?</p>
        <h2>Results</h2>
        <p>These results are directly from the <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"}>poster</a> (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing).</p>
        <p>In Figure 2, many of the graphs obtained, both fake and true, did not extend past the 1st level. In this case, repliers of the original source post were either influenced but were unable to spread the information or simply uninfluenced. For the graphs that did extend past the 1st level, the growth of nodes at a level for graphs of true topics varied less than the growth for fake topics. Notice the steep growth in nodes at a level of news source Fake 1 as compared to the more steady incline of news source Fake 4.</p>
        <p>In Figure 5, the regressions show that at first, the fastest growth in nodes at a level is from a fake news source, but just before level 4, the graphs of true news sources generally begin to increase faster. Thus, further down the levels, true news spreads to much more people. As seen in Figure 6, one can notice that at first, the rate at which fake news reaches more people increases the fastest. However, a little before level 2 the rate at which true news spreads grows faster than for fake news.</p>
        <p>Figure 4 shows the chance of success of one who has been influenced by the news to influence another. The majority of these “spread rates” were between 10% and 25%. However, it is seen that one fake news source has a drastically high spread rate. Additionally, the lowest spread rate belongs to a true news source. Besides this, after excluding outliers, there aren’t any apparent differences between the spread rates of true and fake news sources.</p>
        <p>Figure 3 shows the percent of people who would be influenced by the news at a certain degree of separation from the news source. Fake news is seemingly much more likely to influence others if shared from primary or secondary sources, but beyond these, people are less likely to be influenced. True news tends to influence the most people from secondary sources.</p>
        <p>Finally, Figure 7 can be interpreted as the “net productivity” of the original source. This is defined as the total percentage of all influenced nodes, regardless of level. However, besides the outlier, Figure 7 does not depict an apparent difference between fake and true sources.</p>
        <h2>Conclusions</h2>
        <p>These conclusions are directly from the <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing"}>poster</a> (https://docs.google.com/presentation/d/1AWeuIfdHIvQYjxYpJdCTcOqSLS2MF9CsmYq2oHkQMnI/edit?usp=sharing).</p>
        <p>Under our original assumption, we can conclude the following:</p>
        <ol>
            <li>Beyond the secondary source, the percentage of discussion lingers around 20%. Thus, degrees of separation past this secondary source do not alter the percentage of people discussing such news.  This means that it is important to target fake news at the source, rather than attempting to educate the user.</li>
            <li>At first, fake news permeates throughout Twitter at a faster rate to that of true news, but struggles to catch up with true news later. This shows that  fake news is most effective early in its release. This will likely result in promoters of fake news putting out large amounts of misleading content as quickly as possible.</li>
            <li>True news spreads farther and faster than true news in the long run. This suggests that the Twitter user base is able to discern between true and fake news well enough to limit the spread of fake news to its early stages.</li>
        </ol>
        <h2>Future Work</h2>
        <p>I want to continue this work in the future. I want to recollect data in a much neater way without rushing so that we can get more reliable data to work with. Without the minuscule deadlines and stress, I believe that this research can be valuable for us to know. Who knows, it might even change how society behaves. My hope is that society may even learn to impede the spread of fake news.</p>
        <p>From the <a target="_blank" rel="noopener noreferrer" href={"https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing"}>research plan</a> (https://docs.google.com/document/d/1ZowGso8cbXKEE-qLb-lY0Iwl4ERPBaGsFBZl8DCUUBo/edit?usp=sharing), you can see how we were only able to complete the first half of our plan. We only got to model the spread of true and fake news. The second half that we didn’t get to, is in my opinion, the fun part. Using the statistics and probabilities that we acquired, we were going to simulate the spread of news by generating graphs. In a way, it’s a form of machine learning. I sure hope to do that in the future. That would be really cool.</p>
    </div>,
    <div>
        <h1>Harmonizer</h1>
        <h2>TL;DR</h2>
        <p>I wrote a program that can add chords to a melody that you have. I first tried to make a cDCGAN and trained it with examples from works by classical piano composers. I got these examples by parsing MIDI data and formatting it into a vector that I wanted. I also made an algorithm that adds these chords using various tricks from the world of music theory.</p>
        <h2>Important Links</h2>
        <ol>
            <li>Github repository: <a target="_blank" rel="noopener noreferrer" href={"https://github.com/TurtleBCA/Harmonizer"}>https://github.com/TurtleBCA/Harmonizer</a></li>
        </ol>
        <h2>Table of Contents</h2>
        <ol>
            <li>Situational Context: Junior Year Final Project</li>
            <li>Learning Goals</li>
            <li>Project Inspiration</li>
            <li>The Algorithm</li>
            <li>Determining Chords - Method 1: Conditional GAN (Generative Adversarial Network)</li>
            <li>Building the Training Set</li>
            <li>Determining Chords - Method 2: Music Theory</li>
            <li>Thoughts for the Future</li>
        </ol>
        <h2>Situational Context: Junior Year Final Project</h2>
        <p>At my high school, all computer science students except for seniors have to develop a project at the end of the year to exhibit in a fair. Although I had a few weeks to work on this project, amidst all of the other finals that I had to do for my other classes, I ended up working on this project for only about a week’s worth of time. Nevertheless, I am rather proud of how much I learned and got done within a week.</p>
        <h2>Learning Goals</h2>
        <p>Machine learning was beginning to gather a lot of buzz during the school year, and I was curious to see what the bandwagon was all about. I wanted to see what was so amazing about machine learning, get a better idea of what you can do with it, and learn how it works. Earlier in my junior year, I took a <a target="_blank" rel="noopener noreferrer" href={"https://www.coursera.org/learn/machine-learning"}>course</a> (https://www.coursera.org/learn/machine-learning) on Coursera on machine learning to learn about what it was. To be frank, I was very intrigued by the clever applications of linear algebra and calculus and fascinated by the training process of various models. Earlier, I hadn’t really known of many applications of matrices, and I was glad to find such interesting applications. For that course, I worked with MATLAB, but I decided that for my personal projects, I wanted to use a language that was more widely used. Having heard about Python and TensorFlow, I sought out to learn how to utilize the library. Due to time, I ended up familiarizing myself more with Keras instead.</p>
        <p>In addition, I wanted to incorporate music somewhere into the project. As can be seen throughout this site, I am very interested in music theory and composition. I’ve been learning about various tricks in theory over the years and in my AP Music Theory class that I wanted to put to the test. I also wanted to learn how to work with MIDI files because I feel like they could be fun or useful to tinker with if I ever have more music-related projects in the future. I would eventually come across a Python package called <a target="_blank" rel="noopener noreferrer" href={"https://github.com/craffel/pretty-midi"}>pretty_midi</a> (https://github.com/craffel/pretty-midi) to do so.</p>
        <h2>Project inspiration</h2>
        <p>Some people have told me in the past about their desires to make songs and/or to harmonize but that they lack the skills to do so. Some have melodies in their heads, but are unable to turn them into full-fledged songs. After doing a bunch of four-part writing in my AP Music Theory class, an idea began to grow to write a program that could harmonize a melody. After all, functional harmony seems rather methodical. I figured that if I could discover what I’m exactly doing to harmonize a melody, I could get a program to carry out the mysterious algorithm that my brain undertakes.</p>
        <img src="src/img/Projects/Harmonizer/HarmonizerSegments.png" style={{float:"right", width:"35em", verticalAlign:"middle", margin:"1em"}} />
        <h2>The Algorithm</h2>
        <p>After lots of introspection, I solidified the steps in harmonization that I was unconsciously doing before.</p>
        <p>This whole algorithm revolves around working in “segments”. Due to time constraints of the project, I assumed the melody was in common time. Define a “segment” to be a piece of a measure of the melody. A segment can either be 1 beat long, 2 beats long, or 4 beats long. A segment can be any 1, 2, or 4 beat period of time within a single measure. This diagram illustrates all of the possible segments.</p>
        <p>Then define “getting the next segment” as the process of determining the subsequent segment after one we have already worked on. In other words, one must have to decide what the length of the next segment must be. Because segments do not cross measures, the length of the segment is restricted by the number of beats left in the measure. Under this condition, the length of the segment is randomized.</p>
        <p>Here’s the main idea of the algorithm:</p>
        <ol>
            <li>At the very beginning of the algorithm, determine the very first segment of the melody.</li>
            <li>Get the pitch inventory (the set of pitches) of the melody within the segment.</li>
            <li>Just based on the pitch inventory of this segment, determine the pitch inventory of the accompanying chord.</li>
            <li>Get the next segment of the melody.</li>
            <li>Extract the pitch inventory of the melody within the upcoming segment.</li>
            <li>Taking into account the pitch inventory of the accompanying chord chosen in the previous segment and the pitch inventory of the upcoming segment, determine the pitch inventory of the accompanying chord in the upcoming segment.</li>
            <li>Repeat steps 4 to 6 until an accompanying pitch inventory is determined for each segment.</li>
            <li>Voice the accompanying chord of the first segment.</li>
            <li>Iterate through each segment, voicing the chords such that every pitch in the determined accompanying pitch inventory is used and the distance between two consecutive notes of a voice are minimized.</li>
        </ol>
        <p>Here’s a more detailed explanation of each step:</p>
        <img src="src/img/Projects/Harmonizer/AlgorithmExplanation1to3.png" style={{float:"right", width:"35em", verticalAlign:"middle", margin:"1em"}} />
        <h3>Step 1</h3>
        <p>The algorithm is a sweep line algorithm that takes into account previous information. However, we need to start somewhere. We have to determine the location and length of the very first segment from which all other segments will essentially be built off of.</p>
        <h3>Step 2</h3>
        <p>We obtain the pitch inventory of the melody within the segment and store the information into a one-hot encoded boolean array, each value corresponding to the number of half steps away from the tonic. In less technical terms, in the key of C major, each value corresponds to the twelve pitches of our equal temperament tuning system (C, C#, D, D#, E, F, F#, G, G#, A, A#, B). If a pitch is being utilized, it is true; else, it is false. Part of the reason why we store the pitch inventory this way is because it is efficient with the help of modular arithmetic and also because we could use this as a vector for the machine learning model.</p>
        <h3>Step 3</h3>
        <p>Normally, in addition to melody information of the segment we are working on, we would take into account the previous chord to determine the new accompanying chord. However, because we are working with the very first segment, we don’t have any previous information to work off of. This step could arguably be the most crucial step, but it’s not easy to decide how to go about this step. How to determine the accompaniment is hard enough, but without prior information, it makes the problem even harder. I will discuss the two different methods I tried to determine chords with later. For now, we’ll only use the melody information of the segment we are working on for now.</p>
        <h3>Step 4</h3>
        <img src="src/img/Projects/Harmonizer/AlgorithmExplanation4to6.png" style={{float:"right", width:"35em", verticalAlign:"middle", margin:"1em"}} />
        <p>Next, we determine the next segment to work off of. In other words, we decide whether to make the next 1, 2, or 4 beats the new segment. Remember that segments are not allowed to cross measures. This restriction increases the chances of making a better generated accompaniment.</p>
        <h3>Step 5</h3>
        <p>To make sure that our accompaniment can actually go well with the melody within the segment, we should know what the melody’s pitches are, right? Store those pitches in a one-hot encoded array.</p>
        <h3>Step 6</h3>
        <p>Now, we have previous information to work off of. Chord progressions are all about moving from one chord to another. However, in the world of functional harmony, generally, certain chords transition better to other specific chords, right? Taking into account the previous chord and the melody of the segment that we need to harmonize, determine the new chord. I will discuss the two different methods I tried to do this later.</p>
        <h3>Step 7</h3>
        <p>This algorithm is a sweep line algorithm. Repeat the process of determining chords for segments until we reach the end of the melody.</p>
        <h3>Step 8</h3>
        <p>Voicing (selecting the arrangement of the pitches) a chord is also a very intricate, complex process. One can argue that this step is the most important step since good voicing is extremely important. In fact, good voicing could make dissonant pitches sound amazing, but bad voicing can make harmonious pitches sound terrible. Furthermore, this first voicing will be the basis of all of the voices (ex. the highest part, the middle part, the lowest part, etc.) for the rest of the arrangement. Although perhaps not as spicy to certain people’s tastes, I think starting in root position (to put simply, the name of the chord is the lowest note) gives the best results.</p>
        <h3>Step 9</h3>
        <p>Ideally, you would want each voice of the chord to move as minimally as possible from one chord to another. This is so that we have smoother transitions between chords. However, this restriction alone doesn’t guarantee results. In fact, I’ve ended up with some horrendous voicings this way. If you are able to identify the chord from the pitch inventory, I recommend to voice the chord by choosing the inversion that would result in the least movement. I got the best results this way.</p>
        <h2>Determining Chords - Method 1: Conditional GAN (Generative Adversarial Network)</h2>
        <p>To determine the chords, I came up with many different methods. The first idea I actually had was to use a Markov model. However, after doing more and more research, I ended up deciding upon using a conditional GAN. There were several reasons for this. First, I wanted to take this opportunity to learn more about machine learning. This would be my first personal project in machine learning, and admittedly, it was probably too ambitious. Secondly, from all of the models I looked at, the cGAN seemed to be the only model that could generate something I want but also with a little randomness for variation. Furthermore, the potential of the cGAN is astounding. The space from which the cGAN could possibly output is extremely flexible and deep. I thought that the cGAN would be perfect for this project, it would be able to determine chords with variation between them but also spell out chords beyond the traditional chords of tertian or diatonic harmony (explained in method 2).</p>
        <p>The cGAN I implemented took a combined vector of three smaller vectors: one vector that stated whether the melody was in a major or minor key, another vector that provided the pitch inventory of the chord of the previous segment, and a third vector that provided the pitch inventory of the melody in the current segment. All of these vectors were one-hot encoded. Each segment was exactly one beat long.</p>
        <p>The cGAN would output a vector of the pitch inventory of the accompanying chord within the current segment.</p>
        <p>When I implemented this, I followed along a tutorial on how to build a conditional deep convolutional GAN. This tutorial was a tutorial on how to build a cDCGAN in Keras that generates certain clothes, trained on the Fashion MNIST dataset. Therefore, there were two main challenges I had to face: translating this to work with Tensorflow with Keras and adapting it for the input and output dimension tensors I wanted.</p>
        <p>Unfortunately, I came across problems in training that I wasn’t able to solve in time for the fair at my school. The discriminator became way too good too quickly at being able to tell whether the generator’s chords were legitimate or not. And to be fair, the generator’s chords didn’t look great either. Generally, the generator would end up outputting the same things every single time, and sometimes, they didn’t look like nice chords. I tried making a bigger training set, checking to see if the training set was fine, training for longer periods of time, and checking the implementation for errors. Due to my experience however, I ended up not being able to figure out what was wrong. With only a day before my presentation at the fair, I had to drop this method and implement something completely different so that I would have something to show. It felt pretty bad to not be able to present something that I spent almost all my time on, but it was a necessity.</p>

            <figure className={"twitterFigure"} style={{width: "35em", float: "right", margin: "1em"}}>
                <img src="src/img/Projects/Harmonizer/TrainingExplanation.png" style={{width: "35em"}} />
                <figcaption>Note: This diagram illustrates the idea of a training example, but it is not quite accurate concerning the actual process. The actual process only works in terms of exactly one beat at a time.</figcaption>
            </figure>

        <h2>Building the Training Set</h2>
        <p>I want to discuss how I made the training set because this was a deceptively difficult task.</p>
        <p>For the model that I was using, there wasn’t a dataset anywhere that had the data I wanted. Therefore, I had to make my own. There was no way that I could do this by hand in time for the fair, so I needed to do this with a program. First, I looked for MIDI files of works by classical composers that I could use to analyze and parse. However, I couldn’t use just any MIDI files. To reduce the complexity of this task, I had to find MIDI files that were at least almost perfectly lined up to beats (for those more technical, quantized). Therefore, it made my job easier in distinguishing which notes belonged to which segment. </p>
        <p>The timing of MIDI notes are mainly defined by two events, when the note begins and when the note stops. Given all of these events of every note, I had to figure out which pitches were being played at each beat. Furthermore, I had to separate out the “melody” from the rest of the notes. These are also deceptively difficult problems, and I made an assumption to simplify the task a little bit. I assumed that the highest note at any time during which a note is being played will be the melody. Then, I create my examples by sorting the events, and sweeping through the events with a priority queue to keep track of the highest note while keeping track of the time to build the chord.</p>
        <p>Thus, a MIDI file can be split into as many training examples as there are beats. The only information we input manually are the MIDI file and whether the key is major or minor (for those more technical, we assume that all works will be tonal and only be of a major or minor key for simplicity). I retrieved MIDI files from questionable looking sites and turned them into thousands of examples that consisted of the input vector and the segment’s accompanying chords as a label or “solution”.</p>
        <h2>Determining Chords - Method 2: Music Theory</h2>
        <p>As mentioned earlier, something about my implementation of the conditional GAN wasn’t working, but I didn’t have enough time to find the error and fix what was happening. Therefore, I had to resort to something that I knew would work and wouldn’t be so much of a gamble.</p>
        <p>Most songs are built from chords that are built directly from the scale of the key that it is in. These are called diatonic chords. If you start from any note in a scale and then take every other note up the scale, you can build a chord that doesn’t sound too foreign from the rest of the song. Do it twice, and you will often get your typical major or minor chord (also called a triad). Do it again, and you will get a seventh chord that is spicier than the triad you had before. This is tertian harmony.</p>
        <p>The idea then is that if the melody in the segment shares notes with a triad, that triad could possibly accompany the melody well in that segment.</p>
        <p>However, diatonic chords can only be so interesting. I wanted the algorithm to produce unexpectedly interesting results, so I threw in some non-diatonic chords in the mix: secondary dominants and leading tones.</p>
        <p>Now with all of these chords to choose from, the algorithm just has to make the choice of which one! The algorithm makes one choice from the list randomly. However, as non-diatonic chords can sound rather bad if used poorly, I weighted the diatonic chords to have a stronger chance of appearing.</p>
        <p>On a side note, due to the nature of secondary dominants and leading tones, I found it easier to implement if I determined the chords for the segments backwards. In other words, I actually didn’t work from the start of the melody to the end of the melody, but rather from the end of the melody to the start.</p>
        <h2>Thoughts for the Future</h2>
        <p>This project was rushed due to time constraints, and I hope to refine this project in the future. Although I’ve come very far and have a minimum viable product, I don’t consider this a complete project. I plan to figure out what is wrong with the conditional GAN so that I can learn from my mistakes and become more adept at machine learning. And if it does end up working, that would be really cool!</p>
    </div>,
    <div>
        <h1>Rhythm Bullet Hell</h1>
        <h2>TL;DR</h2>
        <p>I made this game alone in Unity in approximately 12 hours at a 24 hour hackathon. You have to dodge obstacles that are synced with music.</p>
        <h2>Important Links</h2>
        <ol>
            <li>Github repository (Clone to play the game yourself!): <a target="_blank" rel="noopener noreferrer" href={"https://github.com/TurtleBCA/Rhythm-Bullet-Hell-Game"}>https://github.com/TurtleBCA/Rhythm-Bullet-Hell-Game</a></li>
            <li>Gameplay video: <a target="_blank" rel="noopener noreferrer" href={"https://youtu.be/SJ7Ed8Ppa1w"}>https://youtu.be/SJ7Ed8Ppa1w</a></li>
        </ol>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SJ7Ed8Ppa1w" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{float:"right", verticalAlign:"middle", margin:"1em"}} />
        <h2>Situational Context: Hackathon</h2>
        <p>HackBCA V is my first hackathon ever. HackBCA is a 24 hour hackathon for high school students. You began coding at 6:30 PM and had to submit your project to be judged by 11:00 AM. Obviously, you can code and work on your project, but there are also various workshops to attend, activities to take part in, and food and drinks to consume. I decided to work alone on a game. Little did I know that this event would be the first and only all-nighter I pulled off. Kind of. I tried really hard to go to sleep when it was getting very late (at like around 2 or 3). I tried for about 2 hours, but HackBCA unfortunately did not accommodate sleeping. It was very difficult to go to sleep, and I don’t think I actually fell asleep at all. This alone is probably enough to make me not want to go back. Nevertheless, it was an interesting experience, and I never put together a game so fast before. I think I spent about 12 hours on this project. It’s honestly hard to tell with all of the other stuff going on like ceremonies, dinner, and hanging out with friends. But I’m kind of proud about the result considering the extremely short amount of time to make this.</p>
        <h2>Gameplay</h2>
        <p>I made this project in Unity. The game is heavily inspired by the game Just Shapes & Beats. The idea is that you control a small sky blue circle to dodge everything that you see. Any obstacles that you touch are added to the hit count that you see at the top right corner. You can “dash” by hitting the spacebar to make you temporarily invincible and super fast. Obstacles are synced with the music. Although I am a musician, I did not make the song used in this game. There wouldn’t be nearly enough time to make a song at the hackathon anyway (you couldn’t prepare assets for the project before the hackathon). The song used in this game is "TAK - PAE-KI (meganeko Remix)" by meganeko (who is an amazing artist btw). Honestly, it’s much easier to understand what’s going on by watching gameplay of it. Check out the Youtube video to see me play the game. The actual game is nowhere near as laggy, I promise.</p>
        <p>You can try out the game yourself! All you need to do is clone the <a target="_blank" rel="noopener noreferrer" href={"https://github.com/TurtleBCA/Rhythm-Bullet-Hell-Game"}>Github repository</a> (https://github.com/TurtleBCA/Rhythm-Bullet-Hell-Game) and run the appropriate build (only Windows and MacOSX provided).</p>
    </div>,
    <div>
        <h1>Mystery Dungeon Tactics</h1>
        <p>TODO</p>
    </div>,
    <div>
        <h1>Competitive Programming</h1>
        <p>TODO</p>
    </div>,
    <div>
        <h1>BCA Bus Map</h1>
        <p>TODO</p>
    </div>,
    <div>
        <h1>Trojan.Ransom.BCA</h1>
        <p>TODO</p>
    </div>,
    <div>
        <h1>CAS</h1>
        <p>TODO</p>
    </div>,
];