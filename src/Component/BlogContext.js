import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      Title:
        "Madhya Pradesh Cops to get special leave to watch 'kashmir Files': Home Minister",
      CategoryName: "Bollywood",
      PublishedDate: "March 12 2022",
      ImageAsset:
        "data:image/jpeg;base64,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",
      BlogContent:
        "Madhya Pradesh home minister Narottam Mishra said he has ordered DGP Sudhir Saxena to give special leave to police personnel who want to watch the movie, Kashmir Files",
      Likes: "100",
    },
    {
      Title: " Aparshakti Khurana’s more sure of his musical craft now",
      CategoryName: "Bollywood",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/549bc1c4-a3a2-11ec-985f-9a0c341199cc_1647268236116.jpg",
      BlogContent:
        "Aparshakti Khurana on what acting and singing mean to him and how the love he receives for both humbles himThe actor talks about how acting and singing play in his life and how the love he receives for both humbles him",
      Likes: "700",
    },
    {
      Title:
        " Katrina turns photographer for Vicky Kaushal: ‘Mood shot by Mrs’",
      CategoryName: "Bollywood",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/Untitled_design_(40)_1647256433783_1647256441039.png",
      BlogContent:
        "On Monday, Vicky Kaushal shared photos on his Instagram Stories, which were clicked by his wife-actor Katrina Kaif. Katrina and Vicky tied the knot last year in Rajasthan.",
      Likes: "500",
    },
    {
      Title:
        " Sunny Deol shares a BTS clip from the sets of 1999 film Dillagi with Bobby Deol, fans love 'bhaiyon ka pyar'.",
      CategoryName: "Bollywood",
      PublishedDate: "March 9 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/Untitled_design_(39)_1647244412738_1647244422672.png ",
      BlogContent:
        "On Friday, actor Sunny Deol shared a BTS video from the sets of Dillagi. The film was released in 1999 and also starred Bobby Deol.",
      Likes: "600",
    },
    {
      Title:
        " Abhishek Bachchan reacts to video of daughter Aaradhya reciting poem, fans call her a 'super Bachchan-Rai combination'",
      CategoryName: "Bollywood",
      PublishedDate: "March 9 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/aaradhya_1647249657014_1647249674151.jpg",
      BlogContent:
        "Aaradhya Bachchan is seen praising the Hindi language in a video from an online Hindi elocution competition held at her school.",
      Likes: "1000",
    },
  ]);

  const [technology, setTechnology] = useState([
    {
      Title:
        " Ukraine to launch an NFT collection depicting Russian-Ukrainian war",
      CategoryName: "Technology",
      PublishedDate: "March 9 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/03/ezgif.com-gif-maker-1-1.jpg",
      BlogContent:
        "Alex Bornyakov said each NFT art would represent a story from the war. Every piece of art would be backed with a reliable news source. ",
      Likes: "800",
    },
    {
      Title:
        " Apple’s new A16 chip could be exclusive to the high-end iPhone 14 Pro models",
      CategoryName: "Technology",
      PublishedDate: "March 9 2022",
      ImageAsset:
        "https://images.indianexpress.com/2022/03/iphone-14-a16-chip-featured.jpg",
      BlogContent:
        "According to analyst Ming-Chi Kuo the higher-end iPhone 14 Pro and Pro Max will feature the new A16 chip, while the other variants come with A15.",
      Likes: "650",
    },
    {
      Title:
        " Samsung sends invites for March 17 event, new Galaxy A series launch likely",
      CategoryName: "Technology",
      PublishedDate: "March 9 2022",
      ImageAsset:
        "data:image/jpeg;base64,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",
      BlogContent:
        "Samsung will launch its new mid-range Galaxy A-series smartphones at the upcoming Awesome A event on March 17.",
      Likes: "700",
    },
    {
      Title:
        " Apple Event on March 8: Check out deals and offers on iPhone 13, iPhone 12 and others",
      CategoryName: "Technology",
      PublishedDate: "March 8 2022",
      ImageAsset:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJa1e.img?h=808&w=1438&m=6&q=60&o=f&l=f",
      BlogContent:
        "The iPhone SE 2 is currently available on the Apple India website for Rs 39,900 for the base 64GB storage variant and Rs 44,900 for the 128GB storage model. Customers can pick from three different colours: black, red, or white.",
      Likes: "900",
    },
    {
      Title:
        " I ditched my laptop’s camera for Poly Studio P5 webcam, and I don’t regret it",
      CategoryName: "Technology",
      PublishedDate: "March 9 2022",
      ImageAsset: "https://images.indianexpress.com/2022/03/Poly-FB.jpg",
      BlogContent:
        "After using the Poly Studio P5 I am certainly not going back to a laptop webcam unless PC brands commit to using higher-resolution cameras in their notebooks. ",
      Likes: "422",
    },
  ]);

  const [hollywood, setHollywood] = useState([
    {
      Title:
        " The Batman director Matt Reeves talks about including Robin in sequel: 'There may be a really interesting story'",
      CategoryName: "Hollywood",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/11/550x309/Batman_Robin_1647009013654_1647009026643.jpeg",
      BlogContent:
        " The Batman director Matt Reeves has opened up about the possibility of including the superhero's sidekick Robin in the film's sequel. ",
      Likes: "800",
    },
    {
      Title:
        " Doctor Strange 2: Daniel Radcliffe reacts to rumours of him playing Wolverine in film, says 'Who knows'",
      CategoryName: "Hollywood",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/13/550x309/Dan_Radcliffe_Wolverine_1647159435112_1647159452100.jpeg",
      BlogContent:
        "Actor Daniel Radcliffe, best known for playing Harry Potter, has reacted to rumours that he is playing Wolverine in Marvel's upcoming film Doctor Strange in the Multiverse of Madness. ",
      Likes: "800",
    },
    {
      Title:
        "Pixar employees claim Disney censors LGBTQ love in its films: 'Every moment of overtly gay affection is cut'",
      CategoryName: "Hollywood",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/11/148x111/Pixar_Out_1646995461603_1646995480252.jpg",
      BlogContent:
        "Certain employees of animation studio Pixar have claimed that their parent company Disney has an anti-gay attitude that reflects in the corporate heads routinely censoring any gay affection in their films.",
      Likes: "2k",
    },
    {
      Title: " William Hurt, star of Broadcast News and Body Heat, dies at 71",
      CategoryName: "Hollywood",
      PublishedDate: "March 12 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/FILES-US-HURT-FILM-ENTERTAINMENT-0_1647225080483_1647225103300.jpg",
      BlogContent:
        "William Hurt, known for Broadcast News and Body Heat died at the age of 71. His son said he died of natural causes.",
      Likes: "800",
    },
    {
      Title:
        " Fans believe Emma Watson took a dig at JK Rowling's transphobic tweets at the BAFTAs.",
      CategoryName: "Hollywood",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/AWARDS-BAFTA-ARRIVALS-163_1647243915566_1647243971761.JPG",
      BlogContent:
        "During her appearance at the BAFTA awards, actor Emma Watson seemingly took an indirect dig at Harry Potter writer JK Rowling for her alleged transphobic comments.",
      Likes: "1K",
    },
  ]);

  const [fitness, setFitness] = useState([
    {
      Title: " Reading to kids builds their resilience, suggests new research",
      CategoryName: "Fitness",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/mother_reading_to_child_1647259092043_1647259108263.jpg",
      BlogContent:
        "New research from the University of South Australia shows that reading aloud can triple a child's resilience at school, particularly for children at-risk.",
      Likes: "800",
    },
    {
      Title:
        " Can gut issues lead to anxiety and depression? An expert answers",
      CategoryName: "Fitness",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/14/550x309/anxiety_thumb_1647250967575_1647250977548.jpg",
      BlogContent:
        "A nutritionist says that inflammation and deficiencies can trigger mental health issues which can be corrected.",
      Likes: "500",
    },
    {
      Title:
        " Music combined with auditory beat stimulation can reduce anxiety: Study",
      CategoryName: "Fitness",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/13/550x309/Mp3_player_1646369764673_1647164921069.jpg",
      BlogContent:
        "Anxiety has been steadily increasing, particularly in the adolescent and young adult populations, over recent decades. Studies have previously shown that listening to music can reduce anxiety, perhaps even more effectively than some anti-anxiety medications.",
      Likes: "800K",
    },
    {
      Title:
        " Study links shift work to poorer working memory, slower mental processing",
      CategoryName: "Fitness",
      PublishedDate: "March 10 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/13/550x309/_b446d806-fe5e-11ea-a5cd-623ad1e030ac_1647167149802.jpg",
      BlogContent:
        "A new study links shift work to serious health issues as a result of the internal body clock (circadian rhythm) being out of step with the normal light-dark cycle. These include sleep disorders, cardiovascular disease, obesity, diabetes, mood disorders, and substance abuse.",
      Likes: "1000",
    },
    {
      Title: " Addicted to caffeine? This is how it affects your body",
      CategoryName: "Fitness",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://images.hindustantimes.com/img/2022/03/13/550x309/3ef55a50-8982-11eb-9525-7608459b6ae4_1616247873984_1647157155288.jpg",
      BlogContent:
        "Caffeine doesnt actually give you any energy. It makes you feel more awake so you think you have more, Pooja busted caffeine myths.",
      Likes: "800",
    },
  ]);

  const [food, setFood] = useState([
    {
      Title:
        " Consuming Lentils And Grains May Increase Life Expectancy By 8 To 13 Years: Study",
      CategoryName: "Food",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/whole-grains_625x300_1530163447701.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      BlogContent:
        "A recent study shows how eating whole grains and legumes could increase life expectancy by up to 13 years!",
      Likes: "500",
    },
    {
      Title: "5 Velvety Soft Malai Tikka Recipes For Mid-Week Indulgence",
      CategoryName: "Food",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/2022-03/oimkg58o_tikka_625x300_14_March_22.jpg",
      BlogContent:
        "These malai tikka recipes have a robust and velvety flavour that melts in your mouth in every bite. ",
      Likes: "1K",
    },
    {
      Title:
        " How Trust Should Be Built: IIM Alumni' Tag On Milk Packet Leaves Twitter Divided",
      CategoryName: "Food",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/2022-03/ogefp46_milk-packet_625x300_14_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      BlogContent:
        "A Twitter user named Namanbir Singh shared picture of the milk packet that had Founded by IIM Alumni written on it. Read on to know how Twitter reacts.",
      Likes: "400",
    },
    {
      Title:
        " This Maharashtrian Rumali Khakra Has Gone Viral Among Desi Foodies; Here's Why",
      CategoryName: "Food",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/2022-03/qch55g1g_rumali-khakhra_625x300_14_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      BlogContent:
        "Inspired by two popular dishes - the Gujarati khakhra and rumali roti - the rumali khakhra is a special Maharashtrian roti with a unique appearance.",
      Likes: "1K+",
    },
    {
      Title:
        " How To Make Kariwari Mutton Gassi: A Lip-Smacking Dish From Karwar You Must Try",
      CategoryName: "Food",
      PublishedDate: "March 11 2022",
      ImageAsset:
        "https://c.ndtvimg.com/2022-03/g6eq8pa8_mutton-curry_625x300_10_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
      BlogContent:
        "This delicious mutton recipe comes from the region of Karwar. This cuisine is unique because it holds on to its traditional roots despite certain influences from Portuguese.",
      Likes: "708K",
    },
  ]);

  return (
    <BlogContext.Provider
      value={{
        value1: [bollywood, setBollywood],
        value2: [hollywood, setHollywood],
        value3: [technology, setTechnology],
        value4: [fitness, setFitness],
        value5: [food, setFood],
      }}
    >
      {" "}
      {props.children}{" "}
    </BlogContext.Provider>
  );
};
