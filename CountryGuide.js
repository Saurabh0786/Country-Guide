document.getElementById("searchBtn").addEventListener("click",function(){
  const countryInput=  document.getElementById("countryInput").value.trim()

  if(countryInput.length===0){
    alert("Please Enter the Country Name.")
  }

  fetch("https://restcountries.com/v3.1/name/" + countryInput)
  .then(function(response){
    return response.json()
  })
  .then(function(data){ 
//    const country = 
   const country = data.find(function(c)
{
    // console.log(c.name.common.toLowerCase() === countryInput.toLowerCase())
    return c.name.common.toLowerCase() === countryInput.toLowerCase()
    if(!country){
        throw new Error("COUNTRY NOT FOUND.")
    }

})
 console.log(country)
document.getElementById("countryName").textContent = country.name.common;
document.getElementById("countryFlag").src = country.flags.png;
document.getElementById("countryInfo").classList.remove("hide");
document.getElementById("capital").textContent = country.capital;
document.getElementById("population").textContent = country.population.toLocaleString();
document.getElementById("currency").textContent = country.currencies ? Object.values(country.currencies)[0].name: "Not Applicable";
document.getElementById("language").textContent = country.languages ? Object.values(country.languages): "Not Applicable";
document.getElementById("timezone").textContent = country.timezones;
document.getElementById("continent").textContent = country.continents;

  })
  .catch(function(){
    
  })
})