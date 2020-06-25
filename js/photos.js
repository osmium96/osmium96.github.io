(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="elle-walk" style="background-image: url('/photos/tint/elle%20walk-65ba1d.jpg')" title="elle walk">
  <img class="lazyload" data-src="/photos/thumbnail/elle%20walk-ccf4df.jpg" src="/photos/tint/elle%20walk-65ba1d.jpg" height="3456" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/elle%20walk-686656.jpg')"></span>
  </span>
  <a class="open" href="/elle-walk" data-target="elle-walk">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/elle-grove" data-target="elle-grove" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="elle-grove" style="background-image: url('/photos/tint/elle%20grove-65ba1d.jpg')" title="elle grove">
  <img class="lazyload" data-src="/photos/thumbnail/elle%20grove-ccf4df.jpg" src="/photos/tint/elle%20grove-65ba1d.jpg" height="3456" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/elle%20grove-686656.jpg')"></span>
  </span>
  <a class="open" href="/elle-grove" data-target="elle-grove">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/elle-walk" data-target="elle-walk" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/elle-blm-poster" data-target="elle-blm-poster" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="elle-blm-poster" style="background-image: url('/photos/tint/elle%20blm%20poster-65ba1d.jpg')" title="elle blm poster">
  <img class="lazyload" data-src="/photos/thumbnail/elle%20blm%20poster-ccf4df.jpg" src="/photos/tint/elle%20blm%20poster-65ba1d.jpg" height="3448" width="4597" />
  <span class="full">
    <span style="background-image: url('/photos/large/elle%20blm%20poster-686656.jpg')"></span>
  </span>
  <a class="open" href="/elle-blm-poster" data-target="elle-blm-poster">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/elle-grove" data-target="elle-grove" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/edgewood-house" data-target="edgewood-house" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="edgewood-house" style="background-image: url('/photos/tint/edgewood%20house-65ba1d.jpg')" title="edgewood house">
  <img class="lazyload" data-src="/photos/thumbnail/edgewood%20house-ccf4df.jpg" src="/photos/tint/edgewood%20house-65ba1d.jpg" height="3456" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/edgewood%20house-686656.jpg')"></span>
  </span>
  <a class="open" href="/edgewood-house" data-target="edgewood-house">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/elle-blm-poster" data-target="elle-blm-poster" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/laundromat" data-target="laundromat" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="laundromat" style="background-image: url('/photos/tint/laundromat-65ba1d.jpg')" title="laundromat">
  <img class="lazyload" data-src="/photos/thumbnail/laundromat-ccf4df.jpg" src="/photos/tint/laundromat-65ba1d.jpg" height="3456" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/laundromat-686656.jpg')"></span>
  </span>
  <a class="open" href="/laundromat" data-target="laundromat">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/edgewood-house" data-target="edgewood-house" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lot-by-ups" data-target="lot-by-ups" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
	</ul> -->
</li>
<li class="item " id="lot-by-ups" style="background-image: url('/photos/tint/lot%20by%20ups-65ba1d.jpg')" title="lot by ups">
  <img class="lazyload" data-src="/photos/thumbnail/lot%20by%20ups-ccf4df.jpg" src="/photos/tint/lot%20by%20ups-65ba1d.jpg" height="3456" width="4608" />
  <span class="full">
    <span style="background-image: url('/photos/large/lot%20by%20ups-686656.jpg')"></span>
  </span>
  <a class="open" href="/lot-by-ups" data-target="lot-by-ups">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/laundromat" data-target="laundromat" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/edgewood-drive" data-target="edgewood-drive" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/2500</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="edgewood-drive" style="background-image: url('/photos/tint/edgewood%20drive-65ba1d.jpg')" title="edgewood drive">
  <img class="lazyload" data-src="/photos/thumbnail/edgewood%20drive-ccf4df.jpg" src="/photos/tint/edgewood%20drive-65ba1d.jpg" height="2819" width="3759" />
  <span class="full">
    <span style="background-image: url('/photos/large/edgewood%20drive-686656.jpg')"></span>
  </span>
  <a class="open" href="/edgewood-drive" data-target="edgewood-drive">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lot-by-ups" data-target="lot-by-ups" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rib-on-grill" data-target="rib-on-grill" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="rib-on-grill" style="background-image: url('/photos/tint/rib%20on%20grill-65ba1d.jpg')" title="rib on grill">
  <img class="lazyload" data-src="/photos/thumbnail/rib%20on%20grill-ccf4df.jpg" src="/photos/tint/rib%20on%20grill-65ba1d.jpg" height="1536" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/rib%20on%20grill-686656.jpg')"></span>
  </span>
  <a class="open" href="/rib-on-grill" data-target="rib-on-grill">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/edgewood-drive" data-target="edgewood-drive" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>E-M10 Mark III</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
`);