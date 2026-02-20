import React, { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  Code2,
  Image as ImageIcon,
  Lock,
  Unlock,
  Cpu,
  Github,
  Presentation,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  Eye
} from 'lucide-react';

export default function App() {
  const [isPptExpanded, setIsPptExpanded] = useState(false);

  const pptFiles = [
    { name: 'Review 0', path: '/Review_0.pptx' },
    { name: 'Review 1', path: '/Review_1.pptx' },
    { name: 'Review 2', path: '/Review_2.pptx' },
    { name: 'Review 3', path: '/Review_3.pptx' },
    { name: 'Final Review', path: '/Final_Review.pptx' },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-lg tracking-tight text-zinc-900">
            RDHEI <span className="text-indigo-600">Project</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-600">
            <a href="#abstract" className="hover:text-indigo-600 transition-colors">Abstract</a>
            <a href="#methodology" className="hover:text-indigo-600 transition-colors">Methodology</a>
            <a href="#results" className="hover:text-indigo-600 transition-colors">Results</a>
            <a href="#code" className="hover:text-indigo-600 transition-colors">Code</a>
            <a href="#resources" className="hover:text-indigo-600 transition-colors">Resources</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              <span>Information Security & Cryptography</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 leading-tight mb-6">
              Reversible Data Hiding in Encrypted Images
            </h1>
            <p className="text-xl text-zinc-600 mb-10 font-light leading-relaxed">
              Using Multi-MSB Prediction and Huffman Coding to achieve high-capacity,
              error-free data extraction and image recovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="#resources" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Project Files
              </a>
              <a href="https://github.com/Gbharsha1/Reversible_Data-_Hiding-_in_Encrypted_Images" target="_blank" rel="noopener noreferrer" className="bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-200/50 inline-block">
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-3">Final Year Project By Team</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-700 mb-4">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> G.VISHNU KAIVALYA (Y21IT040)</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> G.BHAVANI HARSHA VARDHAN (Y21IT039)</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> K.KIRAN (L22IT138)</span>
              </div>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mb-2 mt-4 pt-4 border-t border-zinc-200/50">Project Guide / Incharge</p>
              <div className="flex justify-center text-zinc-700">
                <span className="flex items-center gap-1.5 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Dr. B. Hemantha Kumar (Professor), Dept of Information Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-20 bg-zinc-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-zinc-900">Abstract</h2>
          </div>
          <div className="prose prose-lg prose-zinc max-w-none text-zinc-600 leading-relaxed">
            <p>
              Reversible Data Hiding in Encrypted Images (RDHEI) is a crucial technique for maintaining
              privacy while managing images in cloud environments. This project presents a novel high-capacity
              RDHEI scheme based on <strong>Multi-MSB (Most Significant Bit) Prediction</strong> and <strong>Huffman Coding</strong>.
            </p>
            <p className="mt-4">
              Before encryption, the image owner predicts the multiple MSBs of pixels using their neighboring
              pixels. The prediction errors are then compressed using Huffman coding to vacate a large amount
              of room. The image is subsequently encrypted using a stream cipher. The data hider can embed
              secret data into the vacated room without knowing the original image content. On the receiver side,
              the secret data can be extracted error-free, and the original image can be perfectly recovered.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-zinc-900">System Architecture</h2>
          </div>

          {/* Framework Image */}
          <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm mb-8 overflow-hidden">
            <h3 className="text-xl font-bold text-zinc-900 mb-6 text-center">Process Framework</h3>
            <div className="w-full flex justify-center">
              <img
                src="/Basic_idea.png"
                alt="System Architecture Framework"
                className="w-full max-w-5xl h-auto object-contain"
              />
            </div>
          </div>

          <div className="bg-white border border-zinc-200 p-8 md:p-12 rounded-3xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
              {[
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "1. Room Vacating & Encryption",
                  desc: "Multi-MSB prediction is performed. Errors are compressed via Huffman Coding to create space. The image is then encrypted."
                },
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "2. Data Embedding",
                  desc: "The data hider embeds the secret payload into the vacated room of the encrypted image using a data hiding key."
                },
                {
                  icon: <Unlock className="w-8 h-8" />,
                  title: "3. Extraction & Recovery",
                  desc: "The receiver uses the encryption and data hiding keys to extract the payload and perfectly reconstruct the original image."
                }
              ].map((step, i, arr) => (
                <Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex-1 flex flex-col items-center text-center px-4"
                  >
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-6 shadow-inner">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
                  </motion.div>

                  {i < arr.length - 1 && (
                    <div className="flex items-center justify-center text-indigo-300 md:self-stretch pb-8 md:pb-0">
                      <ArrowRight className="hidden md:block w-10 h-10 md:-mt-8" />
                      <ArrowDown className="block md:hidden w-8 h-8" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Screenshots */}
      <section id="results" className="py-20 bg-zinc-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-white/10 rounded-xl text-white">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Output Screenshots</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-3 xl:gap-8">
            {[
              { title: "Original Image", img: "/Lena.jpg", desc: "Standard test image (Lena)" },
              { title: "Encrypted Image", img: "/embedded_image.png", desc: "After Image Encryption and Embedded Encryption key" },
              { title: "Data Embedded", img: "/embedded_image_with_secret.png", desc: "Encrypted image with hidden payload" },
              { title: "Marked Encrypted", img: "/marked_encrypted_image.png", desc: "Marked encrypted image" },
              { title: "Recovered Image", img: "/Lena.jpg", desc: "Perfectly reconstructed (PSNR = +∞)" }
            ].map((item, i, arr) => (
              <Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center text-center w-full max-w-[260px] lg:max-w-none lg:w-32 xl:w-44"
                >
                  <div className="w-48 h-48 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-xl overflow-hidden bg-zinc-800 mb-4 relative shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
                  </div>
                  <h4 className="font-bold text-sm xl:text-base mb-2 lg:mb-1">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>

                {i < arr.length - 1 && (
                  <div className="flex items-center justify-center text-indigo-400 py-2 lg:py-0 lg:mt-12 xl:mt-16 shrink-0">
                    <ArrowRight className="hidden lg:block w-5 h-5 xl:w-6 xl:h-6" />
                    <ArrowDown className="block lg:hidden w-6 h-6" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section id="code" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-zinc-900">Core Algorithm Snippet</h2>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-zinc-800 shadow-2xl">
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-zinc-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-zinc-400">Algorithm 1: Encoding Phase</span>
            </div>
            <div className="p-6 overflow-x-auto overflow-y-auto max-h-96">
              <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                <code>
                  <span className="text-zinc-500">1:  </span>Read grayscale image <span className="text-orange-400">I</span> of size <span className="text-orange-400">m × n</span>{'\n'}
                  <span className="text-zinc-500">2:  </span>Initialize label map <span className="text-orange-400">LM</span> with <span className="text-orange-400">−1</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">3:  ▷ Step 1: Generate Label Map using MED prediction</span>{'\n'}
                  <span className="text-zinc-500">4:  </span><span className="text-purple-400">for</span> <span className="text-blue-400">i</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">m</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">5:      </span><span className="text-purple-400">for</span> <span className="text-blue-400">j</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">n</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">6:          </span>Compute predicted value <span className="text-orange-400">px</span> using MED predictor{'\n'}
                  <span className="text-zinc-500">7:          </span>Convert <span className="text-orange-400">I(i,j)</span> and <span className="text-orange-400">px</span> into 8-bit binary{'\n'}
                  <span className="text-zinc-500">8:          </span>Count number of identical MSBs → <span className="text-orange-400">t</span>{'\n'}
                  <span className="text-zinc-500">9:          </span><span className="text-orange-400">LM(i,j)</span> ← <span className="text-orange-400">t</span>{'\n'}
                  <span className="text-zinc-500">10:     </span><span className="text-purple-400">end for</span>{'\n'}
                  <span className="text-zinc-500">11: </span><span className="text-purple-400">end for</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">12: ▷ Step 2: Encrypt image</span>{'\n'}
                  <span className="text-zinc-500">13: </span>Generate pseudo-random matrix <span className="text-orange-400">R</span> using seed <span className="text-orange-400">Ke</span>{'\n'}
                  <span className="text-zinc-500">14: </span><span className="text-orange-400">I_enc</span> ← <span className="text-orange-400">I</span> ⊕ <span className="text-orange-400">R</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">15: ▷ Step 3: Build Huffman coding table</span>{'\n'}
                  <span className="text-zinc-500">16: </span>Compute frequency of labels (0–8){'\n'}
                  <span className="text-zinc-500">17: </span>Construct Huffman codes based on frequency{'\n'}
                  <span className="text-zinc-500">18: </span>Calculate total embedding capacity{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">19: ▷ Step 4: Convert secret message to binary</span>{'\n'}
                  <span className="text-zinc-500">20: </span>Convert each character of <span className="text-orange-400">M</span> into 8-bit binary{'\n'}
                  <span className="text-zinc-500">21: </span>Let <span className="text-orange-400">B</span> be the concatenated bitstream{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">22: </span><span className="text-purple-400">if</span> length(<span className="text-orange-400">B</span>) {'>'} <span className="text-orange-400">NetPayloadCapacity</span> <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">23:     </span>Terminate with error{'\n'}
                  <span className="text-zinc-500">24: </span><span className="text-purple-400">end if</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">25: ▷ Step 5: Encrypt secret data</span>{'\n'}
                  <span className="text-zinc-500">26: </span>Generate key stream <span className="text-orange-400">KS</span> using <span className="text-orange-400">Kd</span>{'\n'}
                  <span className="text-zinc-500">27: </span><span className="text-orange-400">B_enc</span> ← <span className="text-orange-400">B</span> ⊕ <span className="text-orange-400">KS</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">28: ▷ Step 6: Embed encrypted bits</span>{'\n'}
                  <span className="text-zinc-500">29: </span><span className="text-orange-400">data_index</span> ← <span className="text-orange-400">1</span>{'\n'}
                  <span className="text-zinc-500">30: </span><span className="text-purple-400">for</span> <span className="text-blue-400">i</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">m</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">31:     </span><span className="text-purple-400">for</span> <span className="text-blue-400">j</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">n</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">32:         </span><span className="text-purple-400">if</span> <span className="text-orange-400">data_index</span> {'>'} length(<span className="text-orange-400">B_enc</span>) <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">33:             </span>{'    '}<span className="text-purple-400">break</span>{'\n'}
                  <span className="text-zinc-500">34:         </span><span className="text-purple-400">end if</span>{'\n'}
                  <span className="text-zinc-500">35:         </span><span className="text-orange-400">t</span> ← <span className="text-orange-400">LM(i,j)</span>{'\n'}
                  <span className="text-zinc-500">36:         </span><span className="text-purple-400">if</span> <span className="text-orange-400">t</span> {'>'} <span className="text-orange-400">0</span> <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">37:             </span>{'    '}Determine embedding position based on <span className="text-orange-400">t</span>{'\n'}
                  <span className="text-zinc-500">38:             </span>{'    '}Replace selected bit in <span className="text-orange-400">I_enc(i,j)</span>{'\n'}
                  <span className="text-zinc-500">39:             </span>{'    '}<span className="text-orange-400">data_index</span> ← <span className="text-orange-400">data_index</span> + <span className="text-orange-400">1</span>{'\n'}
                  <span className="text-zinc-500">40:         </span><span className="text-purple-400">end if</span>{'\n'}
                  <span className="text-zinc-500">41:     </span><span className="text-purple-400">end for</span>{'\n'}
                  <span className="text-zinc-500">42: </span><span className="text-purple-400">end for</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">43: </span><span className="text-orange-400">I_marked</span> ← <span className="text-orange-400">I_enc</span>{'\n'}
                  <span className="text-zinc-500">44: </span>Save <span className="text-orange-400">I_marked</span>, <span className="text-orange-400">LM</span>, and metadata{'\n'}
                  <span className="text-zinc-500">45: </span><span className="text-purple-400">return</span> <span className="text-orange-400">I_marked</span>{'\n'}
                </code>
              </pre>
            </div>
          </div>
          <div className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm my-12 overflow-hidden">
            <h3 className="text-xl font-bold text-zinc-900 mb-6 text-center">Process Framework</h3>
            <div className="w-full flex justify-center">
              <img
                src="/TotalProcess.png"
                alt="System Architecture Framework"
                className="w-full max-w-5xl h-auto object-contain"
              />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-zinc-800 shadow-2xl">
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-zinc-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="ml-4 text-xs font-mono text-zinc-400">Algorithm 2: Decoding Phase</span>
            </div>
            <div className="p-6 overflow-x-auto overflow-y-auto max-h-96">
              <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                <code>
                  <span className="text-zinc-500">1:  </span>Read <span className="text-orange-400">I_marked</span> and label map <span className="text-orange-400">LM</span>{'\n'}
                  <span className="text-zinc-500">2:  </span>Verify keys <span className="text-orange-400">Ke</span> and <span className="text-orange-400">Kd</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">3:  ▷ Step 1: Extract embedded bits</span>{'\n'}
                  <span className="text-zinc-500">4:  </span><span className="text-orange-400">total_bits</span> ← <span className="text-orange-400">L</span> × <span className="text-orange-400">8</span>{'\n'}
                  <span className="text-zinc-500">5:  </span>Initialize empty bit array <span className="text-orange-400">B_enc</span>{'\n'}
                  <span className="text-zinc-500">6:  </span><span className="text-purple-400">for</span> <span className="text-blue-400">i</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">m</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">7:      </span><span className="text-purple-400">for</span> <span className="text-blue-400">j</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">n</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">8:          </span><span className="text-purple-400">if</span> length(<span className="text-orange-400">B_enc</span>) ≥ <span className="text-orange-400">total_bits</span> <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">9:              </span>{'    '}<span className="text-purple-400">break</span>{'\n'}
                  <span className="text-zinc-500">10:         </span><span className="text-purple-400">end if</span>{'\n'}
                  <span className="text-zinc-500">11:         </span><span className="text-orange-400">t</span> ← <span className="text-orange-400">LM(i,j)</span>{'\n'}
                  <span className="text-zinc-500">12:         </span><span className="text-purple-400">if</span> <span className="text-orange-400">t</span> {'>'} <span className="text-orange-400">0</span> <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">13:             </span>{'    '}Extract bit from embedding position{'\n'}
                  <span className="text-zinc-500">14:             </span>{'    '}Append to <span className="text-orange-400">B_enc</span>{'\n'}
                  <span className="text-zinc-500">15:         </span><span className="text-purple-400">end if</span>{'\n'}
                  <span className="text-zinc-500">16:     </span><span className="text-purple-400">end for</span>{'\n'}
                  <span className="text-zinc-500">17: </span><span className="text-purple-400">end for</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">18: ▷ Step 2: Decrypt secret message</span>{'\n'}
                  <span className="text-zinc-500">19: </span>Generate key stream <span className="text-orange-400">KS</span> using <span className="text-orange-400">Kd</span>{'\n'}
                  <span className="text-zinc-500">20: </span><span className="text-orange-400">B</span> ← <span className="text-orange-400">B_enc</span> ⊕ <span className="text-orange-400">KS</span>{'\n'}
                  <span className="text-zinc-500">21: </span>Convert <span className="text-orange-400">B</span> into characters{'\n'}
                  <span className="text-zinc-500">22: </span>Obtain secret message <span className="text-orange-400">M</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">23: ▷ Step 3: Decrypt image</span>{'\n'}
                  <span className="text-zinc-500">24: </span>Generate pseudo-random matrix <span className="text-orange-400">R</span> using <span className="text-orange-400">Ke</span>{'\n'}
                  <span className="text-zinc-500">25: </span><span className="text-orange-400">I_dec</span> ← <span className="text-orange-400">I_marked</span> ⊕ <span className="text-orange-400">R</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">26: ▷ Step 4: Recover original image</span>{'\n'}
                  <span className="text-zinc-500">27: </span><span className="text-purple-400">for</span> <span className="text-blue-400">i</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">m</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">28:     </span><span className="text-purple-400">for</span> <span className="text-blue-400">j</span> = <span className="text-orange-400">2</span> <span className="text-purple-400">to</span> <span className="text-orange-400">n</span> <span className="text-purple-400">do</span>{'\n'}
                  <span className="text-zinc-500">29:         </span><span className="text-orange-400">t</span> ← <span className="text-orange-400">LM(i,j)</span>{'\n'}
                  <span className="text-zinc-500">30:         </span><span className="text-purple-400">if</span> <span className="text-orange-400">t</span> {'>'} <span className="text-orange-400">0</span> <span className="text-purple-400">then</span>{'\n'}
                  <span className="text-zinc-500">31:             </span>{'    '}Predict pixel <span className="text-orange-400">px</span> using MED{'\n'}
                  <span className="text-zinc-500">32:             </span>{'    '}Restore first <span className="text-orange-400">t</span> MSBs using <span className="text-orange-400">px</span>{'\n'}
                  <span className="text-zinc-500">33:             </span>{'    '}Update pixel value{'\n'}
                  <span className="text-zinc-500">34:         </span><span className="text-purple-400">end if</span>{'\n'}
                  <span className="text-zinc-500">35:     </span><span className="text-purple-400">end for</span>{'\n'}
                  <span className="text-zinc-500">36: </span><span className="text-purple-400">end for</span>{'\n'}
                  {'\n'}
                  <span className="text-zinc-500">37: </span><span className="text-orange-400">I_recovered</span> ← reconstructed image{'\n'}
                  <span className="text-zinc-500">38: </span><span className="text-purple-400">return</span> <span className="text-orange-400">M</span>, <span className="text-orange-400">I_recovered</span>{'\n'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section id="resources" className="py-20 bg-zinc-50 px-6 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-zinc-900 mb-4">Project Resources</h2>
            <p className="text-zinc-600">Download the presentation, report, and source code to explore the project in detail.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col bg-white border border-zinc-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all group overflow-hidden">
              <button
                onClick={() => setIsPptExpanded(!isPptExpanded)}
                className="flex items-center justify-between p-6 w-full text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100 transition-colors">
                    <Presentation className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900">Project PPT</h3>
                    <p className="text-sm text-zinc-500">PowerPoint Presentations (.pptx)</p>
                  </div>
                </div>
                {isPptExpanded ? (
                  <ChevronDown className="w-5 h-5 text-indigo-600 transition-colors" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                )}
              </button>

              <AnimatePresence>
                {isPptExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-zinc-100 bg-zinc-50/50"
                  >
                    <div className="p-4 space-y-3">
                      {pptFiles.map((file, idx) => (
                        <div key={idx} className="bg-[#111] rounded-xl border border-zinc-800 p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center border border-zinc-700">
                                <FileText className="w-4 h-4 text-zinc-400" />
                              </div>
                              <span className="font-medium text-white text-sm">{file.name}</span>
                            </div>
                            <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-zinc-800 p-1 w-full sm:w-auto">
                              <a
                                href={file.path}
                                download
                                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 hover:bg-[#2a2a2a] transition-colors rounded-md group/btn"
                              >
                                <Download className="w-4 h-4 text-zinc-400 group-hover/btn:text-white" />
                                <span className="text-xs font-medium text-zinc-400 group-hover/btn:text-white">Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/Harsha_fr.pdf" download className="flex items-center justify-between p-6 bg-white border border-zinc-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Project Report</h3>
                  <p className="text-sm text-zinc-500">Full Documentation (.pdf)</p>
                </div>
              </div>
              <Download className="w-5 h-5 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
            </a>

            <a href="https://github.com/Gbharsha1/Reversible_Data-_Hiding-_in_Encrypted_Images" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-white border border-zinc-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all group sm:col-span-2">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-100 text-zinc-700 rounded-lg group-hover:bg-zinc-200 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900">Source Code Repository</h3>
                  <p className="text-sm text-zinc-500">Python / MATLAB Implementation</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-display font-bold text-xl tracking-tight text-zinc-900 mb-4">
            RDHEI <span className="text-indigo-600">Project</span>
          </div>
          <p className="text-zinc-500 text-sm">
            &copy; 2023-2025 Project Showcase
          </p>
        </div>
      </footer>
    </div>
  );
}
