const main = document.querySelector("main");

const firstJoke = "Why couldn't the sunflower ride its bike? It lost its petals.";
const secondJoke = "What do you call a pig that does karate? A pork chop.";
const thirdJoke = "What do you call a fake noodle? An impasta.";


const template = `
    <section>
    <h1>My Jokes</h1>
        <ul>
            <li>${firstJoke}</li>
            <li>${secondJoke}</li>
            <li>${thirdJoke}</li>
        </ul>
    </section>
`

const end = document.createElement("p");
end.textContent = "That's all folks!";

main.innerHTML = template;
main.appendChild(end);