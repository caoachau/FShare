export interface News {
    id: number
    title: string
    description: string
    content: string
    author: string
    authorAvatar?: string
    publishDate: string
    category: "featured" | "new" | "trending" | "popular"
    tag: string
    image: string
    views: number
    likes: number
    readTime: string
    tags?: string[]
}

export const newsData: News[] = [
    {
        id: 1,
        title: "8 AI and machine learning trends to watch in 2025",
        description: "AI agents, multimodal models, an emphasis on real-world results -- learn about the top AI and machine learning trends and what they mean for businesses in 2025.",
        content: `
      <h2>8 AI and machine learning trends to watch in 2025</h2>
      <p>Generative AI is at a crossroads. It's now more than two years since ChatGPT's launch, and the initial optimism about AI's potential is decidedly tempered by an awareness of its limitations and costs.
      <p>The 2025 AI landscape reflects that complexity. While excitement still abounds -- particularly for emerging areas, like agentic AI and multimodal models -- it's also poised to be a year of growing pains.</p>

<p>Companies are increasingly looking for proven results from generative AI, rather than early-stage prototypes. That's no easy feat for a technology that's often expensive, error-prone and vulnerable to misuse. And regulators will need to balance innovation and safety, while keeping up with a fast-moving tech environment.

Here are eight of the top AI trends to prepare for in 2025</p>
      </p>
      
      <h3>1. Hype gives way to more pragmatic approaches</h3>
      <p>Since 2022, there's been an explosion of interest and innovation in generative AI, but actual adoption remains inconsistent. Companies often struggle to move generative AI projects, whether internal productivity tools or customer-facing applications, from pilot to production.</p>
    
      
      <p>Although many businesses have explored generative AI through proofs of concept, fewer have fully integrated it into their operations. In a September 2024 research report, Informa TechTarget's Enterprise Strategy Group found that, although over 90% of organizations had increased their generative AI use over the previous year, only 8% considered their initiatives mature.</p>
      <p>"The most surprising thing for me [in 2024] is actually the lack of adoption that we're seeing," said Jen Stave, launch director for the Digital Data Design Institute at Harvard University. "When you look across businesses, companies are investing in AI. They're building their own custom tools. They're buying off-the-shelf enterprise versions of the large language models (LLMs). But there really hasn't been this groundswell of adoption within companies."</p>
      
      <p>One reason for this is AI's uneven impact across roles and job functions. Organizations are discovering what Stave termed the "jagged technological frontier," where AI enhances productivity for some tasks or employees, while diminishing it for others. A junior analyst, for example, might significantly increase their output by using a tool that only bogs down a more experienced counterpart.</p>
        <p>"Managers don't know where that line is, and employees don't know where that line is," Stave said. "So, there's a lot of uncertainty and experimentation."</p>
      <p>Despite the sky-high levels of generative AI hype, the reality of slow adoption is hardly a surprise to anyone with experience in enterprise tech. In 2025, expect businesses to push harder for measurable outcomes from generative AI: reduced costs, demonstrable ROI and efficiency gains</p>
      <h3>2. Generative AI moves beyond chatbots</h3>
      <p>When most laypeople hear the term generative AI, they think of tools like ChatGPT and Claude powered by LLMs. Early explorations from businesses, too, have tended to involve incorporating LLMs into products and services via chat interfaces. But, as the technology matures, AI developers, end users and business customers alike are looking beyond chatbots.</p>
         <p></p>
            <p>"People need to think more creatively about how to use these base tools and not just try to plop a chat window into everything," said Eric Sydell, founder and CEO of Vero AI, an AI and analytics platform.</p>
               <p>This transition aligns with a broader trend: building software atop LLMs rather than deploying chatbots as standalone tools. Moving from chatbot interfaces to applications that use LLMs on the back end to summarize or parse unstructured data can help mitigate some of the issues that make generative AI difficult to scale.</p>
                  <p>"[A chatbot] can help an individual be more effective ... but it's very one on one," Sydell said. "So, how do you scale that in an enterprise-grade way?"</p>
                     <p>Heading into 2025, some areas of AI development are starting to move away from text-based interfaces entirely. Increasingly, the future of AI looks to center around multimodal models, like OpenAI's text-to-video Sora and ElevenLabs' AI voice generator, which can handle nontext data types, such as audio, video and images.</p>
                        <p>"AI has become synonymous with large language models, but that's just one type of AI," Stave said. "It's this multimodal approach to AI [where] we're going to start seeing some major technological advancements."</p>
                           <p>Robotics is another avenue for developing AI that goes beyond textual conversations -- in this case, to interact with the physical world. Stave anticipates that foundation models for robotics could be even more transformative than the arrival of generative AI.</p>
                           <p>"Think about all of the different ways we interact with the physical world," she said. "I mean, the applications are just infinite."</p>
      
      <h3>3. AI agents are the next frontier</h3>
      <p>The second half of 2024 has seen growing interest in agentic AI models capable of independent action. Tools like Salesforce's Agentforce are designed to autonomously handle tasks for business users, managing workflows and taking care of routine actions, like scheduling and data analysis.</p>
        <p></p>
          <p>Agentic AI is in its early stages. Human direction and oversight remain critical, and the scope of actions that can be taken is usually narrowly defined. But, even with those limitations, AI agents are attractive for a wide range of sectors.</p>
            <p>Autonomous functionality isn't totally new, of course; by now, it's a well-established cornerstone of enterprise software. The difference with AI agents lies in their adaptability: Unlike simple automation software, agents can adapt to new information in real time, respond to unexpected obstacles and make independent decisions.</p>
              <p>Yet, that same independence also entails new risks. Grace Yee, senior director of ethical innovation at Adobe, warned of "the harm that can come ... as agents can start, in some cases, acting upon your behalf to help with scheduling or do other tasks." Generative AI tools are notoriously prone to hallucinations, or generating false information -- what happens if an autonomous agent makes similar mistakes with immediate, real-world consequences?</p>
                <p>Sydell cited similar concerns, noting that some use cases will raise more ethical issues than others. "When you start to get into high-risk applications -- things that have the potential to harm or help individuals -- the standards have to be way higher," he said./p>
                  <p></p>
                    <p></p>
                    
      <h3>4. Generative AI models become commodities</h3>
       <p>The generative AI landscape is evolving rapidly, with foundation models seemingly now a dime a dozen. As 2025 begins, the competitive edge is moving away from which company has the
best model to which businesses excel at fine-tuning pretrained models or developing specialized tools to layer on top of them.</p>
                    <p>In a recent newsletter, analyst Benedict Evans compared the boom in generative AI models to the PC industry of the late 1980s and 1990s. In that era, performance comparisons focused on incremental improvements in specs like CPU speed or memory, similar to how today's generative AI models are evaluated on niche technical benchmarks.</p>
                     <p>Over time, however, these distinctions faded as the market reached a good-enough baseline, with differentiation shifting to factors such as cost, UX and ease of integration. Foundation models seem to be on a similar trajectory: As performance converges, advanced models are becoming more or less interchangeable for many use cases.</p>
                    <p>In a commoditized model landscape, the focus is no longer number of parameters or slightly better performance on a certain benchmark, but instead usability, trust and interoperability with legacy systems. In that environment, AI companies with established ecosystems, user-friendly tools and competitive pricing are likely to take the lead.</p>
                     
        <h3>5. AI applications and data sets become more domain-specific</h3>             
                     <p>Leading AI labs, like OpenAI and Anthropic, claim to be pursuing the ambitious goal of creating artificial general intelligence (AGI), commonly defined as AI that can perform any task a human can. But AGI -- or even the comparatively limited capabilities of today's foundation models -- is far from necessary for most business applications.</p>
                    <p>For enterprises, interest in narrow, highly customized models started almost as soon as the generative AI hype cycle began. A narrowly tailored business application simply doesn't require the degree of versatility necessary for a consumer-facing chatbot.</p>
                     <p>"There's a lot of focus on the general-purpose AI models," Yee said. "But I think what is more important is really thinking through: How are we using that technology ... and is that use case a high-risk use case?"</p>
                    <p>In short, businesses should consider more than what technology is being deployed and instead think more deeply about who will ultimately be using it and how. "Who's the audience?" Yee said. "What's the intended use case? What's the domain it's being used in?"</p>
                    <p>Although, historically, larger data sets have driven model performance improvements, researchers and practitioners are debating whether this trend can hold. Some have suggested that, for certain tasks and populations, model performance plateaus -- or even worsens -- as algorithms are fed more data.</p>
        
                   <p>"The motivation for scraping ever-larger data sets may be based on fundamentally flawed assumptions about model performance," authors Fernando Diaz and Michael Madaio wrote in their paper "Scaling Laws Do Not Scale." "That is, models may not, in fact, continue to improve as the data sets get larger -- at least not for all people or communities impacted by those models."</p>
    <h3>6. AI literacy becomes essential</h3>
    <p>Generative AI's ubiquity has made AI literacy an in-demand skill for everyone from executives to developers to everyday employees. That means knowing how to use these tools, assess their outputs and -- perhaps most importantly -- navigate their limitations.</p>
     <p>Notably, although AI and machine learning talent remains in demand, developing AI literacy doesn't need to mean learning to code or train models. "You don't necessarily have to be an AI engineer to understand these tools and how to use them and whether to use them," Sydell said. "Experimenting, exploring, using the tools is massively helpful."</p>
      <p>Amid the persistent generative AI hype, it can be easy to forget that the technology is still relatively new. Many people either haven't used it at all or don't use it regularly: A recent research paper found that, as of August 2024, less than half of Americans aged 18 to 64 use generative AI, and just over a quarter use it at work.</p>
       <p>That's a faster pace of adoption compared with the PC or the internet, as the paper's authors pointed out, but it's still not a majority. There's also a gap between businesses' official stances on generative AI and how real workers are using it in their day-to-day tasks.</p>
        <p>"If you look at how many companies say they're using it, it's actually a pretty low share who are formally incorporating it into their operations," David Deming, professor at Harvard University and one of the paper's authors, told The Harvard Gazette. "People are using it informally for a lot of different purposes, to help write emails, using it to look up things, using it to obtain documentation on how to do something."</p>
         <p>Stave sees a role for both companies and educational institutions in closing the AI skills gap. "When you look at companies, they understand the on-the-job training that workers need," she said. "They always have because that's where the work takes place."</p>
<p>Universities, in contrast, are increasingly offering skill-based, rather than role-based, 
education that's available on an ongoing basis and applicable across multiple jobs. 
"The business landscape is changing so fast. You can't just quit and go back and get
 a master's and learn everything new," Stave said. "We have to figure out how to modularize
  the learning and get it out to people in real time."</p>
          
          <h3>7. Businesses adjust to an evolving regulatory environment</h3>
          <p>As 2024 progressed, companies were faced with a fragmented and rapidly changing regulatory landscape. Whereas the EU set new compliance standards with the passage of the AI Act in 2024, the U.S. remains comparatively unregulated -- a trend likely to continue in 2025 under the Trump administration.

"One thing that I think is pretty inadequate right now is legislation [and] regulation around these tools," Sydell said. "It seems like that's not going to happen anytime soon at this point." Stave likewise said she's "not expecting significant regulation from the new administration."

That light-touch approach could promote AI development and innovation, but the lack of accountability also raises concerns about safety and fairness. Yee sees a need for regulation that protects the integrity of online speech, such as giving users access to provenance information about internet content, as well as anti-impersonation laws to protect creators.

To minimize harm without stifling innovation, Yee said she'd like to see regulation that can be responsive to the risk level of a specific AI application. Under a tiered risk framework, she said, "low-risk AI applications can go to market faster, [while] high-risk AI applications go through a more diligent process."

Stave also pointed out that minimal oversight in the U.S. doesn't necessarily mean that companies will operate in a fully unregulated environment. In the absence of a cohesive global standard, large incumbents operating in multiple regions typically end up adhering to the most stringent regulations by default. In this way, the EU's AI Act could end up functioning similarly to GDPR, setting de facto standards for companies building or deploying AI worldwide.

<h3>8. AI-related security concerns escalate</h3>
<p>The widespread availability of generative AI, often at low or no cost, gives threat actors unprecedented access to tools for facilitating cyberattacks. That risk is poised to increase in 2025 as multimodal models become more sophisticated and readily accessible.<br>

In a recent public warning, the FBI described several ways cybercriminals are using generative AI for phishing scams and financial fraud. For example, an attacker targeting victims via a deceptive social media profile might write convincing bio text and direct messages with an LLM, while using AI-generated fake photos to lend credibility to the false identity.<br>

AI video and audio pose a growing threat, too. Historically, models have been limited by telltale signs of inauthenticity, like robotic-sounding voices or lagging, glitchy video. While today's versions aren't perfect, they're significantly better, especially if an anxious or time-pressured victim isn't looking or listening too closely.<br>

Audio generators can enable hackers to impersonate a victim's trusted contacts, such as a spouse or colleague. Video generation has so far been less common, as it's more expensive and offers more opportunities for error. But, in a highly publicized incident earlier this year, scammers successfully impersonated a company's CFO and other staff members on a video call using deepfakes, leading a finance worker to send $25 million to fraudulent accounts.<br>

Other security risks are tied to vulnerabilities within models themselves, rather than social engineering. Adversarial machine learning and data poisoning, where inputs and training data are intentionally designed to mislead or corrupt models, can damage AI systems themselves. To account for these risks, businesses will need to treat AI security as a core part of their overall cybersecurity strategies.<br>

Lev Craig covers AI and machine learning as site editor for TechTarget's Enterprise AI site. Craig graduated from Harvard University with a bachelor's degree in English and has previously written about enterprise IT, software development and cybersecurity.</p>
           

`,
        author: "Lew Craig",
        authorAvatar: "https://ui-avatars.com/api/?name=Lew Craig&background=64748b&color=fff",
        publishDate: "2025-03-01",
        category: "featured",
        tag: "FEATURED",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
        views: 15420,
        likes: 342,
        readTime: "8 phút đọc",
        tags: ["Machine learning", "AI"],
    },
    {
        id: 2,
        title: "Công nghệ có thể tạo nên một tương lai mới cho những lao động tuyến đầu  ",
        description: "Hôm nay, Microsoft đã công bố Báo cáo Đặc biệt về Chỉ số Xu hướng Công việc với chủ đề  “Công Nghệ Có Thể Mở Ra Tương Lai Mới Cho Người Lao Động Tuyến Đầu”, và các tính năng mới của Microsoft Teams và Microsoft Viva được thiết kế cho hàng triệu lao động tuyến đầu.",
        content: `
      <h2>Công nghệ có thể tạo nên một tương lai mới cho những lao động tuyến đầu  </h2>
      <p>Hôm nay, Microsoft đã công bố Báo cáo Đặc biệt về Chỉ số Xu hướng Công việc với chủ đề  “Công Nghệ Có Thể Mở Ra Tương Lai Mới Cho Người Lao Động Tuyến Đầu”, và các tính năng mới của Microsoft Teams và Microsoft Viva được thiết kế cho hàng triệu lao động tuyến đầu.<br>
      Trên thế giới có khoảng 2 tỷ lao động tuyến đầu, tương đương 80% lực lượng lao động toàn cầu, và có đến 88% các tổ chức trên thế giới đang tuyển dụng nhân sự cho các vị trí này. Các doanh nghiệp đang ngày càng đầu tư nhiều hơn vào các công cụ số cho lực lượng lao động tuyến đầu để có thể hiện đại hóa quy trình, nâng cao hiệu suất cũng như cải thiện văn hóa và giao tiếp tại nơi làm việc. Microsoft cho biết tỉ lệ sử dụng nền tảng cộng tác Microsoft Teams thường xuyên ở những lao động tuyến đầu hàng tháng đã tăng đáng kể, 400% kể từ tháng 3 năm 2020.<br>

      Báo cáo Đặc biệt về Chỉ số Xu hướng Công việc năm nay được thực hiện từ những cuộc khảo sát với 9.600 nhân viên và nhà quản lý tuyến đầu thuộc 8 ngành công nghiệp khác nhau trên thế giới. Kết quả khảo sát đã chỉ ra những thách thức đang ảnh hưởng đến gần như mọi doanh nghiệp hiện nay và trong khi công nghệ không phải là giải pháp duy nhất, báo cáo cũng cho thấy cơ hội để các công cụ số có thể giảm bớt gánh nặng cho những người lao động thiết yếu này:</p>
      
      <p>
      <span>Văn hóa quan tâm chính là nguồn năng lượng mới cho tuyến đầu</span>: 76% người lao động cảm thấy gắn kết với nhau, nhưng hơn 60% cho rằng công ty của họ nên ưu tiên văn hóa và giao tiếp từ cấp cao nhất. Ngoài ra, 51% những người ở các vị trí không thuộc ban quản lý tuyến đầu đang không cảm thấy được đánh giá như nhân viên – ở Úc, Ấn Độ và Nhật Bản, con số này lần lượt là 52%, 23% và 75%.<<br>
        <span>Nhân viên tuyến đầu đang ở giai đoạn “thay đổi“</span>: Trong bối cảnh của Cuộc Cải Tổ Lớn, các lao động tuyến đầu thường lấy mức lương và phúc lợi tốt hơn, sự cân bằng giữa công việc với cuộc sống và tính linh hoạt là những lý do để họ cân nhắc thay đổi công việc. Phát triển kỹ năng cũng là một yếu tố quan trọng đối với những người lao động tuyến đầu ở Ấn Độ.<<br>
        <span>Sự lạc quan về công nghệ đang gia tăng</span>: 63% lao động tuyến đầu cảm thấy hào hứng với những cơ hội việc làm mà công nghệ tạo ra, và công nghệ cũng đứng thứ ba trong danh sách các yếu tố mà người lao động cho rằng có thể giúp họ giảm căng thẳng tại nơi làm việc. Tại châu Á:<<br>
        <ul>
        <p>
        Lao động tuyến đầu tại Úc sử dụng công nghệ để giúp họ lên lịch cho các thành viên trong nhóm (33%), giới thiệu các thành viên mới trong nhóm (32%) và ngắt kết nối ngoài phạm vi công việc (30%).<br>
        Tại Ấn Độ, lao động tuyến đầu đang tìm kiếm công nghệ để giúp họ sử dụng VR/AR (Thực tế Ảo/Thực tế Tăng cường) trong nhóm (52%), cập nhật thời gian thực (51%), lên lịch cho các thành viên trong nhóm (51%), quản lý lịch trình (51%) và giao tiếp với bên ngoài (51%).<br>
        Còn tại Nhật Bản, công nghệ giúp lao động tuyến đầu tự động hóa các công việc lặp đi lặp lại (23%), kết nạp các thành viên mới trong nhóm (20%), lên lịch cho các thành viên trong nhóm (19%), tiết kiệm ứng dụng hơn (19%) và giảm sử dụng thiết bị hơn (19%).<br>
        </p>
        </ul>
        <p>
        <span>Cơ hội để thu hẹp khoảng cách trong đào tạo công nghệ</span>: Có 46% lao động tuyến đầu cảm thấy áp lực khi phải thích ứng với công nghệ mới hoặc sợ mất việc – nhưng 55% cho rằng họ phải học công nghệ mới ngay lập tức, dù không được đào tạo chính thức hoặc thực hành. Tại châu Á, tỉ lệ này là 51% đối với Úc, 56% đối với Ấn Độ, và 66% đối với Nhật Bản.<br>
        </p> <p>
        Hôm nay, Microsoft cũng giới thiệu các sản phẩm mới cũng như các tính năng được thiết kế đặc biệt nhằm hỗ trợ lao động tuyến đầu trong Teams và Viva, nền tảng trải nghiệm dành cho nhân viên của Microsoft ra mắt đầu năm 2021.<br>

        <ul>
        <p>
        Microsoft đang tăng cường mối quan hệ chiến lược với Zebra Technologies Corp., một công ty hàng đầu thế giới về các giải pháp số sáng tạo, bao gồm phần mềm và phần cứng như máy tính di động Android dành cho lực lượng lao động tuyến đầu. Cả hai công ty đang cung cấp ứng dụng Teams Walkie Talkie trên nhiều loại máy tính di động Zebra, bao gồm nút push-to-talk (PTT) chuyên dụng để truy cập chức năng Teams Walkie Talkie trên thiết bị của Zebra. Ứng dụng Teams Walkie Talkie PTT kỹ thuật số hiện đã có mặt cả các thiết bị di động iOS.<br>
        Microsoft đang mở rộng khả năng tích hợp của Teams với Zebra Reflexis™, sẽ kết nối các giải pháp Quản lý lực lượng lao động của Reflexis với ứng dụng Shift của Teams. Sự tích hợp mới này sẽ hợp thức hóa các yêu cầu lên lịch thay đổi và xin nghỉ trong Teams, giúp người quản lý dễ dàng phê duyệt.<br>
        Tính năng xếp lịch hẹn theo kế hoạch cho các cuộc gặp trực tuyến hiện đã có mặt tại Teams, cung cấp một vị trí để cập nhật thời gian thực về thời gian chờ đợi, các cuộc hẹn bị lỡ và sự chậm trễ của nhân viên nhằm tạo ra trải nghiệm minh bạch và thoải mái hơn cho khách hàng và bệnh nhân.<br>
        Ứng dụng Viva Connections trong Microsoft Teams kết nối lao động tuyến đầu với văn hóa công ty, tài nguyên và công cụ, tin tức và các nhóm nhân viên trong quy trình làm việc. Việc tích hợp cùng các đối tác chiến lược như Workday và Espression giúp việc tiếp cận các nguồn lực quan trọng trở nên dễ dàng hơn và tập hợp các tác vụ như bảng lương và nguồn nhân sự vào một vị trí.<br>
        Ứng dụng Viva Learning cho phép lao động tuyến đầu khám phá, chia sẻ và theo dõi nội dung học tập từ Microsoft Teams – giúp toàn bộ cán bộ công nhân viên của công ty cập nhật các chương trình đào tạo được đề xuất và yêu cầu một cách dễ dàng hơn. Các bản cập nhật mới giúp việc chỉ định học tập từ các giải pháp đối tác như SAP SuccessFactors, Cornerstone OnDemand và Saba Cloud trở nên dễ dàng hơn. Và quan hệ đối tác với các nhà cung cấp dịch vụ học tập như EdCast và OpenSesame sẽ cung cấp thư viện nội dung phong phú giúp lao động tuyến đầu nâng cao kỹ năng trong quy trình làm việc với nội dung học tập phù hợp.<br>
        Trong lĩnh vực CNTT, việc quản lý thiết bị được cải tiến giúp đảm bảo rằng các thiết bị dùng chung có thể được bảo mật và định vị dễ dàng khi bị thất lạc.<br>
        </p>
        </ul>
        <p>Bà Emma Williams, Phó Chủ tịch tập đoàn Microsoft, cho biết: “Đại dịch đang định hình lại công việc cho lực lượng lao động với tốc độ nhanh hơn chúng ta từng thấy. Và việc tăng cường sức mạnh cho các lao động tuyến đầu trong tiến trình chuyển đổi số là một điều thiết yếu. Cùng với các đối tác của mình, chúng tôi đang trang bị cho lao động tuyến đầu những công cụ cho phép họ vừa có khả năng duy trì kết nối với đội nhóm và ban lãnh đạo công ty, vừa vẫn có thể tập trung cho khách hàng hoặc công việc hiện tại. Nếu làm tốt, chúng tôi tin rằng công nghệ có thể hiện đại hóa quy trình, nâng cao hiệu suất đồng thời cải thiện văn hóa và giao tiếp tại nơi làm việc.”

        Ngoài ra, vào ngày 1 tháng 2 tới đây, nền tảng Đám mây cho ngành Bán lẻ – Microsoft Cloud for Retail – sẽ ra mắt. Nền tảng này sẽ đẩy nhanh tốc độ phát triển kinh doanh bằng cách cung cấp các giải pháp bán lẻ đáng tin cậy được tích hợp với những hệ thống sẵn có của các nhà bán lẻ. Nó bắt đầu bằng việc hợp nhất các nguồn dữ liệu khác nhau trong hành trình từ đầu đến cuối của người mua sắm, cho phép các nhà bán lẻ tối đa hóa giá trị dữ liệu của họ, từ đó mang lại một cái nhìn tổng thể về người tiêu dùng. Sau khi được kết nối, dữ liệu và AI sẽ giúp các nhà bán lẻ hiểu rõ hơn và nâng cao trải nghiệm mua sắm của người tiêu dùng. Đối với việc cung cấp các trải nghiệm phù hợp và hợp lý hơn trong toàn bộ chuỗi giá trị bán lẻ, các nhà bán lẻ có thể xây dựng một chuỗi cung ứng bền vững theo thời gian thực. 
        Giải pháp này cũng bao gồm các tính năng của Teams và Viva được công bố ngày hôm nay, tất cả đều hướng tới việc tăng cường khả năng cho các đối tác bán hàng.
        </p>
        </p>
        </p>
    `,
        author: "Microsoft Vietnam Communications",
        authorAvatar: "https://ui-avatars.com/api/?name=Microsoft Vietnam Communications&background=64748b&color=fff",
        publishDate: "2022-01-14",
        category: "featured",
        tag: "FEATURED",
        image: "https://msftstories.thesourcemediaassets.com/sites/463/2022/01/MSFT_WTI_FLW_hero_desktop_1440x790.jpg",
        views: 12350,
        likes: 287,
        readTime: "6 phút đọc",
        tags: ["Tech","Microsofft Viet Nam", ],
    },
    {
        id: 3,
        title: "Ericsson, Supermicro thúc đẩy kết nối doanh nghiệp cho các hệ thống AI biên",
        description: "Nhà cung cấp công nghệ truyền thông toàn cầu và công ty dịch vụ CNTT được tối ưu hóa ứng dụng hợp tác để đơn giản hóa và đẩy nhanh việc triển khai AI biên bằng cách kết hợp kết nối 5G với khả năng tính toán AI đã được xác thực trước",
        content: `
      <p>
      Khi nhu cầu điện toán biên tăng đột biến, thúc đẩy các trường hợp sử dụng trí tuệ nhân tạo (AI)
       đòi hỏi xử lý dữ liệu thời gian thực, độ trễ thấp ngoài trung tâm dữ liệu, Ericsson và Supermicro
        đã công bố họ sẽ tìm hiểu về sự hợp tác để tạo ra một gói truyền thông dựa trên 5G nhằm triển khai 
        nhanh chóng nhiều ứng dụng biên AI và hỗ trợ các lĩnh vực như bán lẻ, sản xuất, chăm sóc sức khỏe và cơ sở hạ tầng thông minh,
       đặc biệt là trong các môi trường mà kết nối có dây không phải là lựa chọn khả thi.<br>
       
       
       Khi tạo ra dịch vụ chung, nhà cung cấp công nghệ truyền thông toàn cầu và 
       công ty dịch vụ CNTT tổng thể được tối ưu hóa cho ứng dụng cho biết họ đang làm việc trong một thế giới mà
        AI đang được tích hợp vào nhiều chức năng kinh doanh khác nhau, với nhiều ứng dụng AI yêu cầu thời gian phản hồi có độ trễ thấp.<br>
       
       
       Họ lưu ý rằng nghiên cứu của IDC dự báo rằng chi tiêu cho Edge toàn cầu sẽ đạt 232 tỷ đô la vào năm 2025, 
       do đó có lý do chính đáng để tham gia vào một sự hợp tác chiến lược nhằm đẩy nhanh việc triển khai AI Edge.<br>

Họ cho biết sự phát triển này đang dẫn đến nhu cầu về các dịch vụ Edge AI triển khai các mô hình AI
 được đào tạo trước, AI tạo sinh  và AI tác nhân đến biên mạng , bên ngoài trung tâm dữ liệu để xử lý cục bộ. 
 Sự kết hợp giữa công nghệ Supermicro và Ericsson 
nhằm mục đích cho phép các doanh nghiệp triển khai nhanh chóng cơ sở hạ tầng Edge AI cùng với kết nối không dây. <br>

Theo biên bản ghi nhớ, hai công ty cho biết họ sẽ khám phá khả năng kết nối thông qua việc
 kết hợp các dịch vụ không dây 5G doanh nghiệp của Ericsson với các nền tảng Edge AI của Supermicro 
 thành các gói thương mại. Các dịch vụ này sẽ có hai mục tiêu chính: cung cấp các khả năng Edge AI tiên
  tiến tận dụng kết nối mạng 5G như một thuộc tính gia tăng giá trị chính; và đơn giản hóa việc mua sắm
   và triển khai với một dịch vụ thống nhất với khả năng tính toán AI đã được xác thực trước và kết nối 5G.<br>

5G, SD-WAN và các thiết bị bảo mật là những thành phần quan trọng đối với một doanh nghiệp khi kết nối
 có dây truyền thống có thể bất tiện hoặc thậm chí không khả dụng đối với một số triển khai biên này. 
 Trong những tình huống này, 5G có thể đóng vai trò là kết nối WAN chính hoặc thậm chí là kết nối WAN dự phòng 
 cho các triển khai quan trọng đối với doanh nghiệp.<br>

Các ứng dụng công nghiệp cụ thể trong gói bao gồm bán lẻ; nhà máy thông minh và tự động hóa công nghiệp; 
an toàn giao thông; và quản lý chăm sóc sức khỏe. Trong các trường hợp sử dụng bán lẻ, 
gói kết hợp được coi là có thể đẩy nhanh quá trình thanh toán thông qua nhận dạng hình ảnh theo thời gian thực của các mặt hàng, 
tăng cường theo dõi hàng tồn kho và phát hiện và cảnh báo chống trộm.<br>

Các tính năng tự động hóa công nghiệp và nhà máy thông minh cung cấp khả năng giám sát và kiểm soát máy móc công nghiệp bằng cách 
xử lý cục bộ dữ liệu cảm biến và camera, đồng thời cung cấp khả năng tăng cường an toàn giao thông bằng cách phân 
tích dữ liệu trực tiếp từ các nguồn camera và cảm biến để quản lý giao thông theo thời gian thực. 
Khả năng quản lý chăm sóc sức khỏe đã được bổ sung để hỗ trợ các hoạt động như quản lý hàng tồn kho đúng lúc để giảm 
lãng phí và đảm bảo nguồn cung cấp y tế quan trọng luôn sẵn có.<br>

Mory Lin, phó chủ tịch phụ trách Internet vạn vật/nhúng và điện toán biên tại Supermicro cho biết: 
"Supermicro cung cấp các giải pháp tiên tiến cho phép các doanh nghiệp khai thác sức mạnh của AI tại biên".<br>

Ông nói thêm: “Nền tảng điện toán của chúng tôi kết hợp với công nghệ 5G của Ericsson sẽ cho phép các doanh nghiệp 
và tổ chức khu vực công mở rộng phạm vi ứng dụng AI của họ ở những nơi mà công nghệ có dây không phải là lựa chọn khả thi, 
chẳng hạn như giao lộ thông minh, sản xuất công nghiệp và cơ sở hạ tầng từ xa”.<br>

Jonathan Fischer, phó chủ tịch OEM toàn cầu và các đối tác nhúng tại Ericsson, cho biết: 
“[Công nghệ biên WAN của Ericsson đã] cho phép các doanh nghiệp kết nối mọi thứ, mọi nơi với tốc độ và 
sự nhanh nhẹn. Chúng tôi rất vui mừng được hợp tác với Supermicro để mở rộng tốc độ và sự nhanh nhẹn này 
đến không gian AI biên mới nổi. Cùng nhau, chúng tôi có cơ hội giúp các doanh nghiệp vận hành trí tuệ biên dễ dàng hơn”.<br>
      
</p>
    `,
        author: "Lê Minh Hoàng",
        authorAvatar: "https://ui-avatars.com/api/?name=Le+Minh+Hoang&background=64748b&color=fff",
        publishDate: "2024-01-15",
        category: "new",
        tag: "NEW",
        image: "https://www.computerweekly.com/visuals/German/Hero-Elshad-Karimov-Einstieg-AdobeStock_879947262.jpg",
        views: 18750,
        likes: 456,
        readTime: "10 phút đọc",
        tags: ["Ericsson", "Supermicro",],
    },
    {
        id: 4,
        title: "CEO Nvidia: 'Điện toán lượng tử đang tiến đến điểm ngoặt'",
        description: "Jensen Huang cho rằng điện toán lượng tử sẽ đủ mạnh trong những năm tới để giúp giải quyết một số vấn đề thú vị trên toàn cầu..",
        content: `
      <h2>CEO Nvidia: 'Điện toán lượng tử đang tiến đến điểm ngoặt'</h2>
      <p>
      Jensen Huang cho rằng điện toán lượng tử sẽ đủ mạnh trong những năm tới để giúp giải quyết một số vấn đề thú vị trên toàn cầu.<br>

Tại hội nghị nhà phát triển GTC Paris của Nvidia hôm 11/6, Jensen Huang nhận định, công nghệ điện toán lượng 
tử mà các công ty công nghệ đã phát triển suốt nhiều thập kỷ 
sẽ sớm gặt hái thành công khi các hệ thống nhanh chóng trở nên "mạnh mẽ hơn, đạt hiệu suất cao hơn và bền bỉ hơn".<br>

Huang cũng rất ấn tượng với cộng đồng lớn các công ty điện toán lượng tử ở châu Âu. Ông đã dành thời gian trong chuyến thăm Paris 
lần này để gặp gỡ đại diện của một số công ty, trong đó có Pasqal, startup Pháp nghiên cứu công nghệ lượng tử trung tính.<br>

Việc sử dụng máy tính lượng tử "trong các lĩnh vực có thể giải quyết một số vấn đề thú vị trong những năm tới" đang nằm trong tầm tay,
 Huang cho biết, đồng thời nhấn mạnh những đóng góp của Nvidia như Cuda-Q, nền tảng lai cho phép các nhà phát triển chạy mã lượng tử 
 cùng với hạ tầng điện toán truyền thống. "Đây là thời điểm thực sự thú vị", ông nói.<br>

Máy tính lượng tử sử dụng định luật cơ học lượng tử để giải quyết những vấn đề quá phức tạp với máy tính truyền thống, 
vốn lưu trữ thông tin dưới dạng bit (0 và 1). Thay vào đó, máy tính lượng tử dùng bit lượng tử hay qubit, có thể là 0, 
1 hoặc một giá trị ở giữa. Chúng có thể xử lý khối lượng dữ liệu lớn hơn rất nhiều, thúc đẩy đột phá trong các lĩnh vực như y học, 
khoa học, tài chính. Tuy nhiên, chúng dễ hỏng và dễ tạo ra lỗi nên chưa thể hữu ích và thiết thực.<br>

Hồi tháng 1, CEO Nvidia từng chia sẻ, mốc thời gian 15 năm để hiện thực hóa máy tính lượng tử hữu ích vẫn là quá sớm và
 mốc 20 năm có vẻ khả thi hơn. Tuy nhiên, phát biểu hôm 11/6 cho thấy ông đang lạc quan hơn vể triển vọng của lĩnh vực này.<br>

Hôm 10/6, IBM thông báo đang phát triển máy tính lượng tử quy mô lớn đầu tiên trên thế giới có thể hoạt động không lỗi,
 dự kiến ra mắt năm 2029. Các hãng công nghệ lớn khác như Google, Amazon, Microsoft cũng đạt được một số bước tiến.
  Amazon và Microsoft công bố hai chip lượng tử hồi tháng 2, trong khi Google tung ra chip điện toán lượng tử 
  Willow vào tháng 12 năm ngoái với lời hứa hẹn "mở đường cho máy tính lượng tử quy mô lớn hữu ích".<br>
      
</p>
    `,
        author: "Thu Thảo",
        authorAvatar: "https://ui-avatars.com/api/?name=TT&background=ef4444&color=fff",
        publishDate: "2025-06-14",
        category: "new",
        tag: "NEW",
        image: "https://i1-vnexpress.vnecdn.net/2025/06/12/jensen-huang-ceo-nvidia-comput-2626-3351-1749728342.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=ArHVWuJ4TkcEV6sI1wg8GQ",
        views: 9840,
        likes: 198,
        readTime: "12 phút đọc",
        tags: ["Nvidia", "Điện toán lượng tử"],
    },
    {
        id: 5,
        title: "Việt Nam là quốc gia đầu tiên có Luật Công nghiệp Công nghệ số",
        description: "Ngày 14/6, các đại biểu Quốc hội đã tham gia biểu quyết thông qua Luật Công nghiệp Công nghệ số với 441/445 tán thành (tỷ lệ tán thành 92,26%). Như vậy, Việt Nam là quốc gia đầu tiên có luật này.",
        content: `
      <h2>Việt Nam là quốc gia đầu tiên có Luật Công nghiệp Công nghệ số</h2>
      
      <p>
      
      Luật Công nghiệp Công nghệ số (CNCNS) không chỉ là một đạo luật chuyên ngành, mà còn được kỳ vọng là đòn bẩy thể chế cho quá trình chuyển đổi số quốc gia.<br>

Đây là thời điểm vàng để Việt Nam xây dựng được nền tảng pháp lý chủ động, mở đường cho doanh nghiệp công nghệ trong nước phát triển vững chắc, 
hội nhập sâu rộng và góp phần tạo dựng vị thế mới của Việt Nam trong kỷ nguyên số.<br>

Việt Nam cũng trở thành nước đầu tiên trên thế giới ban hành một bộ luật riêng về lĩnh vực CNCNS.<br>

Luật CNCNS đã kịp thời thể chế hóa được nhiều nội dung quan trọng trong các Nghị quyết số 57-NQ/TW, 
Nghị quyết 68-NQ/TW của Bộ Chính trị, như: Thúc đẩy, ưu đãi, hỗ trợ cho doanh nghiệp công nghệ số phát triển, 
đặc biệt là doanh nghiệp tư nhân; phát triển nguồn nhân lực chất lượng cao, nhân tài công nghệ số;
 phát triển hạ tầng công nghệ số thiết yếu, dùng chung; hỗ trợ khởi nghiệp sáng tạo; 
 xây dựng cơ chế đặt hàng và xây dựng khung pháp lý về thử nghiệm có kiểm soát... <br>

Luật CNCNS không chỉ là một văn bản pháp lý, mà còn là kim chỉ nam giải quyết các bài toán lớn của ngành công nghiệp công nghệ số.<br>

Đây là những thách thức quan trọng nhằm biến công nghệ số thành động lực chính thúc đẩy tăng trưởng kinh tế, 
nâng cao năng lực cạnh tranh quốc gia và cải thiện chất lượng cuộc sống của người dân.<br>

Đồng thời, luật còn giúp Việt Nam định vị mình trong chuỗi giá trị công nghệ toàn cầu,
 cạnh tranh với các nền kinh tế số hàng đầu thế giới.<br>

Bên cạnh đó, Luật CNCNS cũng đưa ra một số bài toán lớn và giải pháp để 
ngành CNCNS trở thành động lực kinh tế chủ đạo với tốc độ tăng trưởng gấp 2-3 lần GDP.<br>

Luật CNCNS đưa ra các chính sách ưu đãi đặc biệt và giải pháp đột phá. Các dự án có 
vốn đầu tư lớn được hưởng ưu đãi giảm thuế thu nhập doanh nghiệp trong nhiều năm, 
hỗ trợ tài chính từ Quỹ đầu tư phát triển và chi phí nghiên cứu phát triển (R&D) được tính gấp đôi,
 thậm chí gấp ba đối với doanh nghiệp nhỏ và vừa.<br>

Thủ tục hành chính được đơn giản hóa thông qua cơ chế phân cấp thẩm quyền thành lập khu
 công nghiệp công nghệ số cho UBND cấp tỉnh và áp dụng chế độ ưu tiên hải quan “luồng xanh”.<br>

Nhà nước ưu tiên đầu tư vào hạ tầng thiết yếu như trung tâm dữ liệu, mạng 5G, 
đồng thời khuyến khích doanh nghiệp tư nhân tham gia phát triển cơ sở hạ tầng hiện đại.<br>

Thị trường nội địa được mở rộng bằng cách thúc đẩy sử dụng sản phẩm công nghệ “Make in Vietnam”
 trong các dự án ngân sách và đặt hàng phát triển công nghệ chiến lược.<br><br>
 
 Tăng tỷ trọng Việt Nam trong ngành CNCNS <br> 
 
<ul>
<p>
Luật CNCNS tập trung nâng cao tỷ trọng sản phẩm công nghệ nội địa trong ngành thông qua các giải pháp chiến lược
 và chính sách hỗ trợ cụ thể.<br>

Doanh nghiệp có vốn đầu tư nước ngoài (FDI) được khuyến khích chuyển giao công nghệ và hợp tác
 với doanh nghiệp trong nước thông qua ưu đãi giảm thuế thu nhập doanh nghiệp trong nhiều năm nếu đáp ứng yêu cầu này.<br>

Doanh nghiệp khởi nghiệp nội địa nhận hỗ trợ 50% kinh phí để mua công nghệ tiên tiến và phát triển mẫu thử, 
giúp nâng cao năng lực sản xuất sản phẩm “Make in Vietnam”.<br>

Các sản phẩm công nghệ số nội địa được ưu tiên sử dụng trong các dự án ngân sách nhà nước, 
đảm bảo thị trường đầu ra ổn định và bền vững.,<br>

Hoạt động nghiên cứu và phát triển (R&D) được hưởng ưu đãi tối đa, bao gồm miễn giảm thuế và hỗ trợ tài chính,
 nhằm thúc đẩy sáng tạo, đổi mới, giúp sản phẩm Việt Nam không chỉ đáp ứng nhu cầu trong nước 
 mà còn đủ sức cạnh tranh trên thị trường quốc tế.<br>

Để thúc đẩy chuyển đổi số và tăng tỷ trọng doanh nghiệp ứng dụng CNCNS, Luật CNCNS triển khai các 
giải pháp toàn diện nhằm nâng cao hiệu quả và khả năng cạnh tranh.<br>

Chương trình phát triển CNCNS hỗ trợ doanh nghiệp thông qua các hoạt động xúc tiến, 
đào tạo kỹ năng số và cung cấp giải pháp công nghệ phù hợp với từng ngành nghề.<br>

Nhà nước cũng hỗ trợ tài chính, chi phí triển khai công nghệ số cho các doanh nghiệp vừa và nhỏ,
 tạo môi trường thuận lợi để công nghệ số thâm nhập sâu rộng vào mọi lĩnh vực kinh tế.<br>

</ul>
<p>
Thúc đẩy doanh nghiệp Việt Nam ra thế giới<br>
<ul>
<p>
Luật CNCNS đặt mục tiêu đưa doanh nghiệp công nghệ số Việt Nam vươn ra thị trường quốc tế, 
gia tăng doanh thu và khẳng định thương hiệu toàn cầu.<br>

Chương trình “Make in Vietnam” được quy phạm hóa, triển khai các hoạt động xúc tiến thương mại và 
hỗ trợ doanh nghiệp mở rộng thị trường nước ngoài.<br>

Sản phẩm công nghệ số nội địa được ưu tiên trong các dự án mua sắm công, 
tạo nền tảng vững chắc để phát triển thị trường trong nước trước khi vươn ra quốc tế.<br>

Các dự án có vốn đầu tư lớn được hưởng ưu đãi giảm thuế thu nhập doanh nghiệp trong nhiều năm, 
hỗ trợ tài chính từ Quỹ đầu tư phát triển, và miễn giảm thuế nhập khẩu thiết bị công nghệ cao.<br>

Đặc biệt, Nhà nước xây dựng mạng lưới đại diện CNCNS Việt Nam tại các thị trường trọng điểm, 
kết hợp với các chương trình hợp tác quốc tế, giúp doanh nghiệp Việt Nam từng bước trở thành các công ty đa quốc gia, 
cạnh tranh sòng phẳng với các tập đoàn công nghệ lớn trên thế giới.<br>
 </p></p></p>
</ul>
</p>
    `,
        author: "Thái Khang",
        authorAvatar: "https://ui-avatars.com/api/?name=Hoang+Thi+Lan&background=ef4444&color=fff",
        publishDate: "2025-06-14",
        category: "new",
        tag: "NEW",
        image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/14/luat-cns-67147.jpg?width=0&s=C4Eq9p_PtkdQEYfdT-jCtQ",
        views: 22100,
        likes: 567,
        readTime: "9 phút đọc",
        tags: ["Công nghệ số","Luật CNCNS"],
    },
    {
        id: 6,
        title:"What will happen to Figma and Adobe XD after the takeover?",
        description: "Articles, Latest Tech, UX News\n" +
            "What will happen to Figma and Adobe XD after the takeover?\n" +
            " \n" +
            " \n" +
            " \n" +
            " \n" +
            "Explore what will happen to Figma and Adobe XD after the $20 billion acquisition. Will Adobe kills off either Figma or Adobe XD?",
        content: `
      <h3>
      1.What is the takeover about?
</h3>
<p>
On September 15, 2022, Adobe announced that it has entered into a merger agreement to acquire Figma for $20 billion in cash and stock.<br>

With Figma’s expected revenue for 2022 at $400 million, Adobe is effectively paying 50 times the revenue 
for Figma at a time when the stock market is tanking.<br>

According to Adobe’s CEO, the combination of Adobe and Figma is transformational and will accelerate
their vision for collaborative creativity.<br>
</p>
<h3>2.What will happen to Figma?</h3>
<p>
Figma is a powerful collaborative prototyping tool, liked by many in the design industry. When the news first broke out, 
many were disappointed that a rising startup is being taken over by a big brand again, just like Facebook’s acquisition 
of Instagram or Google’s acquisition of Youtube.<br>

However, Figma’s CEO has released a statement stressing that Adobe is committed to keeping Figma operating autonomously.<br>

From Adobe’s perspective, Figma and FigJam are promising browser-based tools that Adobe never had. 
Figma caters mostly to the design community while FigJam appeals to anyone who requires a collaborative brainstorming tool.<br>

Figma and FigJam can potentially open up Adobe into the collaboration software market. Moreover,
 Figma is more widely used than Adobe XD. It is unlikely that Adobe will kill Figma in favor of Adobe XD. <br>

On the other hand, Figma will also benefit from Adobe’s technology in digital imaging, video, vector, 3D, AI, 
machine learning, etc.<br>
<h3>3.What will happen to Adobe XD?</h3>
<p>
Adobe sent an email to Adobe Creative Cloud users on September 15, 2022. You can read the email below:<br>
</p>
<ul>
<ul>
<p>
Dear Valued Customer,<br>

We're writing to share some exciting news we announced today. Adobe has entered into a definitive merger agreement to acquire Figma, 
a leading web-first design platform for teams who build products together.<br>
Figma and FigJam make it possible for all stakeholders designing interactive mobile and web applications 
to collaborate through multi-player workflows, sophisticated design systems and a rich extensible developer ecosystem.<br

While we have been reducing our investment in XD, we will continue to support it. We are excited about Figma's vision for 
the future of product design and the potential of our teams coming together to benefit our customers. 
After the transaction closes (expected in 2023), we will share more information.<br>
</p>
</ul>
</ul>
<p>
Adobe has been reducing its investment in XD. It seems like Adobe may have a plan to sunset XD once the Figma deal has completely closed in 2023.<br>

However, if you prefer using Adobe XD, there’s really no rush to migrate to Figma yet since Adobe will likely continue to support it in the near future.<br>
</p>
<h3>Should you move to Penpot just yet?</h3>
<p>
Penpot is an open-source prototyping tool. It is a tiny competitor of Figma or Adobe XD. Some designers have been contemplating ditching both Figma and XD to migrate to Penpot.    <br><br>

If you feel comfortable using either Figma or Adobe XD, we don’t see any reasons to learn a new tool and make your life miserable by migrating all your existing design templates to a new tool.<br><br>
However, if you are an enthusiastic learner and would love to learn new things, just go ahead! And when you get familiar with Penpot, you can always switch between Penpot and Figma/ Adobe XD.<br><br>
</p>
</p>
    `,
        author: "Will T",
        authorAvatar: "https://ui-avatars.com/api/?name=Will T&background=06b6d4&color=fff",
        publishDate: "2024-01-08",
        category: "trending",
        tag: "TRENDING",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
        views: 16890,
        likes: 423,
        readTime: "7 phút đọc",
        tags: ["UX Design", "UI Design", "Articles", "UX News"],
    },
    {
        id: 7,
        title:"Độc quyền: Google, khách hàng lớn nhất của Scale AI, có kế hoạch chia tay sau thỏa thuận với Meta, các nguồn tin cho biết",
        description: " Google có kế hoạch tách khỏi Scale AI khi Meta nắm giữ 49% cổ phần\n" +
            "Microsoft, OpenAI, xAI cũng có kế hoạch rút lui khỏi Scale AI\n" +
            "Thỏa thuận Meta-Scale thúc đẩy các phòng thí nghiệm AI tìm kiếm sự trung lập, thuê người dán nhãn nội bộ",
        content: `
      <p>SAN FRANCISCO, ngày 13 tháng 6 (Reuters) - Alphabet's (GOOGL.O), mở tab mớiGoogle,
       khách hàng lớn nhất của Scale AI, có kế hoạch cắt đứt quan hệ với Scale sau khi có tin tức rằng đối 
       thủ Meta (META.O), mở tab mớiđang nắm giữ 49% cổ phần trong công ty khởi nghiệp dán nhãn dữ liệu AI,
        năm nguồn tin thân cận với vấn đề này cho biết với Reuters.<br>
Một trong những nguồn tin cho biết Google đã có kế hoạch trả cho Scale AI khoảng 200 triệu đô l
a trong năm nay cho dữ liệu đào tạo được gắn nhãn của con người, vốn rất quan trọng để phát triển công nghệ, 
bao gồm các mô hình AI tinh vi hỗ trợ Gemini, đối thủ cạnh tranh ChatGPT của công ty.<br>

    <ul>
    <ul>
    <p>
    | Bản tin Reuters Tariff Watch là hướng dẫn hàng ngày của bạn về tin tức thương mại và thuế quan toàn cầu mới nhất. Đăng ký tại đây.
</p>
    </ul>
</ul><p>
Nguồn tin cho biết thêm, tuần này, gã khổng lồ tìm kiếm đã có cuộc trò chuyện với một số đối thủ của Scale AI khi tìm cách chuyển bớt phần lớn khối lượng công việc đó.<br>
Việc Scale mất đi một lượng lớn doanh nghiệp diễn ra khi Meta nắm giữ cổ phần lớn trong công ty, định giá công ty ở mức 29 tỷ đô la. Scale có giá trị 14 tỷ đô la trước thỏa thuận.<br>
Scale AI có ý định duy trì hoạt động kinh doanh trong khi CEO Alexandr Wang cùng một số nhân viên chuyển sang Meta . Vì hoạt động kinh doanh cốt lõi của công ty tập trung vào một số ít khác
h hàng nên công ty có thể chịu thiệt hại lớn nếu mất đi những khách hàng quan trọng như Google.<br>
Trong một tuyên bố, người phát ngôn của Scale AI cho biết hoạt động kinh doanh của họ, bao gồm hợp tác 
với các công ty lớn và chính phủ, vẫn mạnh mẽ vì họ cam kết bảo vệ dữ liệu khách hàng. Công ty từ chối 
bình luận về thông tin cụ thể với Google.<br>

Các nguồn tin cho biết Scale AI đã thu về 870 triệu đô la doanh thu vào 
năm 2024 và Google đã chi khoảng 150 triệu đô la cho các dịch vụ của Scale AI vào năm ngoái.<br>
Các công ty công nghệ lớn khác là khách hàng của Scale, bao gồm Microsoft (MSFT.O), mở tab mới, cũng đang rút lui. 
Một trong những nguồn tin cho biết xAI của Elon Musk cũng đang tìm cách thoát ra. Theo các nguồn tin thân cận 
với vấn đề này, OpenAI đã quyết định rút lui khỏi Scale cách đây vài tháng, mặc dù công ty này chi ít tiền hơn nhiều
 so với Google. Giám đốc tài chính của OpenAI cho biết vào thứ sáu rằng công ty sẽ tiếp tục hợp tác với Scale AI, 
 với tư cách là một trong nhiều nhà cung cấp dữ liệu của mình.<br>
Các công ty cạnh tranh với Meta trong việc phát triển các mô hình AI tiên tiến lo ngại rằng việc kinh doanh 
với Scale có thể làm lộ các ưu tiên nghiên cứu và lộ trình của họ cho đối thủ, năm nguồn tin cho biết. 
Bằng cách ký hợp đồng với Scale AI, khách hàng thường chia sẻ dữ liệu độc quyền cũng như các sản phẩm nguyên mẫu mà nhân viên của
 Scale đang cung cấp dịch vụ gắn nhãn dữ liệu. Với việc Meta hiện nắm giữ 49% cổ phần, các công ty AI lo ngại rằng một 
 trong những đối thủ chính của họ có thể biết được chiến lược kinh doanh và bản thiết kế kỹ thuật của họ.<br><br>
 
 <p><h3>CÁC ĐỐI THỦ THẤY CƠ HỘI</h3></p>
 <p>
 Phần lớn doanh thu của Scale AI đến từ việc tính phí những người tạo mô hình AI
  tạo ra để cung cấp quyền truy cập vào mạng lưới những người đào tạo con người có 
  kiến ​​thức chuyên môn - từ nhà sử học đến nhà khoa học, một số có bằng tiến sĩ. 
  Con người chú thích các tập dữ liệu phức tạp được sử dụng để "đào tạo sau" các mô hình AI 
  và khi các mô hình AI trở nên thông minh hơn, nhu cầu về các ví dụ tinh vi do con người cung 
  cấp đã tăng vọt và một chú thích có thể tốn tới 100 đô la.<br>
Scale cũng thực hiện gắn nhãn dữ liệu cho các doanh nghiệp như công ty xe tự lái và chính phủ Hoa Kỳ, 
có khả năng sẽ tiếp tục, theo các nguồn tin. Nhưng nguồn tin cho biết, nguồn thu nhập lớn nhất 
của công ty là hợp tác với các nhà sản xuất mô hình AI tạo sinh.<br>
Google đã tìm cách đa dạng hóa các nhà cung cấp dịch vụ dữ liệu của mình trong hơn một năm, 
ba nguồn tin cho biết. Nhưng các động thái của Meta trong tuần này đã khiến Google tìm cách 
loại bỏ Scale AI khỏi tất cả các hợp đồng chính của mình, các nguồn tin cho biết thêm.
 Do cách thức cấu trúc các hợp đồng gắn nhãn dữ liệu, quá trình đó có thể diễn ra nhanh chóng, hai nguồn tin cho biết.<br>

Điều này sẽ tạo cơ hội cho các đối thủ của Scale AI tham gia.<br>
"Thỏa thuận Meta-Scale đánh dấu một bước ngoặt", Jonathan Siddharth, CEO của Turing, một đối thủ cạnh tranh của Scale AI, 
cho biết. "Các phòng thí nghiệm AI hàng đầu đang nhận ra rằng tính trung lập không còn là tùy chọn nữa, mà là điều cần thiết".<br>
Labelbox, một đối thủ cạnh tranh khác, "có thể sẽ tạo ra hàng trăm triệu doanh thu mới" vào cuối năm nay từ những khách hàng rời 
bỏ Scale, Giám đốc điều hành Manu Sharma, nói với Reuters.<br>
Handshake, một đối thủ cạnh tranh tập trung vào việc xây dựng mạng lưới các tiến sĩ và chuyên gia, đã chứng kiến ​​khối 
lượng công việc tăng đột biến từ các phòng thí nghiệm AI hàng đầu cạnh tranh với Meta.<br>
Garrett Lord, CEO của Handshake cho biết: "Nhu cầu của chúng tôi đã tăng gấp ba chỉ sau một đêm sau khi có tin tức này".<br>
Brendan Foody, CEO của Mercor, một công ty khởi nghiệp không chỉ cạnh tranh trực tiếp với
 Scale AI mà còn xây dựng công nghệ để có thể tuyển dụng và thẩm định ứng viên một cách tự động, 
 cho biết nhiều phòng thí nghiệm AI hiện muốn thuê người dán nhãn dữ liệu nội bộ, điều này cho phép dữ liệu của họ được bảo mật.<br>
Được thành lập vào năm 2016, Scale AI cung cấp một lượng lớn dữ liệu được gắn nhãn hoặc dữ liệu đào tạo được quản lý, 
đóng vai trò quan trọng trong việc phát triển các công cụ phức tạp như ChatGPT của OpenAI.
Thỏa thuận Meta sẽ mang lại lợi ích cho các nhà đầu tư của Scale AI, bao gồm Accel và Index Ventures,
 cũng như các nhân viên hiện tại và trước đây của công ty.<br>
Theo thỏa thuận, CEO của Scale AI, Wang, sẽ đảm nhiệm vị trí lãnh đạo các nỗ lực AI của Meta.<br>
Meta đang đấu tranh với nhận định rằng công ty có thể đã tụt hậu trong cuộc đua AI sau khi bộ mô 
hình ngôn ngữ lớn Llama 4 ban đầu  được phát hành vào tháng 4  không đáp ứng được kỳ vọng về hiệu suất.<br>
 </p>  </p>
   </p>  `,
        author: "Anna Tong , Kenrick Cai, Krystal Hu",
        authorAvatar: "https://ui-avatars.com/api/?name=Reuters&background=06b6d4&color=fff",
        publishDate: "2025-06-14",
        category: "popular",
        tag: "Popular",
        image:"data:image/jpeg;base64,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",
        views: 16890,
        likes: 423,
        readTime: "7 phút đọc",
        tags: ["UX Design", "UI Design", "Articles", "UX News"],
    },


    {
        id: 8,
        title:"Trạm lắp ráp thông minh tùy biến theo nhân trắc học, tích hợp giám sát thao tác và hỗ trợ đào tạo phục vụ cải tiến nâng cao hiệu suất làm việc cho công nhân “Smart Workstation - operator 4.0”",
        description: "Lắp ráp thủ công từ lâu đã trở thành một phần không thể thiếu trong chuỗi sản xuất tại Việt Nam, đặc biệt ở các khu công nghiệp trọng điểm như Hải Phòng, Vĩnh Phúc, Bắc Ninh, Hải Dương, Thái Nguyên.... So với các dây chuyền tự động hóa toàn phần đòi hỏi vốn đầu tư lớn, thời gian triển khai dài và chi phí bảo trì cao, trạm lắp ráp thủ công mang lại lợi thế về chi phí ban đầu thấp và khả năng điều chỉnh nhanh chóng theo nhu cầu sản xuất thay đổi. Tuy nhiên, thực tế cho thấy các trạm làm việc truyền " +
            "thống thường không được thiết kế tối ưu theo nhân trắc học, dẫn đến các vấn đề về sức khỏe đối với người lao động.",
        content: `
        <h3>Giới thiệu sản phẩm:</h3><br>
        <p>
        Lắp ráp thủ công từ lâu đã trở thành một phần không thể thiếu trong chuỗi sản xuất tại Việt Nam, đặc biệt ở các khu công nghiệp trọng điểm như Hải Phòng, Vĩnh Phúc, Bắc Ninh, Hải Dương, Thái Nguyên.... So với các dây chuyền tự động hóa toàn phần đòi hỏi vốn đầu tư lớn, thời gian triển khai dài và chi phí bảo trì cao, trạm lắp ráp thủ công mang lại lợi thế về chi phí ban đầu thấp và khả năng điều chỉnh nhanh chóng theo nhu cầu sản xuất thay đổi. Tuy nhiên, thực tế cho thấy các trạm làm việc truyền thống thường không được thiết kế tối ưu theo nhân trắc học, dẫn đến các vấn đề về sức khỏe đối với người lao động.<br>
Việc xem xét nhân trắc học và đảm bảo sự phù hợp giữa trạm lắp ráp với người lao động mang lại những hiệu quả đáng kể đối với hiệu suất làm việc và sức khỏe công nhân. Nghiên cứu của Trisusanto, Bariyah và Kristanto (2020) đăng trên tạp chí Asia-Pacific Journal of Science and Technology đã chứng minh rằng, trong lĩnh vực lắp ráp đá mozaic, các cải tiến công thái học dựa trên dữ liệu nhân trắc học đã dẫn đến sự gia tăng đáng kể về năng suất, đạt mức 200% so với điều kiện ban đầu, đồng thời giảm thiểu mức độ khó chịu từ 80% xuống 30%. Đáng chú ý, thời gian tiêu chuẩn để hoàn thành công việc cũng giảm thiểu một cách có ý nghĩa, xuống còn 18,62 phút và 17,56 phút so với 31,17 phút ban đầu. Hơn nữa, đánh giá RULA (Rapid Upper Limb Assessment) cho thấy tư thế làm việc được cải thiện, với tổng điểm giảm từ 7 xuống 4.<br>
Tương tự, một nghiên cứu của Torkaman (2022) được công bố trên Arch Hyg Sci. về can thiệp công thái học trong ngành sản xuất thiết bị ô tô và điều khiển khí đã ghi nhận những tiến bộ quan trọng. Tỷ lệ công nhân ở mức tiếp xúc an toàn tăng từ 30,70% lên 53,85%, trong khi tần suất công nhân ở mức rủi ro trung bình và cao đều giảm, lần lượt từ 64% xuống 43% và từ 5% xuống 2,5%. Điểm số rủi ro trung bình theo phương pháp ART (Assessment Repetitive Tasks) cũng giảm một cách có ý nghĩa thống kê từ 1,74 xuống 1,48 (P = 0,003). Trong đó, P là p-value, một chỉ số thống kê thể hiện mức độ ý nghĩa của sự khác biệt quan sát được.<br>
Dựa trên nghiên cứu của Realyvásquez-Vargas và cộng sự (2020) đăng trên tạp chí Sustainability, việc tích hợp công thái học và tiêu chuẩn hóa công việc đã mang lại những cải thiện đáng kể trong một môi trường sản xuất khác. Cụ thể, số lượng chuyển động và tư thế cơ thể không hiệu quả đã giảm 66%, thời gian tiêu chuẩn giảm 18,44%, và tỷ lệ sản xuất tăng 63,2%, tương đương với 229 đơn vị mỗi dây chuyền mỗi ngày. Nghiên cứu này cũng chỉ ra sự loại bỏ tình trạng làm thêm giờ, cải thiện cân bằng dây chuyền sản xuất từ 70% lên 97%, và giảm chi phí đơn vị xuống 58,27%.<br>
Tổng hợp những bằng chứng từ các nghiên cứu khoa học khác nhau cho thấy rõ ràng tầm quan trọng của việc áp dụng các nguyên tắc nhân trắc học vào thiết kế trạm lắp ráp. Sự phù hợp giữa trạm làm việc và đặc điểm thể chất của người lao động không chỉ nâng cao hiệu suất và năng suất mà còn đóng vai trò then chốt trong việc giảm thiểu nguy cơ rối loạn cơ xương khớp, qua đó bảo vệ và cải thiện sức khỏe toàn diện của lực lượng lao động.
Để làm rõ thực trạng tại Việt Nam, nhóm nghiên cứu đã tiến hành khảo sát đợt tại 6 tỉnh thành phố trên cả nước, bao gồm Hải Phòng, Vĩnh Phúc, Bắc Ninh, Hải Dương, Thái Nguyên và Khánh Hòa. Tổng cộng, nhóm nghiên cứu đã thu thập và xử lý 147 phiếu khảo sát hợp lệ từ công nhân tại các doanh nghiệp sản xuất. Bên cạnh đó, 20 phiếu khảo sát đã được thu thập từ các nhà quản lý đại diện cho 20 công ty tham gia. Phân tích định lượng cho thấy, một tỷ lệ lớn công nhân, lên đến 57%, đang làm việc trên các trạm không có khả năng tùy chỉnh. Đáng chú ý, đa số công nhân bắt đầu cảm thấy các triệu chứng đau mỏi trong khoảng 4 đến 6 tiếng làm việc. Về nhu cầu, 100% công nhân khảo sát đều bày tỏ mong muốn có trạm lắp ráp tùy biến, với 40% đánh giá là "rất cần thiết" và 60% là "cần thiết". Tuy nhiên, thực tế cho thấy chỉ có 43% công nhân đang được làm việc trên các trạm có khả năng điều chỉnh và 75% đã từng tự điều chỉnh bàn làm việc. Về phía quản lý, 90% nhận thấy sự cần thiết của trạm lắp ráp tùy biến, trong đó 51% cho là "rất cần thiết" và 39% là "cần thiết". Các doanh nghiệp có vốn đầu tư trực tiếp nước ngoài (FDI) lớn tham gia khảo sát bao gồm Công ty TNHH Korg Việt Nam, Công ty TNHH Công nghiệp chính xác Việt Nam, LG Display, Công ty TNHH USI Việt Nam và Công ty Canon Quế Võ. Những kết quả này nhấn mạnh sự cần thiết và nhu cầu cấp bách về việc triển khai các trạm lắp ráp thủ công có khả năng tùy biến theo nhân trắc học trong môi trường sản xuất hiện nay.<br>
Phân tích kết quả thực nghiệm tại trạm lắp ráp cho thấy rằng, trong giai đoạn khảo sát ban đầu với cấu hình trạm cố định, thời gian hoàn thành quy trình lắp ráp 10 sản phẩm ghi nhận sự phân tán đáng kể, dao động từ 960 giây đến 1860 giây. Một quan sát đáng lưu ý là tồn tại mối tương quan giữa hiệu suất và các chỉ số sinh lý, cụ thể là những cá nhân có thời gian hoàn thành nhiệm vụ ngắn hơn thường biểu hiện biên độ dao động nhịp tim thấp hơn. Sau khi tiến hành tùy chỉnh cấu trúc trạm dựa trên các thông số nhân trắc học của đối tượng nghiên cứu, bao gồm chiều cao mặt bàn, độ cao hộp đựng chi tiết và khoảng cách tiếp cận, giai đoạn khảo sát thứ hai đã cho thấy sự biến chuyển tích cực. Cụ thể, tỷ lệ đối tượng tự đánh giá tình trạng sức khỏe ở mức "tốt" sau khi thực hiện công việc đã có sự gia tăng. Đồng thời, phương sai của các yếu tố cấu thành trạm lắp ráp sau cải tiến đã giảm thiểu, cho thấy sự phù hợp giữa thiết kế trạm và đặc điểm nhân trắc học của người lao động đã được nâng cao, từ đó có tiềm năng tối ưu hóa sự thoải mái và hiệu suất lao động. Kết quả sau cải tiến cho thấy 36,2% công nhân cảm thấy thoải mái hơn và năng suất lao động tăng 17% khi sử dụng trạm tùy biến so với trạm truyền thống.<br>
Dự án hướng tới xây dựng một mô hình trạm làm việc thông minh, tích hợp công nghệ hiện đại và yếu tố công thái học nhằm tối ưu hóa hiệu suất lao động, nâng cao chất lượng sản phẩm và cải thiện điều kiện làm việc trong các môi trường sản xuất thủ công. Các mục tiêu cụ thể bao gồm tối ưu hóa hiệu quả làm việc thông qua thiết kế tùy biến và giám sát thao tác theo thời gian thực, nâng cao sức khỏe nghề nghiệp bằng cách điều chỉnh tư thế và cảnh báo sai lệch, hỗ trợ đào tạo và chuyển đổi sản phẩm linh hoạt nhờ hướng dẫn trực quan bằng máy chiếu, đồng thời định hướng phát triển thành giải pháp tiêu chuẩn cho các ngành sản xuất đòi hỏi độ chính xác cao và góp phần vào chiến lược phát triển bền vững của Việt Nam. Trạm lắp ráp thông minh là một hệ thống tích hợp gồm khung cơ khí theo mô-đun, camera giám sát thao tác, máy chiếu hướng dẫn và phần mềm phân tích dữ liệu. Các tính năng chính bao gồm tùy chỉnh theo nhân trắc học dựa trên dữ liệu người Việt, giám sát thao tác thời gian thực bằng camera Kinect để phát hiện sai lệch và cảnh báo, hướng dẫn thao tác trực quan trên bề mặt làm việc. Sản phẩm mang lại giá trị cho người lao động bằng cách nâng cao sự thoải mái, giảm căng thẳng và nguy cơ chấn thương, từ đó tăng sự hài lòng và năng suất cá nhân. Đối với doanh nghiệp, trạm giúp giảm tỷ lệ lỗi sản phẩm, tối ưu hóa chi phí đào tạo và sản xuất, đồng thời nâng cao năng lực cạnh tranh. Về mặt xã hội, dự án thúc đẩy phát triển ngành công nghiệp theo hướng bền vững và nhân văn, phù hợp với định hướng chuyển đổi số và công nghiệp 4.0 tại Việt Nam.<br>
</p>
<h3>Xuất xứ sản phẩm:</h3><br>

<p>Do nhóm sinh viên chuyên ngành Quản lý kỹ thuật công nghiệp - Khoa Máy tàu biển - Trường Đại học Hàng hải Việt Nam nghiên cứu và phát triển.<br>
</p>
<h3>Tính sáng tạo và đổi mới:</h3><br>
<p>
Trong bối cảnh Cách mạng công nghiệp lần thứ tư đang tác động sâu rộng đến lĩnh vực sản xuất toàn cầu, sản phẩm "Trạm lắp ráp thông minh tùy biến theo nhân trắc học, tích hợp giám sát thao tác và hỗ trợ đào tạo nhằm nâng cao hiệu suất làm việc cho công nhân" (Smart Workstation – Operator 4.0) là giải pháp có tính sáng tạo và khả năng ứng dụng cao tại Việt Nam. Sản phẩm hướng đến mục tiêu hiện đại hóa môi trường sản xuất, đồng thời giải quyết các thách thức đặc thù của ngành sản xuất thủ công trong nước. Thông qua việc tích hợp công nghệ nhận dạng hình ảnh, giao diện người – máy và hỗ trợ đào tạo, hệ thống góp phần nâng cao năng suất lao động, cải thiện sức khỏe người vận hành và thúc đẩy sản xuất bền vững.<br>
Sản phẩm đã được cộng đồng khoa học và công nghệ ghi nhận thông qua nhiều giải thưởng danh giá, phản ánh rõ tính mới, khả năng ứng dụng và giá trị thực tiễn. Cụ thể, sản phẩm đã đạt: Giải Nhất Giải thưởng Khoa học và Công nghệ dành cho sinh viên các cơ sở giáo dục đại học năm 2024; Giải Nhất Giải thưởng Nghiên cứu Khoa học Euréka lần thứ 26 năm 2024; Bằng khen cho công trình sáng tạo tiêu biểu toàn quốc do Trung ương Đoàn TNCS Hồ Chí Minh trao tặng; Giải Nhất nghiên cứu khoa học cấp Trường (năm học 2023–2024); và được công nhận là đề tài xuất sắc tại Hội nghị "Sinh viên với công trình nghiên cứu khoa học phục vụ phát triển kinh tế – xã hội TP. Hải Phòng".<br>
Sản phẩm tận dụng hiệu quả các thành tựu của Cách mạng công nghiệp 4.0, bao gồm trí tuệ nhân tạo (AI), thị giác máy tính và cảm biến thông minh, nhằm chuyển đổi trạm lắp ráp thủ công truyền thống thành một hệ thống hiện đại, linh hoạt và hiệu quả. Camera Kinect được sử dụng để giám sát thao tác của người lao động theo thời gian thực, nhận diện tư thế và đưa ra cảnh báo kịp thời khi phát hiện sai lệch. Phần mềm xử lý hình ảnh Spyder, phát triển dựa trên nền tảng OpenCV, ứng dụng các thuật toán AI để nâng cao độ chính xác và giảm thiểu nguy cơ chấn thương nghề nghiệp. Bên cạnh đó, hệ thống còn tích hợp máy chiếu nhằm hiển thị hướng dẫn thao tác trực tiếp trên bề mặt làm việc, giúp công nhân thực hiện thao tác trực quan và giảm thiểu sai sót. Thiết kế mô-đun hóa của trạm cho phép dễ dàng tích hợp Internet of Things (IoT) trong tương lai, phục vụ thu thập dữ liệu, điều khiển và giám sát từ xa.<br>
Sản phẩm thể hiện nhiều điểm khác biệt so với các trạm lắp ráp truyền thống. Cấu trúc mô-đun bằng nhôm định hình cho phép dễ dàng tháo lắp, thay đổi thành phần và tiết kiệm chi phí bảo trì, đồng thời tăng tính linh hoạt trong triển khai. Mô hình sản xuất tùy chỉnh hàng loạt (Mass Customization) được áp dụng nhằm cá nhân hóa trạm theo chỉ số nhân trắc học của công nhân, giúp giảm mệt mỏi và tăng hiệu quả lao động. Việc tích hợp đồng thời các chức năng giám sát thao tác và hướng dẫn trực quan trên bề mặt làm việc đã tạo nên một hệ thống hỗ trợ toàn diện, góp phần nâng cao năng suất và sức khỏe công nhân. Ngoài ra, việc sử dụng phần mềm mã nguồn mở OpenCV không những giúp giảm chi phí bản quyền mà còn tăng khả năng tùy biến và mở rộng hệ thống.<br>
Trạm lắp ráp được thiết kế phù hợp với thực tế sản xuất và điều kiện kinh tế – xã hội tại Việt Nam, đặc biệt là đối với các doanh nghiệp vừa và nhỏ. Sản phẩm có chi phí đầu tư hợp lý, sử dụng linh kiện phổ biến trên thị trường nội địa, dễ dàng tìm kiếm và thay thế. Đội ngũ kỹ sư trong nước hoàn toàn có thể đảm nhiệm việc chế tạo, lắp đặt và bảo trì hệ thống. Cấu trúc mô-đun linh hoạt giúp doanh nghiệp nhanh chóng điều chỉnh quy trình sản xuất theo đơn hàng, đồng thời rút ngắn thời gian đào tạo công nhân. Tính năng tùy chỉnh theo nhân trắc học góp phần cải thiện điều kiện làm việc và sức khỏe nghề nghiệp.<br>

</p>
<h3>Tính ứng dụng:</h3>
<p>
Sản phẩm đã nhận được sự quan tâm và hỗ trợ từ cộng đồng doanh nghiệp. Cụ thể, hai đơn vị đồng tài trợ chính trong giai đoạn phát triển gồm Công ty Cổ phần Công nghệ cao và Dịch vụ phần mềm FaceNet và Công ty Cổ phần Tư vấn cải tiến đầu tư và kết nối Việt-Nhật (VJIP). Đồng thời, Công ty LG Electronics Việt Nam Hải Phòng tài trợ bổ sung để phát triển hệ thống cấp liệu tinh gọn theo nguyên lý Karakuri nhằm nâng cao hiệu quả tích hợp vận hành. Sản phẩm cũng được đánh giá tích cực bởi các doanh nghiệp FDI tại Hải Phòng như Công ty TNHH Universal Scientific Industrial Việt Nam (USI Việt Nam) và Công ty TNHH Điện khí WOLONG Việt Nam. Bên cạnh đó, FaceNet và VJIP cam kết hỗ trợ quảng bá và kết nối sản phẩm đến tệp khách hàng trong lĩnh vực sản xuất công nghiệp. Ngoài ra, dự án còn nhận được hỗ trợ khởi nghiệp từ Công ty Cổ phần Giải pháp Cảng và Hậu cần PORTLOGICS, Chi nhánh Hải Phòng.<br>
Với thiết kế thân thiện và dễ sử dụng, sản phẩm phù hợp với cả công nhân mới và người có kinh nghiệm. Hệ thống hướng dẫn thao tác trực quan, khả năng tùy chỉnh theo nhân trắc học, tính năng giám sát tư thế tự động và phần mềm hỗ trợ đào tạo giúp giảm thời gian làm quen và nâng cao hiệu quả vận hành. Cấu trúc mô-đun cho phép triển khai nhanh, không yêu cầu hạ tầng phức tạp và dễ tích hợp với hệ thống quản lý hiện có. Điều này đặc biệt phù hợp với các doanh nghiệp SME hoặc cơ sở đào tạo có nguồn lực hạn chế.<br>
Nhờ tính linh hoạt và khả năng điều chỉnh, sản phẩm có thể được ứng dụng rộng rãi trong nhiều lĩnh vực, bao gồm sản xuất cơ khí, điện tử, đào tạo nghề, và các dây chuyền lắp ráp quy mô nhỏ. Việc tích hợp các công nghệ mới và khả năng nhân rộng giúp trạm lắp ráp thông minh trở thành một giải pháp thực tiễn và hiệu quả, góp phần thúc đẩy quá trình chuyển đổi số trong sản xuất công nghiệp tại Việt Nam.<br>
</p>
<h3>Tính hiệu quả:</h3>
<p>
Trong bối cảnh ngành công nghiệp sản xuất toàn cầu đang chịu ảnh hưởng sâu sắc từ Cách mạng công nghiệp lần thứ tư, Việt Nam – một quốc gia đang phát triển với lực lượng lao động dồi dào – vẫn phụ thuộc đáng kể vào các phương pháp lắp ráp thủ công. Phương thức này tiếp tục được ưa chuộng nhờ vào chi phí đầu tư ban đầu thấp, tính linh hoạt cao và khả năng thích ứng với nhiều loại hình sản xuất, đặc biệt trong các doanh nghiệp vừa và nhỏ (SME) cũng như các ngành công nghiệp yêu cầu độ chính xác cao như cơ khí và điện tử. Tuy nhiên, các hạn chế về hiệu suất lao động, tỷ lệ lỗi sản phẩm và nguy cơ chấn thương nghề nghiệp đã và đang đặt ra yêu cầu cấp thiết cho quá trình cải tiến phương pháp sản xuất.<br>
Hệ thống được thiết kế để hỗ trợ quá trình lắp ráp thủ công thông qua tích hợp các thành phần công nghệ như camera Kinect, phần mềm xử lý hình ảnh và thiết bị trình chiếu. Nhờ đó, công nhân được hỗ trợ thao tác chính xác, duy trì tư thế làm việc phù hợp và tiếp cận quy trình đào tạo hiệu quả hơn. Các yếu tố công thái học và kỹ thuật được kết hợp nhằm tạo ra môi trường làm việc thân thiện, khoa học và chuyên nghiệp.<br>
Một trong những ưu điểm nổi bật của hệ thống là khả năng tối ưu chi phí, đặc biệt phù hợp với các SME. Với mức đầu tư từ 28 đến 35 triệu đồng, sản phẩm có chi phí thấp hơn nhiều so với các hệ thống tự động hóa toàn phần. Hệ thống trình chiếu và giám sát thao tác giúp rút ngắn thời gian đào tạo và giảm chi phí nhân lực. Thiết kế mô-đun với linh kiện phổ thông dễ thay thế cũng góp phần giảm chi phí bảo trì. Bên cạnh đó, việc ứng dụng phần mềm mã nguồn mở OpenCV giúp tiết kiệm chi phí bản quyền và tạo điều kiện thuận lợi cho doanh nghiệp trong việc tùy biến và cập nhật hệ thống theo nhu cầu thực tế.<br>
Về hiệu quả hoạt động, dữ liệu khảo sát và thử nghiệm thực tế cho thấy năng suất lao động, mức độ hài lòng và thoải mái của công nhân tăng lên. Khả năng tùy chỉnh theo nhân trắc học và hệ thống hướng dẫn thao tác giúp người lao động dễ dàng thích nghi với các yêu cầu sản xuất thay đổi, đồng thời rút ngắn đáng kể thời gian đào tạo.<br>
Ngoài việc nâng cao năng suất, sản phẩm còn cải thiện chất lượng quy trình sản xuất thông qua tính nhất quán và độ chính xác cao trong thao tác. Hệ thống ghi nhận và phân tích dữ liệu thao tác nhằm hỗ trợ công tác giám sát và cải tiến, giúp nhà quản lý đưa ra quyết định dựa trên dữ liệu định lượng thay vì kinh nghiệm chủ quan.<br>
Tính khả thi và hiệu quả của sản phẩm đã được minh chứng qua sự đồng hành và tài trợ của nhiều doanh nghiệp trong và ngoài nước, bao gồm FaceNet, VJIP, LG Electronics Việt Nam Hải Phòng và PORTLOGICS. Ngoài ra, sản phẩm đã được ghi nhận thông qua các giải thưởng học thuật danh giá như Giải Nhất Giải thưởng Khoa học và Công nghệ sinh viên toàn quốc năm 2024 và Giải Nhất Euréka lần thứ 26.<br>
</p>
<h3>Tiềm năng phát triển:</h3>
<p>
Năng lực của đội ngũ tác giả trong việc hiện thực hóa ý tưởng được thể hiện rõ qua quá trình nghiên cứu, thiết kế và chế tạo sản phẩm một cách khoa học và có hệ thống. Với nền tảng chuyên môn từ lĩnh vực Kỹ thuật công nghiệp (IE), đội ngũ nghiên cứu đã tích hợp và ứng dụng hiệu quả các kiến thức liên ngành, từ thiết kế cơ khí tùy chỉnh đến phát triển các phần mềm phân tích dữ liệu sử dụng thư viện mã nguồn mở OpenCV. Quá trình này không những giúp các thành viên bổ sung và hoàn thiện kiến thức chuyên môn mà còn tăng cường khả năng xử lý các vấn đề kỹ thuật phức tạp liên quan đến sản phẩm.<br>
Phương pháp nghiên cứu khoa học được nhóm áp dụng một cách thận trọng và kỹ lưỡng thông qua hai đợt khảo sát thực tế quan trọng. Đợt khảo sát đầu tiên thực hiện trên hơn 150 công nhân tại sáu tỉnh, thành phố công nghiệp lớn của Việt Nam nhằm thu thập dữ liệu nhân trắc học và nhận diện những hạn chế của các trạm lắp ráp truyền thống. Đợt khảo sát thứ hai được tiến hành trên 160 công nhân giả định nhằm đánh giá hiệu quả và xác định các điểm cần cải tiến của sản phẩm sau khi hoàn thành chế tạo. Cách tiếp cận khoa học và thực tiễn này đã phản ánh rõ khả năng thích ứng và tư duy thực nghiệm của đội ngũ.<br>
Về kỹ năng công nghệ, sản phẩm đã tích hợp thành công các công nghệ tiên tiến bao gồm camera Kinect để giám sát thao tác, hệ thống hướng dẫn trực quan thông qua máy chiếu và phần mềm Spyder sử dụng OpenCV để phân tích dữ liệu. Việc sử dụng công nghệ mã nguồn mở này không chỉ góp phần tối ưu hóa chi phí sản xuất mà còn thể hiện rõ khả năng lập trình, sáng tạo và tùy chỉnh công nghệ theo đặc điểm và nhu cầu cụ thể của ngành sản xuất Việt Nam.<br>
Thành quả thực tế mà đội ngũ nghiên cứu đạt được cũng rất đáng ghi nhận. Sản phẩm đã hoàn thiện và nhận được sự chấp thuận đơn đăng ký bảo hộ kiểu dáng công nghiệp (số đơn: 3-2024-01024, ngày 31/5/2024), đồng thời nhóm đang trong quá trình hoàn tất hồ sơ đăng ký bằng sáng chế. Tuy nhiên, nhóm nghiên cứu luôn nhận thức rõ các thành công bước đầu này là nền tảng để tiếp tục phát triển và hoàn thiện hơn nữa trong tương lai, đảm bảo tính bền vững và khả năng ứng dụng rộng rãi của sản phẩm trên thị trường thực tế.<br>
Xét về khía cạnh kinh tế, dự án có những lợi thế nhất định để thu hút đầu tư và mở rộng thị trường. Với tổng chi phí cố định ban đầu dự kiến ở mức hợp lý khoảng 1,23 tỷ VNĐ và chi phí biến đổi chỉ khoảng 19÷24,5 triệu VNĐ mỗi trạm, sản phẩm được định giá bán trong khoảng 28÷35 triệu VNĐ tùy phiên bản, tạo điều kiện thuận lợi cho các doanh nghiệp vừa và nhỏ tiếp cận giải pháp với chi phí hợp lý. Theo kế hoạch sản xuất dự kiến ban đầu là 600 trạm trong 15 tháng đầu tiên, sản phẩm được kỳ vọng đạt doanh thu lên đến 21 tỷ VND và lợi nhuận khoảng 5,07 tỷ VNĐ, tương đương tỷ suất lợi nhuận 24,1%. Giải pháp nghiên cứu chế tạo trạm lắp ráp thông minh và phương án kinh doanh đã thuyết phục được Hội đồng giám khảo vòng bán kết cuộc thi "Học sinh, sinh viên với ý tưởng khởi nghiệp" do Bộ Giáo dục và Đào tạo tổ chức. Hiện tại, dự án đã lọt vào Top 10 lĩnh vực công nghiệp. Vòng chung kết dự kiến sẽ diễn ra từ 18-20/4/2025 tại trường Đại học Sư phạm Kỹ thuật TP Hồ Chí Minh. Điều này khẳng định tiềm năng kinh tế hấp dẫn, đủ sức thuyết phục các nhà đầu tư quan
 tâm đến lĩnh vực sản xuất công nghiệp tiên tiến tại Việt Nam.<br>
</p>
</p>
<h3>Tiêu chí về cộng đồng:</h3>
<p>
Trong bối cảnh Việt Nam hướng đến mục tiêu phát triển bền vững và thúc đẩy chuyển đổi số toàn diện, sản phẩm "Trạm lắp ráp thông minh tùy chỉnh theo thông số nhân trắc học, tích hợp hệ thống giám sát thao tác và hỗ trợ đào tạo nhằm nâng cao năng suất và cải thiện điều kiện lao động" thể hiện rõ nét giá trị xã hội, hướng tới con người, góp phần quan trọng vào phát triển kinh tế - xã hội.<br>
Về khía cạnh kinh tế - xã hội, sản phẩm đã chứng minh khả năng nâng cao đáng kể năng suất lao động. Việc cải thiện năng suất lao động không chỉ gia tăng sản lượng và chất lượng sản phẩm mà còn góp phần cải thiện thu nhập cho công nhân.<<br>
Xét trên phương diện phát triển kinh tế địa phương, chi phí hợp lý của sản phẩm cho phép dễ dàng triển khai và áp dụng vào thực tế sản xuất. Đồng thời, việc triển khai sản phẩm tạo ra cơ hội việc làm trực tiếp và gián tiếp cho người lao động, giúp giảm tỷ lệ thất nghiệp và thúc đẩy sự ổn định xã hội.<br>
Sản phẩm cũng trực tiếp giải quyết các vấn đề tồn tại trong ngành sản xuất thủ công hiện nay, bao gồm việc cải thiện sức khỏe nghề nghiệp nhờ thiết kế nhân trắc học linh hoạt và giám sát tư thế làm việc, từ đó giảm nguy cơ chấn thương và bệnh nghề nghiệp, đặc biệt quan trọng đối với các nhóm lao động yếu thế như phụ nữ. Hệ thống hướng dẫn trực quan cũng giúp rút ngắn đáng kể thời gian đào tạo, qua đó nhanh chóng nâng cao tay nghề và hiệu quả lao động.<br>
Giá trị thiết thực đối với cộng đồng còn thể hiện ở việc nâng cao chất lượng cuộc sống thông qua việc tạo ra thu nhập ổn định và môi trường làm việc an toàn hơn. Sản phẩm cũng thúc đẩy bình đẳng giới và hội nhập xã hội khi hỗ trợ các nhóm yếu thế như lao động nữ, người khuyết tật và đồng bào dân tộc thiểu số tham gia bình đẳng vào thị trường lao động. Đồng thời, sản phẩm góp phần phát triển bền vững cộng đồng thông qua tối ưu hóa việc sử dụng nguồn lực sẵn có, giảm lãng phí và bảo vệ sức khỏe của người lao động.<br>
 </p>      
        `,
        author: "Human-Centric Solutions",
        authorAvatar: "https://ui-avatars.com/api/?name=Human-Centric Solutions&background=06b6d4&color=fff",
        publishDate: "2025-06-14",
        category: "trending",
        tag: "TRENDING",
        image: "data:image/jpeg;base64,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",
        views: 16890,
        likes: 1049,
        readTime: "20 phút đọc",
        tags: ["nhân trắc học", "Xu hướng công nghệ","Smart Workstation"],
    },
]

export const getNewsByCategory = (category: string): News[] => {
  if (category === "all") return newsData
  return newsData.filter((news) => news.category === category)
}

export const getNewsById = (id: number): News | undefined => {
  return newsData.find((news) => news.id === id)
}

export const getRelatedNews = (currentId: number, limit = 3): News[] => {
  return newsData.filter((news) => news.id !== currentId).slice(0, limit)
}

export const searchNews = (query: string): News[] => {
  const lowercaseQuery = query.toLowerCase()
  return newsData.filter(
    (news) =>
      news.title.toLowerCase().includes(lowercaseQuery) ||
      news.description.toLowerCase().includes(lowercaseQuery) ||
      news.author.toLowerCase().includes(lowercaseQuery) ||
      (news.tags && news.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
  )
}
