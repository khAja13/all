// document.getElementById("navbar__header").onclick = async function() {
//     try {
//         const response = await fetch('http://localhost:4502/content/newsportal/us/en/mini-project.html?wcmmode=disabled');
//         const data = await response.text();
//         try {
//             await navigator.clipboard.writeText(data);
//             console.log("copied to clipboard");
//         } catch (err) {
//             alert("failed to copy page source")
//         }
//     } catch (err) {
//         alert("failed to fetch page")
//     }
// };
