import parse from '../lib/parse'

const string = `{
  "authorsById":{
    "1":{"id":1,"name":"hkellington0","tweets":[@tweetsById.1@,@tweetsById.11@]},
    "2":{"id":2,"name":"dsnaith1","tweets":[@tweetsById.2@,@tweetsById.12@]},
    "3":{"id":3,"name":"ptoffoloni2","tweets":[@tweetsById.6@,@tweetsById.16@]},
    "4":{"id":4,"name":"cdomke3","tweets":[@tweetsById.3@,@tweetsById.13@]},
    "5":{"id":5,"name":"ccauson4","tweets":[@tweetsById.4@,@tweetsById.14@]},
    "6":{"id":6,"name":"mbeverage5","tweets":[@tweetsById.5@,@tweetsById.15@]},
    "7":{"id":7,"name":"tparminter6","tweets":[@tweetsById.7@,@tweetsById.17@]},
    "8":{"id":8,"name":"jgabbitas7","tweets":[@tweetsById.8@,@tweetsById.19@]},
    "9":{"id":9,"name":"cpoulney8","tweets":[@tweetsById.9@,@tweetsById.18@]},
    "10":{"id":10,"name":"wcritten9","tweets":[@tweetsById.10@,@tweetsById.20@]}
  },
  "tweetsById":{
    "1":{"id":1,"text":"lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere", "author":@authorsById.1@},
    "2":{"id":2,"text":"nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy", "author":@authorsById.2@},
    "3":{"id":3,"text":"donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et", "author":@authorsById.4@},
    "4":{"id":4,"text":"egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus", "author":@authorsById.5@},
    "5":{"id":5,"text":"ut ultrices vel augue vestibulum ante ipsum primis in faucibus", "author":@authorsById.6@},
    "6":{"id":6,"text":"tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi", "author":@authorsById.3@},
    "7":{"id":7,"text":"ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere", "author":@authorsById.7@},
    "8":{"id":8,"text":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna", "author":@authorsById.8@},
    "9":{"id":9,"text":"congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue", "author":@authorsById.9@},
    "10":{"id":10,"text":"rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean", "author":@authorsById.10@},
    "11":{"id":11,"text":"velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra", "author":@authorsById.1@},
    "12":{"id":12,"text":"elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac", "author":@authorsById.2@},
    "13":{"id":13,"text":"odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus", "author":@authorsById.4@},
    "14":{"id":14,"text":"magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu", "author":@authorsById.5@},
    "15":{"id":15,"text":"in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum", "author":@authorsById.6@},
    "16":{"id":16,"text":"in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl", "author":@authorsById.3@},
    "17":{"id":17,"text":"vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros", "author":@authorsById.7@},
    "18":{"id":18,"text":"sed nisl nunc rhoncus dui vel sem sed sagittis nam congue", "author":@authorsById.9@},
    "19":{"id":19,"text":"in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra", "author":@authorsById.8@},
    "20":{"id":20,"text":"molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus", "author":@authorsById.10@}
  }
}`

export default parse(string)