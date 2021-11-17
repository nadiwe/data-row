

// const b = document.querySelector('.canva') // Version ohne de



const canva = d3.select('.canva'); // holt di erstellt fläche, das div



const svg = canva.append('svg') // erstelt im div ein svg
.attr('width',"12000")
.attr('height','400');

const objekt = svg.selectAll('g') // wenn rechteck bereits im html existieren



const svg2 = canva.append('svg') // erstelt im div ein svg
.attr('x',270)
.attr('width','12000')
.attr('height','2000');

const objekt2 = svg2.selectAll('g') // wenn rechteck bereits im html existieren

// const rect2 = svg2.selectAll('#now2') // wenn rechteck bereits im html existieren
// const rectDown2 = svg2.selectAll('#futur2') // wenn rechteck bereits im html existieren

// // // const rect = svg.append('rect') //wenn es rechteck im .js erstellt wird



d3.json('future_cities_data.json')
.then(data=>{
    // console.log(data);
var colors =  ['green', 'pink','brown','blue', 'black', 'cyan','red' ]  //properties, eigenschaften des objektes
       
//OBEN________________________________________________________
objekt
.data(data)
.enter()
.append('g')
.attr('class','test')

.append('rect')
.attr('x', (d, i) => i * 55) // value, index oder d,i werden bei der funktion iniziert
.attr('y', (d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5)) //function(d,i){return 200-(d.height*2)} // verschiebt den null punkt von oben links zu y = 100
.attr('width',50)
.attr('height',(d)=> d.Max_Temperature_of_Warmest_Month*5)  //function(d){return d.height*2;}
.attr('fill', function(d,i){ //more then one line - arrow funktion  doesn't work - then we have to write it like this
    var f = i%7;
    return d = colors[f];  
});

//rechteck klein
d3.selectAll('g.test')
.append('rect')
.attr('x',(d,i)=> i*55)
.attr('y', (d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5+d.change_Max_Temperature_of_Warmest_Month*5+5))
.attr('width',50)
.attr('height',(d)=>d.change_Max_Temperature_of_Warmest_Month*5 )
.attr('fill', function(d,i){ //more then one line - arrow funktion  doesn't work - then we have to write it like this
    var f = i%7;
    return d = colors[f];  
})
.style('opacity', 0.2);

//text
d3.selectAll('g.test')
.append('text')
.style('visibility','hidden')
.style('stroke','black')
.style('stroke-weight',4)
.attr('x',(d, i) => i * 55 + 55/2+5)
.attr('y',(d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5 +146)) 
.text(function(d,i){
    return  d.current_city +' '+ 'Max_Temperature_of_Warmest_Month_Now: ' +  d.Max_Temperature_of_Warmest_Month + ' in the future it increases ' + d.change_Max_Temperature_of_Warmest_Month;
});

//senkrecht
d3.selectAll('g.test')
.append('line')
.style("visibility", "hidden")
.style('stroke','black')
.style('stroke-weight',4)
.attr('x1',(d, i) => i * 55 + 55/2)
.attr('x2', (d, i) => i * 55 + 55/2)
.attr('y1',(d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5 +50)) 
.attr('y2',100);

//waagrecht
d3.selectAll('g.test')
.append('line')
.style("visibility", "hidden")
.style('stroke','black')
.style('stroke-weight',4)
.attr('x1',(d, i) => i * 55 + 55/2)
.attr('x2', (d, i) => i * 55 + 55/2 +700)
.attr('y1',(d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5 +140)) 
.attr('y2',(d,i)=> 400-(d.Max_Temperature_of_Warmest_Month*5 +140));


svg
.selectAll('g.test')
.on('mouseenter', function(){
    d3
    .select(this)
    .selectAll('rect')
    .transition()
    .duration('100')
    
    .attr('width',100)
.style('stroke','green');

d3
.select(this)
.selectAll( 'text')
.transition()
.duration('100')
.style('visibility','visible');

d3
.select(this)
.selectAll( 'line')
.transition()
.duration('100')
.style('visibility','visible');

console.log(this);


})

.on('mouseout',function(){
    d3
    .select(this)
    .selectAll('rect')
    .transition()
    .duration('100')
    
    .attr('width',50)
.style('stroke','green');

d3
.select(this)
.selectAll( 'text')
.transition()
.duration('100')
.style('visibility','hidden');

d3
.select(this)
.selectAll( 'line')
.transition()
.duration('100')
.style('visibility','hidden');

});








//OBEN________________________________________________________
objekt2
.data(data)
.enter()
.append('g')
.attr('class','objekt2')
.append('rect')
.attr('x', (d, i) => i * 55) // value, index oder d,i werden bei der funktion iniziert 
.attr('y', 0) //function(d,i){return 200-(d.height*2)} // verschiebt den null punkt von oben links zu y = 100
.attr('width',50)
.attr('height',(d) => d.Annual_Mean_Temperature * 5) // function(d){ return d.height*2;}
.attr('fill', function(d,i){
    var f = i%7;
    return d = colors[f];  
});

//rechteck klein
d3.selectAll('g.objekt2')
.append('rect')
.attr('x',(d,i)=> i*55)
.attr('y', (d,i)=> (d.Annual_Mean_Temperature*5+5))
.attr('width',50)
.attr('height',(d)=>d.change_Annual_Mean_Temperature*5 )
.attr('fill', function(d,i){ //more then one line - arrow funktion  doesn't work - then we have to write it like this
    var f = i%7;
    return d = colors[f];  
})
.style('opacity', 0.2);


//text
d3.selectAll('g.objekt2')
.append('text')
.style('visibility','hidden')
.style('stroke','black')
.style('stroke-weight',4)
.attr('x',(d, i) => i * 55 + 55/2+5)
.attr('y',(d,i)=> (d.Annual_Mean_Temperature*5 +146)) 
.text(function(d,i){
    return  d.current_city +' '+ 'Annual_Mean_Temperature: ' +  d.Annual_Mean_Temperature + ' in the future it increases ' + d.change_Annual_Mean_Temperature;
});

//senkrecht
d3.selectAll('g.objekt2')
.append('line')
.style("visibility", "hidden")
.style('stroke','black')
.style('stroke-weight',4)
.attr('x1',(d, i) => i * 55 + 55/2)
.attr('x2', (d, i) => i * 55 + 55/2)
.attr('y1',300)
.attr('y2',(d,i)=> (d.Annual_Mean_Temperature*5 +50)); 


//waagrecht
d3.selectAll('g.objekt2')
.append('line')
.style("visibility", "hidden")
.style('stroke','black')
.style('stroke-weight',4)
.attr('x1',(d, i) => i * 55 + 55/2)
.attr('x2', (d, i) => i * 55 + 55/2 +700)
.attr('y1',(d,i)=> (d.Annual_Mean_Temperature*5 +152)) 
.attr('y2',(d,i)=> (d.Annual_Mean_Temperature*5 +152));



svg2
.selectAll('g.objekt2')
.on('mouseenter', function(){
    d3
    .select(this)
    .selectAll('rect')
    .transition()
    .duration('100')
    
    .attr('width',100)
.style('stroke','green');

d3
.select(this)
.selectAll( 'text')
.transition()
.duration('100')
.style('visibility','visible');

d3
.select(this)
.selectAll( 'line')
.transition()
.duration('100')
.style('visibility','visible');

console.log(this);


})

.on('mouseout',function(){
    d3
    .select(this)
    .selectAll('rect')
    .transition()
    .duration('100')
    
    .attr('width',50)
.style('stroke','green');

d3
.select(this)
.selectAll( 'text')
.transition()
.duration('100')
.style('visibility','hidden');

d3
.select(this)
.selectAll( 'line')
.transition()
.duration('100')
.style('visibility','hidden');

});
})


















// svg.append('circle') // erstellt im svg ein kreis
// .attr('cx', '50')
// .attr('cy','50')
// .attr('r','30')
// .attr('fill','blue');

// svg.append('rect') // erstellt im svg ein rechteck
// .attr('x','100')
// .attr('y','20')
// .attr('width','200')
// .attr('height','100')
// .attr('fill','red')
// .attr('rx','15' )
// .attr('ry',15 );

// svg.append('line')
// .attr('x1',129 )
// .attr('x2',45 )
// .attr('y1',300 )
// .attr('y2',46 )
// .attr('stroke','gray' );

// svg.append('text')
// .text('hello')
// .attr('fill','green')
// .attr('font-size',123 )
// .attr('x',100 )
// .attr('y',150 );

