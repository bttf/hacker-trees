const topPostsEndpoint = 'http://localhost:4000/top';

export default async () => {
  // return fetch(topPostsEndpoint)
  //   .then(response => response.json());
  return [{"by":"zebraman","descendants":30,"id":18208334,"kids":[{"by":"kazinator","id":18209969,"parent":18208334,"text":"&gt; <i>Kish’s own experience is persuasive—he famously bikes along hilly, car-lined streets.</i><p>Good luck echo-detecting a small obstacle in your path, like a grapefruit-sized rock that fell of a truck. Or anything that suddenly veers into your path.<p>Riding a bike blind on a road would be prohibited where I live, because the traffic code says that cyclists on a highway have the same duties and rights as the operators a motor vehicle. (The definition of &quot;highway&quot; is very broad, encompassing almost any kind of road: e.g. alley behind a row of houses providing access to garages.)","time":1539464037,"type":"comment"},{"by":"tw1010","id":18209248,"kids":[{"by":"closed","id":18209300,"kids":[{"by":"tzs","id":18209813,"parent":18209300,"text":"The method given on that site for computing the component that comes from the last 2 digits of the year can be made a lot easier for mental calculation. I&#x27;ll give some known improvements below, and then offer one of my own that is noticeably simpler.<p>In the following, let Y = the last two digits of the year (e.g., 18 for 2018), and let N be the value we are trying to be compute. We only actually need N mod 7, but I&#x27;m going to leave out the reduction mod 7 in the equations to reduce clutter.<p>The simplest way to compute N is simply:<p><pre><code>  N = Y + Y&#x2F;&#x2F;4\n</code></pre>\nI&#x27;ll use Python3-like arithmetic and pseudocode in this comment, so &quot;&#x2F;&#x2F;&quot; is integer division (with x for times to avoid accidental italics).<p>To keep the numbers smaller during mental calculation, people have developed alternatives. The one given in that link is this:<p><pre><code>  N = Y &#x2F;&#x2F; 12\n  N += Y % 12\n  N += (Y % 12) &#x2F;&#x2F; 4\n</code></pre>\nAn interesting alternative, called the &quot;odd+11&quot; method, is given on the Wikipedia article [1]:<p><pre><code>  if odd(Y): Y += 11\n  Y = Y &#x2F;&#x2F; 2\n  if odd(Y): Y += 11\n  N = -Y\n</code></pre>\nFor the last step there, N = -Y, it will usually be easier and clearer to reduce Y mod 7 before doing that N = -Y. Also, given Y, sometimes the simplest way to get -Y mod 7 is to just note what you have to <i>add</i> to Y to get to a multiple of 7. For example, if when you get to that step Y = 20, note that adding 1 to Y gives a multiple of 7, so -20 mod 7 = 1.<p>Anyway, here&#x27;s my method. It keeps the numbers smaller--if you reduce mod 7 aggressively never more than 12--at the cost of slightly more branches in the logic.<p>Let the last two digits of the year be T and U, so Y = 10 T + U.<p><pre><code>  N = 2 x T\n  if odd(T): N += 3\n  N += U\n  if odd(T):\n    N += (U+2)&#x2F;&#x2F;4\n  else:\n    N += U&#x2F;&#x2F;4\n</code></pre>\nThat if...else is taking into account the number of leap years that have occurred in the current decade (not including the year T0). When doing mental calculation, it is probably easier just to remember that if T is odd, at 1 if U &gt;= 2 and add another 1 if U &gt;= 6, and if T is even same except at 4 and 8.<p>Here are examples, using some years from the link, with parenthetical explanations for some of the numbers:<p>2018: T=1, U=8. 2x1(T) + 3(T is odd) + 8(U) + 2(U&gt;=2,6) = 1 mod 7.<p>1929: T=2, U=9. 2x2(T) + 9(U) + 2(U&gt;=4,8) = 1 mod 7.<p>1999: T=9, U=9. 2x2(T%7) + 3(T is odd) + 2(U%7) + 2(U&gt;=2,6) = 4 mod 7. Note that I reduced U and T mod 7 inline when using them. You can do this as long as when checking odd&#x2F;even you use the original T, and when adding in the leap year correction you use the original U. E.g., for 99, you could compute it like it was 22, except you have to add the 3 for odd T, and use 9 for the U&gt;=2,6 check.<p>1982: T=8, U=2. 2x1(T%7) + 2(U) = 4 mod 7.<p>1969: T=6, U=9. 2x(-1)(T%7) + 2(U%7) + 2(U&gt;=4,8) = 2 mod 7.<p>Some might find changing the leap year handling to this a little easier instead of just remembering the 2,6 or 4,8 +1 points. Change the if...else to this:<p><pre><code>  N += U&#x2F;&#x2F;4\n  if odd(T) and N%4 &gt;= 2: N += 1\n</code></pre>\nE.g., compute the leap year adjustment with U&#x2F;&#x2F;4 regardless of whether T is odd or even, and if U is in {2, 3, 6, 7} and T is odd, add one more.<p>[1] <a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Doomsday_rule#The_%22odd_+_11%22_method\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Doomsday_rule#The_%22odd_+_11%...</a>","time":1539461960,"type":"comment"},{"by":"FigmentEngine","id":18209337,"parent":18209300,"text":"or Zeller&#x27;s congruence\n<a href=\"https:&#x2F;&#x2F;en.m.wikipedia.org&#x2F;wiki&#x2F;Zeller%27s_congruence\" rel=\"nofollow\">https:&#x2F;&#x2F;en.m.wikipedia.org&#x2F;wiki&#x2F;Zeller%27s_congruence</a>","time":1539455665,"type":"comment"}],"parent":18209248,"text":"So true! This reminded me of the first time I came upon Conway&#x27;s Doomsday Algorithm for telling what day of the week a certain date is.<p><a href=\"http:&#x2F;&#x2F;rudy.ca&#x2F;doomsday.html\" rel=\"nofollow\">http:&#x2F;&#x2F;rudy.ca&#x2F;doomsday.html</a>","time":1539455239,"type":"comment"}],"parent":18208334,"text":"This article reminds me of how it felt to be on the internet as a child. It seemed like this magical place where around every corner there was hidden an alchemic recipe to achieve something magical, if only you knew how to search in the right places.","time":1539454575,"type":"comment"},{"by":"deckarep","id":18208730,"parent":18208334,"text":"For anyone wanting to see a master example of echolocation see this short video: <a href=\"https:&#x2F;&#x2F;youtu.be&#x2F;TeFRkAYb1uk\" rel=\"nofollow\">https:&#x2F;&#x2F;youtu.be&#x2F;TeFRkAYb1uk</a>","time":1539448094,"type":"comment"},{"by":"givinguflac","id":18208604,"kids":[{"by":"bjelkeman-again","id":18208785,"kids":[{"by":"njarboe","id":18208818,"kids":[{"by":"stunthamsterio","id":18209598,"parent":18208818,"text":"I heartily recommend trying one. I ride a ZeroSR and it&#x27;s just a different experience, riding sedately along country lanes allows you to appreciate things in a whole new way. It takes some getting used to though, first few times I stopped it was eerie being able to hear nothing but the traffic next to me rather then the bike itself.","time":1539459273,"type":"comment"},{"by":"lorenzhs","id":18209623,"parent":18208818,"text":"Or a bicycle or e-bike. Those are also pretty quiet and fun to ride.","time":1539459627,"type":"comment"},{"by":"avhon1","id":18209372,"parent":18208818,"text":"An electric motorcycle probably emphasizes the need for a very well-designed helmet. At 60+mph, wind noise from the helmet could still drown out environmental noise.","time":1539456204,"type":"comment"}],"parent":18208785,"text":"On a motorcycle one is much more connected to the environment and I think that is one reason people like them. Its fun to come down into a hollow and feel the temperature change. Smells are also easily detected. Sound, on the other hand, is mostly the motorcycle noise (which can be fun too). Reading this comment made me think it would be really interesting to try out an electric motorcycle.","time":1539449136,"type":"comment"}],"parent":18208604,"text":"Situational awareness goes way down when people walk around with headphones with loud music. I notice it on a lot of people and how they behave in traffic. Just listening to things around you can be quite interesting as you move around. I never wear headphones for this reason.<p>On interesting thing is to open the windows (and sunroof) in an electric car, whilst driving in built up areas &lt; 20 mph&#x2F;35 km&#x2F;h, you hear a lot more what is going on (including insects and birds) and it is a very different experience.","time":1539448749,"type":"comment"},{"by":"agumonkey","id":18208809,"parent":18208604,"text":"It&#x27;s fun to train your sense&#x2F;brain. Since I started learning music, I try to detect harmonics in mechanics (train, car).<p>Also I wonder how much of this will come to you naturally if you live in the wild. You rely on so many minute signals ..","time":1539449075,"type":"comment"},{"by":"jfries","id":18208693,"kids":[{"by":"boon","id":18209103,"parent":18208693,"text":"One of my hobbies is birding: specifically going out and trying to count all the birds I can find down to a species level. This requires a good ear to do well. Many times I find myself closing my eyes and pausing all bodily motion to really listen intently for the low chips of a sparrow, or distant drumming of a woodpecker.","time":1539452708,"type":"comment"},{"by":"Rumudiez","id":18208801,"kids":[{"by":"acjohnson55","id":18209239,"kids":[{"by":"yesenadam","id":18209753,"kids":[{"by":"DenisM","id":18209809,"parent":18209753,"text":"Bats fly blind tho.","time":1539461900,"type":"comment"}],"parent":18209239,"text":"(Perfect pitch here) Hehe how is it &quot;much more useful&quot;? When I hear music, I simultaneously know what all the notes and chords are. That&#x27;s what hearing music is for me. I can&#x27;t imagine not having it, as an improvising musician. Hearing a note or chord without knowing exactly what is is?! People without it somehow manage, but it is like flying blind.","time":1539461220,"type":"comment"}],"parent":18208801,"text":"I think relative pitch is much more useful (e.g. identifying harmonies and notes relative to a tonic center).","time":1539454413,"type":"comment"},{"by":"ves","id":18209316,"parent":18208801,"text":"You cannot develop perfect pitch as an adult (really some time around six - eight years of age seems to be the cutoff). You can develop really good relative pitch at any point though, which is still tremendously valuable.","time":1539455369,"type":"comment"}],"parent":18208693,"text":"As one example, I’ve seen kids develop perfect pitch growing up in highly musical environments. I think it’s easier for them to learn it than adults, but it becomes a lifelong skill.","time":1539448946,"type":"comment"},{"by":"p1esk","id":18209841,"parent":18208693,"text":"Listen to Morse code.","time":1539462447,"type":"comment"},{"by":"praptak","id":18209164,"parent":18208693,"text":"Recognizing intervals. There&#x27;s a lot of free apps for this.","time":1539453431,"type":"comment"}],"parent":18208604,"text":"What do you consider good hearing skills to practice, except echolocating?","time":1539447599,"type":"comment"}],"parent":18208334,"text":"I’ve been practicing this for years and it’s quite useful. It’s not like seeing of course, but I’m able to get an idea of a room size and material hard&#x2F;softness. Useful for not walking into walls in the dark or finding something when I don’t want to wake my SO.<p>In general I’ve always been into sound and I think a lot of people have better hearing than they think, but never learned to hear well. I find it odd that we have such prominent childhood learning focused around sight (shapes, colors, etc) but barely teach children anything about hearing beyond animal sounds. I’m not advocating golden ears courses for kindergartens, but listening skills can be quite useful in lots of situations, not the least of which is situational awareness.","time":1539446737,"type":"comment"},{"by":"znpy","id":18209896,"parent":18208334,"text":"This reminds me of a ted talk I had the pleasure to enjoy watching with a good friend while &quot;intoxicated&quot;.<p>The talk&#x27;s title is &quot;Can we create new senses for humans?&quot; by David Eagleman and is available at <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=4c1lqFXHvqI\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=4c1lqFXHvqI</a>","time":1539463124,"type":"comment"},{"by":"pjmorris","id":18208583,"kids":[{"by":"Wingman4l7","id":18209388,"parent":18208583,"text":"Opening the window a crack is instinctual for me now whenever I first hear a siren on the road, so I can better figure out where it&#x27;s coming from -- it can give me several extra seconds to plan if and how I need to get out of the way of emergency services.  I highly recommend it!","time":1539456431,"type":"comment"},{"by":"omginternets","id":18208913,"parent":18208583,"text":"In the military, I at some point learned that listening was at least as important as looking.  A lot of the senior guys on their 3rd or 4th tour would patrol without a helmet -- it messed with their hearing.","time":1539450155,"type":"comment"}],"parent":18208334,"text":"My technique is caveman compared to the article, but I habitually roll down the windows before I back out of a parking spot, so I can listen for as well as look for anything that might be in the way. I think I started this after our son was born, born of an increasing mindfulness of kids and their associates (balls, toys, pets.)","time":1539446575,"type":"comment"},{"by":"arthurofbabylon","id":18209498,"parent":18208334,"text":"Most of us echolocate already, oftentimes without even knowing it.<p>An exercise to test&#x2F;prove existing echolocation abilities:\nStand 10 meters from a wall. Close your eyes and walk towards it. Try to stop right in front of the wall without opening the eyes. The majority of participants will stop when the wall is 1&#x2F;5 meter in front of the face. Participants report “hearing” the wall.<p>Broadly speaking, listening is the human means for becoming aware of physical threats. Even unconsciously heard sounds will trigger stress hormones.","time":1539457684,"type":"comment"},{"deleted":true,"id":18209721,"parent":18208334,"time":1539460834,"type":"comment"},{"by":"happy-go-lucky","id":18209729,"parent":18208334,"text":"Here&#x27;s an inspiring talk by Daniel Kish who has been blind since he was 13 months old and relies on echolocation.<p>&gt; Daniel Kish: How I use sonar to navigate the world<p><a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=uH0aihGWB8U\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=uH0aihGWB8U</a>","time":1539460930,"type":"comment"},{"by":"sehugg","id":18209650,"parent":18208334,"text":"I usually sleep with a white noise app running, and I can always hear when the cat is crawling around nearby. (Free app idea, Sonic Cat Detector -- you&#x27;re welcome :) )","time":1539460059,"type":"comment"},{"by":"acjohnson55","id":18209245,"parent":18208334,"text":"This reminds me of an incredible episode of the podcast Invisibilia: <a href=\"https:&#x2F;&#x2F;www.npr.org&#x2F;programs&#x2F;invisibilia&#x2F;378577902&#x2F;how-to-become-batman?t=1539454445607\" rel=\"nofollow\">https:&#x2F;&#x2F;www.npr.org&#x2F;programs&#x2F;invisibilia&#x2F;378577902&#x2F;how-to-be...</a>","time":1539454486,"type":"comment"},{"by":"d6e","id":18209767,"parent":18208334,"text":"Do loud noises or loud music interfere with it?","time":1539461421,"type":"comment"}],"score":222,"time":1539443799,"title":"Teach Yourself to Echolocate: A beginner’s guide to navigating with sound","type":"story","url":"https://www.atlasobscura.com/articles/how-to-echolocate"},{"by":"propman","descendants":23,"id":18209241,"kids":[{"by":"walrus01","id":18209783,"kids":[{"by":"paulpauper","id":18209966,"kids":[{"by":"walrus01","id":18209982,"parent":18209966,"text":"&gt; poor government policy<p>there is fairly strong evidence that repeal of the glass-steagall act was a contributing factor to the environment that allowed investment&#x2F;securities firms to get out of control in the 2001-2008 time period:<p><a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Aftermath_of_the_repeal_of_the_Glass%E2%80%93Steagall_Act\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Aftermath_of_the_repeal_of_the...</a>","time":1539464157,"type":"comment"}],"parent":18209783,"text":"Madoff and Alan Stanford went to jail. although unrelated to the 2008 financial crisis, is evidence white collar criminals can in fact get very punitive sentences. In the case of the 2008 crisis, the link between the actions of any one individual and the crisis itself is more tenuous. The problem was no so much maleficence, but underestimating risk. The risk management models these banks were using could not have foreseen such a large and sudden catastrophic failure. You cannot put people in jail for failing to account for tail risk. Second, the crisis was possibly also caused by poor government policy, such as programs creating incentives for low-income homeowners who may have not have had good credit.","time":1539464006,"type":"comment"},{"by":"drb91","id":18209953,"parent":18209783,"text":"Rich government officials were the victims this time. I feel confident.","time":1539463828,"type":"comment"},{"by":"rayiner","id":18209899,"kids":[{"by":"walrus01","id":18209909,"kids":[{"by":"rayiner","id":18209934,"kids":[{"by":"walrus01","id":18209941,"parent":18209934,"text":"no, at a more fundamental level before the ratings agencies ever saw them, the <i>composition</i> of the mortgage-backed securities and their tranches. The number of no-documentation&#x2F;no-income mortgages that were rolled together into securitized products by the clients of the ratings agencies.","time":1539463654,"type":"comment"},{"by":"paulsutter","id":18209964,"parent":18209934,"text":"So tell us then what it was? Good people doing solid work until they were hit by a random black swan event?","time":1539463983,"type":"comment"}],"parent":18209909,"text":"And you’re 95% certain that bond ratings are what caused the financial crisis?","time":1539463586,"type":"comment"}],"parent":18209899,"text":"a) the people who paid off the bond rating agencies to rate mortgage-backed securities full of junk mortgages as AAA.<p>b) the senior executives at institutions like bear stearns who signed off on creating the mortgage backed securities and their known composition of shit mortgages.<p>c) the senior executives at the rating agencies who knowingly rated shit bonds as AAA.<p>d) senior executives at institutions like Countrywide which pumped the shit mortgages into the market.","time":1539463321,"type":"comment"},{"by":"drb91","id":18209961,"parent":18209899,"text":"&gt; with certainty exceeding 90-95% (the &quot;reasonable doubt&quot; threshold)<p>How do you figure? Smells like a p value taken from a science class, not anything related to a legal definition of reasonable doubt.","time":1539463937,"type":"comment"},{"by":"zerg2k","id":18209930,"kids":[{"by":"rayiner","id":18209949,"kids":[{"by":"walrus01","id":18209954,"kids":[{"by":"tptacek","id":18209986,"parent":18209954,"text":"The criminal justice response to dot-com and to the 2008 crash seem comparable.","time":1539464206,"type":"comment"}],"parent":18209949,"text":"a number of people were prosecuted:<p><a href=\"https:&#x2F;&#x2F;www.google.com&#x2F;search?client=ubuntu&amp;channel=fs&amp;q=worldcom+court+case&amp;ie=utf-8&amp;oe=utf-8\" rel=\"nofollow\">https:&#x2F;&#x2F;www.google.com&#x2F;search?client=ubuntu&amp;channel=fs&amp;q=wor...</a><p>the dotcom 1.0 crash had a lot of irrational exuberance, where VC money was raised and pissed away for ideas that wouldn&#x27;t work at the time (beenz, flooz, pets.com, webvan, etc). Then there was the outright fraud like Enron and Worldcom.","time":1539463852,"type":"comment"}],"parent":18209930,"text":"“Where there is smoke there is fire” is not a doctrine of criminal law. Also, by that token, who should we have prosecuted for the 2000 tech-related crash?","time":1539463747,"type":"comment"},null],"parent":18209899,"text":"That can be easily refuted by saying “do you really think that <i>all</i> big bank executives didn’t know what was going on and decided to ride the money wave”?","time":1539463538,"type":"comment"}],"parent":18209783,"text":"I&#x27;d love to hear which specific person did which specific thing that you believe &quot;<i>directly caused</i> the 2007-2009 economic crisis.&quot;<p>Identifying a &quot;direct cause&quot; of the 2007-2009 financial crisis, with certainty exceeding 90-95% (the &quot;reasonable doubt&quot; threshold) would be worthy of a Nobel Memorial Prize, in my estimation.","time":1539463207,"type":"comment"}],"parent":18209241,"text":"After seeing how few senior financial industry people went to prison for their work that directly caused the 2007-2009 economic crisis, I&#x27;m highly skeptical that justice will actually be served.","time":1539461620,"type":"comment"},{"by":"dmfdmf","id":18209984,"parent":18209241,"text":"I am not a lawyer but can&#x27;t&#x2F;shouldn&#x27;t the defense request a dismissal at this point if the prosecutor just admitted it is an on-going investigation?  It seems a bit unfair to continue with the case while using the fact that it is an open investigation as a cover to collect more evidence against them. It is unfair because the lawyers for the defense are trying to defend against a moving target.<p>NB: Not defending Holmes or Balwani but curious about the legal status of the case.","time":1539464182,"type":"comment"},{"by":"samfisher83","id":18209739,"kids":[{"by":"propman","id":18209763,"parent":18209739,"text":"They were arrested and out on a $500k bail. The same happens for those now in jail for smoking pot or dealing or whatever. The trial is now going on and the prosecution thinks it has a potentially far bigger case that can net more on charges.<p>Holmes settled the civil case with the SEC I believe so she’s cleared there. She absolutely could be jailed for a long time, but the wheels of justice turn slowly.","time":1539461347,"type":"comment"},{"by":"tptacek","id":18209761,"kids":[{"by":"throwaway2048","id":18209880,"kids":[{"by":"tptacek","id":18209971,"parent":18209880,"text":"Relatively few people are in prison for pot <i>at all</i>, was I guess my point. But I&#x27;m not looking to litigate weed law, which is something that virtually everyone on HN directionally agrees about anyways.","time":1539464072,"type":"comment"},{"by":"dmoy","id":18209946,"parent":18209880,"text":"Even still, relative to other prisoners, weed is pretty minor.  You&#x27;re talking like ~1% of the prison population.<p><i>Arrest</i> rates are way higher though.","time":1539463713,"type":"comment"}],"parent":18209761,"text":"Yeah just for possessing it, such a major difference.","time":1539462929,"type":"comment"}],"parent":18209739,"text":"Pretty obviously because a pot charge is typically simple to adjudicate (you were arrested, you had pot, that&#x27;s illegal) and white-collar investor and product fraud cases are not. The criminal case against Balwani and Holmes is complicated, and it will take time to resolve.<p>(Relatively few people are at this point in jail for smoking pot, for whatever that&#x27;s worth to you).","time":1539461321,"type":"comment"},{"by":"avip","id":18209925,"parent":18209739,"text":"Maybe because they haven&#x27;t been convicted yet.","time":1539463500,"type":"comment"},{"by":"wetpaws","dead":true,"id":18209752,"parent":18209739,"text":"Something something empowerment narrative","time":1539461215,"type":"comment"}],"parent":18209241,"text":"Why aren&#x27;t Holmes and the other guy in jail. I mean there are people in jail for smoking pot and these guys did massive fraud and they are free.<p>I hope they don&#x27;t just give them some fine. Makes the judicial system look bad.","time":1539461084,"type":"comment"}],"score":39,"time":1539454430,"title":"Theranos Criminal Case Is Broader Than Publicly Disclosed, Prosecutors Say","type":"story","url":"https://www.bloomberg.com/news/articles/2018-10-12/theranos-criminal-case-is-broader-than-disclosed-u-s-says?srnd=premium"},{"by":"filipoi","descendants":0,"id":18209902,"score":10,"time":1539463237,"title":"CSS Layout cookbook","type":"story","url":"https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook"},{"by":"ingve","descendants":9,"id":18207964,"kids":[{"by":"agumonkey","id":18208725,"parent":18207964,"text":"<p><pre><code>    As opposed to other kernels and microkernels – probably –, \n    MH is based on a completely random ideology, picked arbitrarily, \n    in a Cambridge pub, after evidently too many beers.\n  \n    Unimpressed by the lack of shape in modern software, some day in 2014\n    I thought that it would be really cool to build a system made of \n    tangible abstractions. A system described in terms of objects that can \n    be very easily understood would be – I decided – very pleasant to play \n    with, and to use as a base for complex systems!\n</code></pre>\nFun and quite Kay-ish","time":1539448028,"type":"comment"},{"by":"yjftsjthsd-h","id":18208379,"kids":[{"by":"alexforster","id":18208439,"kids":[{"by":"beefhash","id":18208459,"kids":[{"by":"yjftsjthsd-h","id":18208686,"kids":[{"by":"beefhash","id":18208709,"parent":18208686,"text":"From the news page[1]:<p>&gt; The MH development repository has moved from <a href=\"https:&#x2F;&#x2F;github.com&#x2F;glguida&#x2F;mh\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;glguida&#x2F;mh</a> to <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mhsys\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mhsys</a>.<p>&gt; Now that we have multiple external projects, like rumprun-mrg, and a strong interest in adding more ports for the mh userspace, it make sense to have a place to have all MH related code.<p>[1] <a href=\"http:&#x2F;&#x2F;mhsys.org&#x2F;news&#x2F;\" rel=\"nofollow\">http:&#x2F;&#x2F;mhsys.org&#x2F;news&#x2F;</a>","time":1539447764,"type":"comment"},{"by":"glguida","id":18209588,"parent":18208686,"text":"Yes, I planned to move and continue development to mhsys.org after I needed to have multiple repositories. Having said this, I have a few outstanding patches that fix the tool chain building — a change got lost in the split.<p>Thank you for your interest btw; this was completely unexpected and a rather pleasant surprise!<p>Development is currently stalled mostly for personal reasons, but I am more than available to help and answer questions to anyone interested in it.","time":1539459153,"type":"comment"}],"parent":18208459,"text":"Oh, weird that there are 2 repos. The one I linked doesn&#x27;t have issues enabled (I looked there first).","time":1539447538,"type":"comment"}],"parent":18208439,"text":"Convenience link to said issue: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;glguida&#x2F;mh&#x2F;issues&#x2F;1\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;glguida&#x2F;mh&#x2F;issues&#x2F;1</a>","time":1539445304,"type":"comment"}],"parent":18208379,"text":"There&#x27;s an open Github issue where the author clarifies that his own code is BSD, and he puts the license of each file in its header.","time":1539445150,"type":"comment"}],"parent":18207964,"text":"Main website: <a href=\"http:&#x2F;&#x2F;mhsys.org&#x2F;index.html\" rel=\"nofollow\">http:&#x2F;&#x2F;mhsys.org&#x2F;index.html</a><p>Source code: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mhsys&#x2F;mh\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mhsys&#x2F;mh</a><p>&quot;MH is free software&quot; and there&#x27;s a link to GNU, but I don&#x27;t see an actual license anywhere.<p>&quot;it is possible to use NetBSD drivers, filesystem and other code in userspace to driver real hardware, it has a complete libc in userspace, Newlib, and has a really useful native runtime system, libmrg&quot; - <i>that</i> is promising, even though there are notes about this still being early &#x2F; not useful, etc.","time":1539444249,"type":"comment"},{"by":"emersonrsantos","id":18209385,"parent":18207964,"text":"It can be an interesting evolution of Unix &quot;everything is a file&quot;. This potentially simplifies everything - threading, signals, pipes, asyncronous I&#x2F;O.<p>I have the impression that Microsoft tried to do everything is a device in post-NT systems but I can&#x27;t remember the details.","time":1539456394,"type":"comment"},{"by":"rasjani","id":18208566,"parent":18207964,"text":"Reminds me of QNXx","time":1539446386,"type":"comment"}],"score":104,"time":1539439268,"title":"The Murgia Hack System","type":"story","url":"http://mhsys.org/notes/"},{"by":"telotortium","descendants":0,"id":18208910,"score":29,"time":1539450125,"title":"Notes on Type Layouts and ABIs in Rust","type":"story","url":"https://gankro.github.io/blah/rust-layouts-and-abis"}];
};