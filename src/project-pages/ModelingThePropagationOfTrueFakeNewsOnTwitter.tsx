import ExampleGraph from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/ExampleGraph.png';
import Fig2 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig2.png';
import Fig3 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig3.png';
import Fig4 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig4.png';
import Fig5 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig5.png';
import Fig6 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig6.png';
import Fig7 from '../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/Fig7.png';

export const ModelingThePropagationOfTrueFakeNewsOnTwitter =
  <div id="ModelingThePropagationOfTrueFakeNewsOnTwitter">
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
    <img src={ExampleGraph} style={{ float: "right", width: "50em", verticalAlign: "middle", margin: "1em" }} />
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
    <img src={ExampleGraph} style={{ float: "right", width: "40em", verticalAlign: "middle", margin: "1em" }} />
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
    <div style={{ float: "right", margin: "1em" }}>
      <div>
        <figure className={"twitterFigure"}>
          <img src={Fig2} style={{ width: "30em" }} />
          <figcaption>Figure 2: For each post, the number of nodes at each level were counted with a BFS algorithm. Many graphs that grew very large were prematurely terminated due to hardware limitations.</figcaption>
        </figure>
        <figure className={"twitterFigure"}>
          <img src={Fig3} style={{ width: "30em" }} />
          <figcaption>Figure 3: The number of influenced nodes at each level that were counted with the same BFS algorithm.</figcaption>
        </figure>
      </div>
      <div>
        <figure className={"twitterFigure"}>
          <img src={Fig4} style={{ width: "30em" }} />
          <figcaption>Figure 4: For each node, the influenced and uninfluenced children were counted. The calculated percentage was stored in an array. Finally, all of the percentages of a graph were averaged.
          </figcaption>
        </figure>
        <figure className={"twitterFigure"}>
          <img src={Fig5} style={{ width: "30em" }} />
          <figcaption>Figure 5: The regression was calculated over the set of all counts of nodes at a level excluding outliers. The regression for true news was quadratic but without the linear term. The regression for fake news was linear. Both regressions had y-intercepts fixed at 1.</figcaption>
        </figure>
      </div>
      <div>
        <figure className={"twitterFigure"}>
          <img src={Fig6} style={{ width: "30em" }} />
          <figcaption>Figure 6: The derivatives of the regressions as shown in Figure 5. Notice the intersection shortly before level 2.</figcaption>
        </figure>
        <figure className={"twitterFigure"}>
          <img src={Fig7} style={{ width: "30em" }} />
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
  </div>