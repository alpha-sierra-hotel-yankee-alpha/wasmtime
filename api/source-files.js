var N = null;var sourcesIndex = {};
sourcesIndex["clif_json"] = {"name":"","files":["clif-json.rs","serde_clif_json.rs"]};
sourcesIndex["clif_util"] = {"name":"","files":["bugpoint.rs","cat.rs","clif-util.rs","compile.rs","disasm.rs","interpret.rs","print_cfg.rs","run.rs","souper_harvest.rs","souper_to_peepmatic.rs","utils.rs","wasm.rs"]};
sourcesIndex["cranelift"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cranelift_bforest"] = {"name":"","files":["lib.rs","map.rs","node.rs","path.rs","pool.rs","set.rs"]};
sourcesIndex["cranelift_codegen"] = {"name":"","dirs":[{"name":"binemit","files":["memorysink.rs","mod.rs","relaxation.rs","shrink.rs","stack_map.rs"]},{"name":"ir","files":["atomic_rmw_op.rs","builder.rs","constant.rs","dfg.rs","entities.rs","extfunc.rs","extname.rs","function.rs","globalvalue.rs","heap.rs","immediates.rs","instructions.rs","jumptable.rs","layout.rs","libcall.rs","memflags.rs","mod.rs","progpoint.rs","sourceloc.rs","stackslot.rs","table.rs","trapcode.rs","types.rs","valueloc.rs"]},{"name":"isa","dirs":[{"name":"aarch64","dirs":[{"name":"inst","dirs":[{"name":"unwind","files":["systemv.rs"]}],"files":["args.rs","emit.rs","imms.rs","mod.rs","regs.rs","unwind.rs"]}],"files":["abi.rs","lower.rs","lower_inst.rs","mod.rs"]},{"name":"riscv","files":["abi.rs","binemit.rs","enc_tables.rs","mod.rs","registers.rs","settings.rs"]},{"name":"unwind","files":["systemv.rs","winx64.rs"]},{"name":"x86","dirs":[{"name":"unwind","files":["systemv.rs","winx64.rs"]}],"files":["abi.rs","binemit.rs","enc_tables.rs","mod.rs","registers.rs","settings.rs","unwind.rs"]}],"files":["call_conv.rs","constraints.rs","enc_tables.rs","encoding.rs","mod.rs","registers.rs","stack.rs","unwind.rs"]},{"name":"legalizer","files":["boundary.rs","call.rs","globalvalue.rs","heap.rs","libcall.rs","mod.rs","split.rs","table.rs"]},{"name":"machinst","files":["abi.rs","abi_impl.rs","adapter.rs","blockorder.rs","buffer.rs","compile.rs","helpers.rs","inst_common.rs","lower.rs","mod.rs","valueregs.rs","vcode.rs"]},{"name":"regalloc","files":["affinity.rs","branch_splitting.rs","coalescing.rs","coloring.rs","context.rs","diversion.rs","live_value_tracker.rs","liveness.rs","liverange.rs","mod.rs","pressure.rs","register_set.rs","reload.rs","safepoint.rs","solver.rs","spilling.rs","virtregs.rs"]},{"name":"verifier","files":["cssa.rs","flags.rs","liveness.rs","locations.rs","mod.rs"]}],"files":["abi.rs","bitset.rs","cfg_printer.rs","constant_hash.rs","context.rs","cursor.rs","data_value.rs","dbg.rs","dce.rs","divconst_magic_numbers.rs","dominator_tree.rs","flowgraph.rs","fx.rs","inst_predicates.rs","iterators.rs","lib.rs","licm.rs","loop_analysis.rs","nan_canonicalization.rs","partition_slice.rs","postopt.rs","predicates.rs","print_errors.rs","redundant_reload_remover.rs","remove_constant_phis.rs","result.rs","scoped_hash_map.rs","settings.rs","simple_gvn.rs","simple_preopt.rs","souper_harvest.rs","stack_layout.rs","timing.rs","topo_order.rs","unreachable_code.rs","value_label.rs","write.rs"]};
sourcesIndex["cranelift_codegen_meta"] = {"name":"","dirs":[{"name":"cdsl","files":["ast.rs","cpu_modes.rs","encodings.rs","formats.rs","instructions.rs","isa.rs","mod.rs","operands.rs","recipes.rs","regs.rs","settings.rs","type_inference.rs","types.rs","typevar.rs","xform.rs"]},{"name":"isa","dirs":[{"name":"arm32","files":["mod.rs"]},{"name":"arm64","files":["mod.rs"]},{"name":"riscv","files":["encodings.rs","mod.rs","recipes.rs"]},{"name":"x86","files":["encodings.rs","instructions.rs","legalize.rs","mod.rs","opcodes.rs","recipes.rs","registers.rs","settings.rs"]}],"files":["mod.rs"]},{"name":"shared","files":["entities.rs","formats.rs","immediates.rs","instructions.rs","legalize.rs","mod.rs","settings.rs","types.rs"]}],"files":["default_map.rs","error.rs","gen_binemit.rs","gen_encodings.rs","gen_inst.rs","gen_legalizer.rs","gen_registers.rs","gen_settings.rs","gen_types.rs","lib.rs","srcgen.rs","unique_table.rs"]};
sourcesIndex["cranelift_codegen_shared"] = {"name":"","dirs":[{"name":"isa","dirs":[{"name":"x86","files":["encoding_bits.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["condcodes.rs","constant_hash.rs","constants.rs","lib.rs"]};
sourcesIndex["cranelift_entity"] = {"name":"","files":["boxed_slice.rs","iter.rs","keys.rs","lib.rs","list.rs","map.rs","packed_option.rs","primary.rs","set.rs","sparse.rs"]};
sourcesIndex["cranelift_filetests"] = {"name":"","files":["concurrent.rs","function_runner.rs","lib.rs","match_directive.rs","runner.rs","runone.rs","subtest.rs","test_binemit.rs","test_cat.rs","test_compile.rs","test_dce.rs","test_domtree.rs","test_interpret.rs","test_legalizer.rs","test_licm.rs","test_peepmatic.rs","test_postopt.rs","test_preopt.rs","test_print_cfg.rs","test_regalloc.rs","test_rodata.rs","test_run.rs","test_safepoint.rs","test_shrink.rs","test_simple_gvn.rs","test_simple_preopt.rs","test_stack_maps.rs","test_unwind.rs","test_verifier.rs"]};
sourcesIndex["cranelift_frontend"] = {"name":"","files":["frontend.rs","lib.rs","ssa.rs","switch.rs","variable.rs"]};
sourcesIndex["cranelift_interpreter"] = {"name":"","files":["environment.rs","frame.rs","instruction.rs","interpreter.rs","lib.rs","state.rs","step.rs","value.rs"]};
sourcesIndex["cranelift_jit"] = {"name":"","files":["backend.rs","compiled_blob.rs","lib.rs","memory.rs"]};
sourcesIndex["cranelift_module"] = {"name":"","files":["data_context.rs","lib.rs","module.rs","traps.rs"]};
sourcesIndex["cranelift_native"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cranelift_object"] = {"name":"","files":["backend.rs","lib.rs"]};
sourcesIndex["cranelift_preopt"] = {"name":"","files":["constant_folding.rs","lib.rs"]};
sourcesIndex["cranelift_reader"] = {"name":"","files":["error.rs","isaspec.rs","lexer.rs","lib.rs","parser.rs","run_command.rs","sourcemap.rs","testcommand.rs","testfile.rs"]};
sourcesIndex["cranelift_wasm"] = {"name":"","dirs":[{"name":"environ","files":["dummy.rs","mod.rs","spec.rs"]},{"name":"state","files":["func_state.rs","mod.rs","module_state.rs"]}],"files":["code_translator.rs","func_translator.rs","lib.rs","module_translator.rs","sections_translator.rs","translation_utils.rs"]};
sourcesIndex["fib"] = {"name":"","files":["fib.rs"]};
sourcesIndex["lightbeam"] = {"name":"","files":["backend.rs","disassemble.rs","error.rs","function_body.rs","lib.rs","microwasm.rs","module.rs","translate_sections.rs"]};
sourcesIndex["peepmatic"] = {"name":"","files":["ast.rs","automatize.rs","dot_fmt.rs","lib.rs","linear_passes.rs","linearize.rs","parser.rs","traversals.rs","verify.rs"]};
sourcesIndex["peepmatic_automata"] = {"name":"","files":["dot.rs","lib.rs","output_impls.rs","serde_impls.rs"]};
sourcesIndex["peepmatic_fuzzing"] = {"name":"","files":["automata.rs","compile.rs","interp.rs","lib.rs","parser.rs"]};
sourcesIndex["peepmatic_macro"] = {"name":"","files":["child_nodes.rs","into_dyn_ast_ref.rs","lib.rs","span.rs"]};
sourcesIndex["peepmatic_runtime"] = {"name":"","files":["cc.rs","error.rs","instruction_set.rs","integer_interner.rs","lib.rs","linear.rs","optimizations.rs","optimizer.rs","part.rs","type.rs","unquote.rs"]};
sourcesIndex["peepmatic_souper"] = {"name":"","files":["lib.rs"]};
sourcesIndex["peepmatic_test"] = {"name":"","files":["lib.rs"]};
sourcesIndex["peepmatic_test_operator"] = {"name":"","files":["lib.rs"]};
sourcesIndex["peepmatic_traits"] = {"name":"","files":["lib.rs","operator.rs","typing.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["run_examples"] = {"name":"","files":["main.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["from_primitive.rs","ignored_any.rs","impls.rs","mod.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","macros.rs","mod.rs","ser.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","gen_helper.rs","hash.rs","visit.rs","visit_mut.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["wasi"] = {"name":"","files":["wasi.rs"]};
sourcesIndex["wasi_common"] = {"name":"","dirs":[{"name":"fs","files":["dir.rs","dir_builder.rs","dir_entry.rs","file.rs","file_type.rs","metadata.rs","mod.rs","open_options.rs","permissions.rs","readdir.rs"]},{"name":"snapshots","files":["mod.rs","wasi_snapshot_preview1.rs","wasi_unstable.rs"]},{"name":"sys","dirs":[{"name":"unix","dirs":[{"name":"linux","files":["mod.rs","osdir.rs","path.rs"]}],"files":["clock.rs","fd.rs","mod.rs","osdir.rs","osfile.rs","oshandle.rs","osother.rs","path.rs","poll.rs","stdio.rs"]}],"files":["clock.rs","fd.rs","mod.rs","osdir.rs","osfile.rs","osother.rs","stdio.rs"]},{"name":"virtfs","files":["pipe.rs"]}],"files":["ctx.rs","entry.rs","error.rs","fdpool.rs","handle.rs","lib.rs","path.rs","sandboxed_tty_writer.rs","sched.rs","string_array.rs","virtfs.rs","wasi.rs"]};
sourcesIndex["wasi_fs"] = {"name":"","files":["wasi-fs.rs"]};
sourcesIndex["wasmtime"] = {"name":"","dirs":[{"name":"trampoline","files":["create_handle.rs","func.rs","global.rs","memory.rs","mod.rs","table.rs"]},{"name":"types","files":["matching.rs"]}],"files":["config.rs","engine.rs","externals.rs","frame_info.rs","func.rs","instance.rs","lib.rs","linker.rs","module.rs","ref.rs","sig_registry.rs","store.rs","trap.rs","types.rs","unix.rs","values.rs"]};
sourcesIndex["wasmtime_bench_api"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_c_api_macros"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_cache"] = {"name":"","files":["config.rs","lib.rs","worker.rs"]};
sourcesIndex["wasmtime_cranelift"] = {"name":"","files":["func_environ.rs","lib.rs"]};
sourcesIndex["wasmtime_debug"] = {"name":"","dirs":[{"name":"transform","files":["address_transform.rs","attr.rs","expression.rs","line_program.rs","mod.rs","range_info_builder.rs","refs.rs","simulate.rs","unit.rs","utils.rs"]}],"files":["gc.rs","lib.rs","write_debuginfo.rs"]};
sourcesIndex["wasmtime_environ"] = {"name":"","files":["address_map.rs","builtin.rs","compilation.rs","data_structures.rs","lib.rs","module.rs","module_environ.rs","tunables.rs","vmoffsets.rs"]};
sourcesIndex["wasmtime_fuzzing"] = {"name":"","dirs":[{"name":"generators","files":["api.rs","table_ops.rs"]},{"name":"oracles","files":["dummy.rs"]}],"files":["generators.rs","lib.rs","oracles.rs"]};
sourcesIndex["wasmtime_jit"] = {"name":"","dirs":[{"name":"unwind","files":["systemv.rs"]}],"files":["code_memory.rs","compiler.rs","instantiate.rs","lib.rs","link.rs","native.rs","object.rs","trampoline.rs","unwind.rs"]};
sourcesIndex["wasmtime_lightbeam"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_obj"] = {"name":"","files":["builder.rs","context.rs","data_segment.rs","lib.rs","module.rs","table.rs"]};
sourcesIndex["wasmtime_profiling"] = {"name":"","files":["jitdump_linux.rs","lib.rs","vtune_disabled.rs"]};
sourcesIndex["wasmtime_runtime"] = {"name":"","files":["debug_builtins.rs","export.rs","externref.rs","imports.rs","instance.rs","jit_int.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","table.rs","traphandlers.rs","vmcontext.rs"]};
sourcesIndex["wasmtime_rust"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_rust_macro"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_wasi"] = {"name":"","dirs":[{"name":"old","files":["mod.rs","snapshot_0.rs"]}],"files":["lib.rs"]};
sourcesIndex["wasmtime_wasi_nn"] = {"name":"","files":["ctx.rs","impl.rs","lib.rs","witx.rs"]};
sourcesIndex["wasmtime_wast"] = {"name":"","files":["lib.rs","spectest.rs","wast.rs"]};
sourcesIndex["wasmtime_wiggle"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_wiggle_macro"] = {"name":"","files":["config.rs","lib.rs"]};
sourcesIndex["wiggle"] = {"name":"","files":["error.rs","guest_type.rs","lib.rs","region.rs"]};
sourcesIndex["wiggle_borrow"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wiggle_generate"] = {"name":"","dirs":[{"name":"types","files":["enum.rs","flags.rs","handle.rs","int.rs","mod.rs","struct.rs","union.rs"]}],"files":["config.rs","error_transform.rs","funcs.rs","lib.rs","lifetimes.rs","module_trait.rs","names.rs"]};
sourcesIndex["wiggle_macro"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wiggle_test"] = {"name":"","files":["lib.rs"]};
sourcesIndex["winx"] = {"name":"","files":["lib.rs"]};
sourcesIndex["witx"] = {"name":"","dirs":[{"name":"docs","files":["ast.rs","md.rs","mod.rs"]}],"files":["ast.rs","coretypes.rs","io.rs","layout.rs","lib.rs","parser.rs","phases.rs","polyfill.rs","render.rs","representation.rs","toplevel.rs","validate.rs"]};
sourcesIndex["yanix"] = {"name":"","dirs":[{"name":"sys","dirs":[{"name":"linux","files":["dir.rs","fadvise.rs","file.rs","filetime.rs","mod.rs","utimesat.rs"]}],"files":["mod.rs"]}],"files":["clock.rs","dir.rs","fcntl.rs","file.rs","filetime.rs","lib.rs","poll.rs","socket.rs"]};
createSourceSidebar();
