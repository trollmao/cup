crystal_doc_search_index_callback({"repository_name":"cup","body":"# cup\n\nCrystal URL Parser\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     cup:\n       github: crystal-libs/cup\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"cup\"\n```\n\nTODO: Write usage instructions here\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/crystal-libs/cup/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [gxfr](https://github.com/gxfr) - creator and maintainer","program":{"html_id":"cup/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"cup","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"cup/Cup","path":"Cup.html","kind":"module","full_name":"Cup","name":"Cup","abstract":false,"locations":[{"filename":"src/cup.cr","line_number":1,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L1"}],"repository_name":"cup","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\""}],"types":[{"html_id":"cup/Cup/URL","path":"Cup/URL.html","kind":"class","full_name":"Cup::URL","name":"URL","abstract":false,"superclass":{"html_id":"cup/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"cup/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"cup/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/cup.cr","line_number":4,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L4"}],"repository_name":"cup","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"cup/Cup","kind":"module","full_name":"Cup","name":"Cup"},"constructors":[{"html_id":"new(url:String)-class-method","name":"new","abstract":false,"args":[{"name":"url","external_name":"url","restriction":"String"}],"args_string":"(url : String)","args_html":"(url : String)","location":{"filename":"src/cup.cr","line_number":5,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L5"},"def":{"name":"new","args":[{"name":"url","external_name":"url","restriction":"String"}],"visibility":"Public","body":"_ = allocate\n_.initialize(url)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"frag-instance-method","name":"frag","abstract":false,"location":{"filename":"src/cup.cr","line_number":24,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L24"},"def":{"name":"frag","visibility":"Public","body":"return (@url.split(\"#\"))[1]"}},{"html_id":"host-instance-method","name":"host","abstract":false,"location":{"filename":"src/cup.cr","line_number":12,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L12"},"def":{"name":"host","visibility":"Public","body":"return ((@url.split(\"://\"))[1].split(\"/\"))[0]"}},{"html_id":"path-instance-method","name":"path","abstract":false,"location":{"filename":"src/cup.cr","line_number":16,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L16"},"def":{"name":"path","visibility":"Public","body":"return ((@url.split(\"://\"))[1].split(\"?\"))[0].sub(((@url.split(\"://\"))[1].split(\"/\"))[0], \"\")"}},{"html_id":"query-instance-method","name":"query","abstract":false,"location":{"filename":"src/cup.cr","line_number":20,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L20"},"def":{"name":"query","visibility":"Public","body":"return ((@url.split(\"?\"))[1].split(\"#\"))[0]"}},{"html_id":"scheme-instance-method","name":"scheme","abstract":false,"location":{"filename":"src/cup.cr","line_number":8,"url":"https://github.com/crystal-libs/cup/blob/1b95269691b53c3696011f0fc77e1e37adb65d0f/src/cup.cr#L8"},"def":{"name":"scheme","visibility":"Public","body":"return (@url.split(\"://\"))[0]"}}]}]}]}})