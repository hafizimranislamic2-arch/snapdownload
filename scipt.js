
const form = document.getElementById("download-form");
const input = document.getElementById("media-url");
const status = document.getElementById("status");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    try{
      const url = new URL(input.value.trim());

      if(!["https:","http:"].includes(url.protocol)){
        throw new Error("Invalid URL");
      }

      window.open(url.href,"_blank","noopener,noreferrer");
      status.textContent =
        "Link opened. Download availability depends on the source.";
    }catch(error){
      status.textContent = "Please enter a valid URL.";
    }
  });
}

const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();
