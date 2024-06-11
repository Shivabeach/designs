<body id="prime">
	<div id="prime-container">
		<header id="header">
			<?php $this->load->view("menus/main_menu.html");?>
		</header>
		<div id="col-1 corn" class="col">
			<p>Column 1</p>
			<div id="datey"></div>
			<div>
				<h3>Calc %</h3>
				<form>
					<input type="text" class="no1"> <br> <input type="text" class="no2">
					<button class="click">Calc</button><button type="reset">Clear</button>
			</div>
			</form>
			<div class="calculated"></div>
		</div>
		<div id="col-2" class="col">
			<p>Column 2</p>
			<form action="" id="exp">
				<input type="text" id="make" class="make">
				<input type="text" id="take" class="take">
				<button id="sub" type="submit">Submit</button>
			</form>
			<p class="display"></p>
		</div>
		<div id="col-3">Column 3
			<div id="displayContainer" class="fs-3 padding-2"></div>
		</div>
		<div id="col-4" class="col">Content 4
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Exercitationem quam, magni veritatis itaque
				perspiciatis commodi velit consequuntur id ex quia.</p>
			<p>Remove an item from an array. List is the array, the value is passed from the worm or delete button</p>
			<code>function remove(value) {
				list = list.filter((item) => item !== value);
				display.innerHTML = JSON.parse(storedData);
				}</code>
		</div>
		<div id="col-5" class="col">
			<h3>Password Strength</h3>
			<div class="strength-meter" id="strength-meter"></div>
			<input class="password-input" id="password-input" value="" type="text" autofocus aria-laballedby="password">
			<div id="reasons" class="reasons"></div>
		</div>
		<div id="col-6" class="col">
			<div>
				<h3 id="passwordDisplay" class="password-display"></h3>
				<!-- <h3 id="password-entropy"></h3> -->
				<p>Length: <input type="text" class="length"></p>
				<p>Lowercase: <input type="text" class="lower"> - <span class="lowerV"></span></p>
				<p>Uppercase: <input type="text" class="upper"> - <span class="upperV"></span> </p>
				<p>Numbers: <input type="text" class="numbers"> - <span class="digits"></span> </p>
				<p>Symbols: <input type="text" class="spec"> - <span class="specV fs-3"></span> </p>
				<p>Entropy <input type="text" class="entropy"></p>
				<button class="reset" type="reset">Reset</button>
			</div>

			<form id="passwordGeneratorForm" class="form">
				<label for="characterAmountNumber"> Number of Characters</label>
				<input type="range" min="1" max="50" value="18" id="characterAmountRange"><br>
				<input type="number" min="1" max="50" value="18" id="characterAmountNumber">
				<p>
					<label for="includeUppercase" class="inl">Include Uppercase</label>
					<input type="checkbox" id="includeUppercase" checked>
				</p>
				<p>
					<label for="includeNumbers" class="inl">Include Numbers</label>
					<input type="checkbox" id="includeNumbers" checked>
				</p>
				<p>
					<label for="includeSymbols" class="inl">Include Symbols</label>
					<input type="checkbox" id="includeSymbols" checked>
				</p>
				<button class="gen" type="submit">Generate</button>
			</form>
		</div>
		<div id="col-7" class="col"> content 7</div>
		<div id="col-8" class="col"> content 8</div>
		<div id="col-9" class="col">Content 9
			<p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Dolores perspiciatis doloribus nihil.</p>
		</div>
		<div id="col-10" class="col"> content 10
			<h4>Node list</h4>
			<ul>
				<li>querySelectorAll</li>
				<li>childNodes</li>
				<li>getElementsByName</li>
			</ul>
		</div>
		<div id="col-11" class="col">Column 11
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum similique vero eos corporis error consectetur
				quaerat natus ut possimus enim.</p>
		</div>
		<div id="col-12">
			content 12
			<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Nesciunt, voluptas nam corporis maiores aspernatur
				necessitatibus architecto cum velit nostrum quaerat! Excepturi id natus sunt, aliquam expedita, aliquid et magni
				cum. Veritatis ipsa porro vitae unde sequi ducimus minima aut voluptatum accusantium consequatur autem et non
				eius saepe quo consequuntur ad ipsam incidunt eveniet architecto labore nulla, necessitatibus aperiam. Nostrum
				iure voluptates pariatur fuga hic quibusdam eius tempora obcaecati maxime cupiditate sit, error asperiores
				debitis ea eum aspernatur enim excepturi. Ipsam nulla illo architecto a corporis velit nam quae laudantium eum
				illum odit nihil eos, praesentium officia blanditiis neque deserunt autem, alias nostrum labore repudiandae. Et
				unde laudantium nulla qui facere aliquam, quae perspiciatis eum eius ullam porro placeat corporis minima
				perferendis hic esse, repellat necessitatibus sint a ea eveniet! Veritatis eum earum </p>
		</div>
		<div id="col-13" class="col"> content 13
			<p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Cupiditate corrupti, placeat rerum, </p>
			<p>enim laboriosam deserunt velit expedita perspiciatis odit aliquam adipisci ipsum architecto aspernatur
				molestiae sed nisi mollitia. Similique, consequatur!</p>
		</div>
		<div id="col-14" class="col"> content 14
			<p class="copy"></p>
			<p>Project started Dec 5, 2021</p>
		</div>
	</div>
	<script src="<?php echo base_url('assets/js/script-dist.js');?>"></script>
	<script src="<?php echo base_url('assets/js/prime-dist.js');?>"></script>
	<script src="<?php echo base_url('assets/dist/entropy-dist.js');?>"></script>
</body>