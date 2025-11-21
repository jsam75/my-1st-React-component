import staffyImage from "./assets/staffy.PNG"

/* Creating a reusable Card component that displays an image and some text. 
<img>
<h2>
<p>
*/

function Card (){
return (
    <>
    <img src={staffyImage} />
    <h2>Sage the Staffy</h2>
    <p>This is Sage, a lovable Staffordshire Bull Terrier known for her friendly nature and boundless energy. She enjoys long walks, playing fetch, and cuddling with her favorite humans.</p>
    </>
)
}

export default Card