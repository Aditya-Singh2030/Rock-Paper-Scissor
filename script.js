//Get DOM Element

const gamecontainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result  img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

userResult.src = cpuResult.src = "rock.png"; 
result.textContent = "Wait..";

console.log(optionImages);

optionImages.forEach((image,index) => {
    image.addEventListener("click" , (e) => {
        image.classList.add("active");

        optionImages.forEach((image2,index2) => {
            //console.log(index,image2);

            index!==index2 && image2.classList.remove("active");
        });

        gamecontainer.classList.add("Start");
        
        let time = setTimeout(() => {
            gamecontainer.classList.remove("Start");
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() *3);

        let cpuImage=["rock.png","paper.png","scissor.png"];
        cpuResult.src=cpuImage[randomNumber];

        let cpuValue = ["R","P","S"][randomNumber];

        let userValue = ["R","P","S"][index];

        let outcomes = {
            RR:"DRAW",
            RP:"CPU",
            RS:"USER",
            PP:"DRAW",
            PR:"CPU",
            PS:"USER",
            SS:"DRAW",
            SR:"CPU",
            SP:"USER",
        }

        let outcomeV = outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeV} Won!!`;
        console.log(outcomeV);

        },2500);
    });
});