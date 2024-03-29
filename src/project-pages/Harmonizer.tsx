import AlgorithmExplanation1to3 from '../assets/Projects/Harmonizer/AlgorithmExplanation1to3.png';
import AlgorithmExplanation4to6 from '../assets/Projects/Harmonizer/AlgorithmExplanation4to6.png';
import HarmonizerSegments from '../assets/Projects/Harmonizer/HarmonizerSegments.png';
import TrainingExplanation from '../assets/Projects/Harmonizer/TrainingExplanation.png';

export const Harmonizer =
  <div id="Harmonizer">
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
    <img src={HarmonizerSegments} style={{ float: "right", width: "35em", verticalAlign: "middle", margin: "1em" }} />
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
    <img src={AlgorithmExplanation1to3} style={{ float: "right", width: "35em", verticalAlign: "middle", margin: "1em" }} />
    <h3>Step 1</h3>
    <p>The algorithm is a sweep line algorithm that takes into account previous information. However, we need to start somewhere. We have to determine the location and length of the very first segment from which all other segments will essentially be built off of.</p>
    <h3>Step 2</h3>
    <p>We obtain the pitch inventory of the melody within the segment and store the information into a one-hot encoded boolean array, each value corresponding to the number of half steps away from the tonic. In less technical terms, in the key of C major, each value corresponds to the twelve pitches of our equal temperament tuning system (C, C#, D, D#, E, F, F#, G, G#, A, A#, B). If a pitch is being utilized, it is true; else, it is false. Part of the reason why we store the pitch inventory this way is because it is efficient with the help of modular arithmetic and also because we could use this as a vector for the machine learning model.</p>
    <h3>Step 3</h3>
    <p>Normally, in addition to melody information of the segment we are working on, we would take into account the previous chord to determine the new accompanying chord. However, because we are working with the very first segment, we don’t have any previous information to work off of. This step could arguably be the most crucial step, but it’s not easy to decide how to go about this step. How to determine the accompaniment is hard enough, but without prior information, it makes the problem even harder. I will discuss the two different methods I tried to determine chords with later. For now, we’ll only use the melody information of the segment we are working on for now.</p>
    <h3>Step 4</h3>
    <img src={AlgorithmExplanation4to6} style={{ float: "right", width: "35em", verticalAlign: "middle", margin: "1em" }} />
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

    <figure className={"twitterFigure"} style={{ width: "35em", float: "right", margin: "1em" }}>
      <img src={TrainingExplanation} style={{ width: "35em" }} />
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
  </div>