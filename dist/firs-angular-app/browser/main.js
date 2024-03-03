// src/main.ts
import { bootstrapApplication } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_platform-browser.js?v=8d7841f2";

// src/app/app.config.ts
import { provideRouter } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";

// src/app/pages/dashboard/dashboard.component.ts
import { Component as Component2, inject } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { RouterModule as RouterModule2 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";

// src/app/services/notes.service.ts
import { Injectable } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { BehaviorSubject, take } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/rxjs.js?v=8d7841f2";
import * as i0 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
var _NotesService = class _NotesService {
  constructor() {
    this.note = new BehaviorSubject([]);
    const saveNotes = localStorage.getItem("notes");
    if (saveNotes) {
      this.note.next(JSON.parse(saveNotes));
    }
    this.note.subscribe((notesArray) => {
      localStorage.setItem("notes", JSON.stringify(notesArray));
    });
  }
  createNote(newNote) {
    this.note.pipe(take(1)).subscribe((notesArray) => {
      notesArray.unshift(newNote);
      this.note.next(notesArray);
    });
  }
  getNotes() {
    return this.note;
  }
  deleteNote(noteId) {
    this.note.pipe(take(1)).subscribe((notesArray) => {
      notesArray.splice(noteId, 1);
      this.note.next(notesArray);
    });
  }
};
_NotesService.\u0275fac = function NotesService_Factory(t) {
  return new (t || _NotesService)();
};
_NotesService.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _NotesService, factory: _NotesService.\u0275fac, providedIn: "root" });
var NotesService = _NotesService;

// src/app/Components/Dashboard-Card/Dashboard-Card.component.ts
import { Component, Input } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { RouterModule } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
import * as i02 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i1 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
var _c0 = (a1) => ["/note/", a1];
var _DashboardCardComponent = class _DashboardCardComponent {
  constructor() {
  }
  ngOnInit() {
  }
};
_DashboardCardComponent.\u0275fac = function DashboardCardComponent_Factory(t) {
  return new (t || _DashboardCardComponent)();
};
_DashboardCardComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _DashboardCardComponent, selectors: [["app-Dashboard-Card"]], inputs: { note: "note", i: "i" }, standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [[1, "card", "overflow-y-scroll", "scroll-m-11", 3, "routerLink"], [1, "text-lg", "font-bold"], [1, "text-slate-600"]], template: function DashboardCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "p", 2);
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i02.\u0275\u0275property("routerLink", i02.\u0275\u0275pureFunction1(3, _c0, ctx.i));
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(ctx.note.title);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(ctx.note.content);
  }
}, dependencies: [RouterModule, i1.RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var DashboardCardComponent = _DashboardCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(DashboardCardComponent, { className: "DashboardCardComponent" });
})();

// src/app/pages/dashboard/dashboard.component.ts
import * as i03 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i12 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
var _c02 = (a1) => ["/note/", a1];
function DashboardComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 2)(1, "h2", 3);
    i03.\u0275\u0275text(2);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "p", 4);
    i03.\u0275\u0275text(4);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r1 = ctx.$implicit;
    const i_r2 = ctx.$index;
    i03.\u0275\u0275property("routerLink", i03.\u0275\u0275pureFunction1(3, _c02, i_r2));
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(note_r1.title);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(note_r1.content);
  }
}
var _c1 = () => ["/new-note"];
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.noteService = inject(NotesService);
  }
  ngOnInit() {
    this.noteService.getNotes().subscribe((notes) => {
      this.allNotes = notes;
      console.log(this.allNotes);
    });
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(t) {
  return new (t || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [i03.\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[1, "wrapper"], [1, "primary", 3, "routerLink"], [1, "card", "overflow-y-scroll", "scroll-m-11", 3, "routerLink"], [1, "text-lg", "font-bold"], [1, "text-slate-600"], ["class", "card overflow-y-scroll scroll-m-11", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "main", 0);
    i03.\u0275\u0275repeaterCreate(1, DashboardComponent_For_2_Template, 5, 5, "div", 5, i03.\u0275\u0275repeaterTrackByIdentity);
    i03.\u0275\u0275elementStart(3, "button", 1);
    i03.\u0275\u0275text(4, " + New Note ");
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i03.\u0275\u0275advance(1);
    i03.\u0275\u0275repeater(ctx.allNotes);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275property("routerLink", i03.\u0275\u0275pureFunction0(1, _c1));
  }
}, dependencies: [RouterModule2, i12.RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();

// src/app/pages/new-note/new-note.component.ts
import { Component as Component3, inject as inject2 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { FormBuilder, ReactiveFormsModule, Validators } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_forms.js?v=8d7841f2";
import { Router } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
import * as i04 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i13 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_forms.js?v=8d7841f2";
var _NewNoteComponent = class _NewNoteComponent {
  constructor() {
    this.router = inject2(Router);
    this.fb = inject2(FormBuilder);
    this.notesService = inject2(NotesService);
    this.newNoteForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required]
    });
  }
  submitForm(values) {
    const note = {
      title: values.title,
      content: values.content,
      date: /* @__PURE__ */ new Date()
    };
    this.notesService.createNote(note);
    this.router.navigate([""]);
  }
};
_NewNoteComponent.\u0275fac = function NewNoteComponent_Factory(t) {
  return new (t || _NewNoteComponent)();
};
_NewNoteComponent.\u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _NewNoteComponent, selectors: [["app-new-note"]], standalone: true, features: [i04.\u0275\u0275StandaloneFeature], decls: 10, vars: 1, consts: [[1, "wrapper"], [3, "formGroup"], ["for", "", 1, "block"], ["formControlName", "title", "type", "text", 1, "block"], ["formControlName", "content", "name", "", "id", "", "cols", "30", "rows", "10", 1, "block"], ["type", "submit", 1, "primary", 3, "click"]], template: function NewNoteComponent_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "main", 0)(1, "form", 1)(2, "label", 2);
    i04.\u0275\u0275text(3, "Title");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(4, "input", 3);
    i04.\u0275\u0275elementStart(5, "label", 2);
    i04.\u0275\u0275text(6, "Contet");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(7, "textarea", 4);
    i04.\u0275\u0275elementStart(8, "button", 5);
    i04.\u0275\u0275listener("click", function NewNoteComponent_Template_button_click_8_listener() {
      return ctx.submitForm(ctx.newNoteForm.value);
    });
    i04.\u0275\u0275text(9, "Create Note");
    i04.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i04.\u0275\u0275advance(1);
    i04.\u0275\u0275property("formGroup", ctx.newNoteForm);
  }
}, dependencies: [ReactiveFormsModule, i13.\u0275NgNoValidate, i13.DefaultValueAccessor, i13.NgControlStatus, i13.NgControlStatusGroup, i13.FormGroupDirective, i13.FormControlName], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NewNoteComponent = _NewNoteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(NewNoteComponent, { className: "NewNoteComponent" });
})();

// src/app/pages/not-found/not-found.component.ts
import { Component as Component4 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i05 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
var _NotFoundComponent = class _NotFoundComponent {
};
_NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(t) {
  return new (t || _NotFoundComponent)();
};
_NotFoundComponent.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "p");
    i05.\u0275\u0275text(1, "not-found works!");
    i05.\u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NotFoundComponent = _NotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent" });
})();

// src/app/pages/note/note.component.ts
import { Component as Component5, inject as inject3 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { ActivatedRoute, Router as Router2, RouterModule as RouterModule3 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
import { take as take2 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/rxjs.js?v=8d7841f2";
import { CommonModule } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_common.js?v=8d7841f2";
import * as i06 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i14 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_common.js?v=8d7841f2";
import * as i2 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";
var _c03 = () => [""];
var _NoteComponent = class _NoteComponent {
  constructor() {
    this.route = inject3(ActivatedRoute);
    this.notesService = inject3(NotesService);
    this.router = inject3(Router2);
  }
  ngOnInit() {
    this.route.paramMap.pipe(take2(1)).subscribe((param) => {
      this.noteId = param.get("id");
      console.log(this.noteId);
      this.notesService.getNotes().subscribe((notes) => {
        this.note = notes[this.noteId];
      });
    });
  }
  deleteNote() {
    this.notesService.deleteNote(this.noteId);
    this.router.navigate([""]);
  }
};
_NoteComponent.\u0275fac = function NoteComponent_Factory(t) {
  return new (t || _NoteComponent)();
};
_NoteComponent.\u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _NoteComponent, selectors: [["app-note"]], standalone: true, features: [i06.\u0275\u0275StandaloneFeature], decls: 15, vars: 7, consts: [[1, "wrapper"], [1, "flex", "justify-between", "mb-5"], [1, "primary", 3, "routerLink"], [1, "danger", 3, "click"], [1, "card", "overflow-auto"], [1, "flex", "justify-between"], [1, "text-3xl", "font-bold", "text-slate-950"], [1, "text-slate-400"], [1, "text-slate-600", "overflow-auto"]], template: function NoteComponent_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "button", 2);
    i06.\u0275\u0275text(3, "Go Back");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(4, "button", 3);
    i06.\u0275\u0275listener("click", function NoteComponent_Template_button_click_4_listener() {
      return ctx.deleteNote();
    });
    i06.\u0275\u0275text(5, "Delete");
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "h1", 6);
    i06.\u0275\u0275text(9);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(10, "p", 7);
    i06.\u0275\u0275text(11);
    i06.\u0275\u0275pipe(12, "date");
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(13, "p", 8);
    i06.\u0275\u0275text(14);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("routerLink", i06.\u0275\u0275pureFunction0(6, _c03));
    i06.\u0275\u0275advance(7);
    i06.\u0275\u0275textInterpolate(ctx.note == null ? null : ctx.note.title);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind1(12, 4, ctx.note == null ? null : ctx.note.date), " ");
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275textInterpolate1(" ", ctx.note == null ? null : ctx.note.content, " ");
  }
}, dependencies: [CommonModule, i14.DatePipe, RouterModule3, i2.RouterLink], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var NoteComponent = _NoteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(NoteComponent, { className: "NoteComponent" });
})();

// src/app/app.routes.ts
var routes = [{
  path: "",
  component: DashboardComponent
}, {
  path: "new-note",
  component: NewNoteComponent
}, {
  path: "note/:id",
  component: NoteComponent
}, {
  path: "**",
  component: NotFoundComponent
}];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes)]
};

// src/app/app.component.ts
import { Component as Component8 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import { CommonModule as CommonModule2 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_common.js?v=8d7841f2";
import { RouterOutlet } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_router.js?v=8d7841f2";

// src/app/layout/header/header.component.ts
import { Component as Component6 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i07 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
var _HeaderComponent = class _HeaderComponent {
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [i07.\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "bg-white", "shadow", "text-center"], [1, "p-4", "text-2xl", "font-bold"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "header", 0)(1, "h1", 1);
    i07.\u0275\u0275text(2, "Notes App");
    i07.\u0275\u0275elementEnd()();
  }
}, styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/layout/footer/footer.component.ts
import { Component as Component7 } from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
import * as i08 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
var _FooterComponent = class _FooterComponent {
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [i08.\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "text-center", "border", "bg-slate-100", "flex"], [1, "text-slate-700", "p-4"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "footer", 0)(1, "p", 1);
    i08.\u0275\u0275text(2, "Built by Aldin Emni");
    i08.\u0275\u0275elementEnd()();
  }
}, styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent" });
})();

// src/app/app.component.ts
import * as i09 from "/@fs/Users/senad/Desktop/Notes-App/Notes-App/.angular/cache/17.0.8/vite/deps/@angular_core.js?v=8d7841f2";
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "firs-angular-app";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i09.\u0275\u0275StandaloneFeature], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i09.\u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
  }
}, dependencies: [
  CommonModule2,
  RouterOutlet,
  HeaderComponent,
  FooterComponent
], styles: ["\n\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFtdLAogICJzb3VyY2VzQ29udGVudCI6IFtdLAogICJtYXBwaW5ncyI6ICIiLAogICJuYW1lcyI6IFtdCn0K */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc2VydmljZXMvbm90ZXMuc2VydmljZS50cyIsInNyYy9hcHAvQ29tcG9uZW50cy9EYXNoYm9hcmQtQ2FyZC9EYXNoYm9hcmQtQ2FyZC5jb21wb25lbnQudHMiLCJzcmMvYXBwL0NvbXBvbmVudHMvRGFzaGJvYXJkLUNhcmQvRGFzaGJvYXJkLUNhcmQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3BhZ2VzL25ldy1ub3RlL25ldy1ub3RlLmNvbXBvbmVudC50cyIsInNyYy9hcHAvcGFnZXMvbmV3LW5vdGUvbmV3LW5vdGUuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9wYWdlcy9ub3RlL25vdGUuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wYWdlcy9ub3RlL25vdGUuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC9hcHAuY29tcG9uZW50JztcblxuYm9vdHN0cmFwQXBwbGljYXRpb24oQXBwQ29tcG9uZW50LCBhcHBDb25maWcpXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZVJvdXRlcihyb3V0ZXMpXVxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3Rlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3Rlcy5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL25vdGUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRGFzaGJvYXJkLUNhcmQvRGFzaGJvYXJkLUNhcmQuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGFzaGJvYXJkJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZSAsIERhc2hib2FyZENhcmRDb21wb25lbnRdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbm90ZVNlcnZpY2UgPSBpbmplY3QoTm90ZXNTZXJ2aWNlKVxuICBhbGxOb3RlczogTm90ZVtdIHwgdW5kZWZpbmVkO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ub3RlU2VydmljZS5nZXROb3RlcygpLnN1YnNjcmliZSgobm90ZXM6IE5vdGVbXSkgPT4ge1xuICAgICAgdGhpcy5hbGxOb3RlcyA9IG5vdGVzO1xuICAgICAgY29uc29sZS5sb2codGhpcy5hbGxOb3RlcylcbiAgICAgIFxuXG5cbiAgICB9KVxuXG4gIH1cblxufVxuIiwiPG1haW4gY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgQGZvciAobm90ZSBvZiBhbGxOb3RlczsgdHJhY2sgbm90ZTsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICAgICAgPCEtLSA8YXBwLURhc2hib2FyZC1DYXJkPiBbbm90ZV09XCJub3RlXCIgW2ldPVwiaVwiPC9hcHAtRGFzaGJvYXJkLUNhcmQ+IC0tPlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkIG92ZXJmbG93LXktc2Nyb2xsIHNjcm9sbC1tLTExXCIgW3JvdXRlckxpbmtdPVwiWycvbm90ZS8nLCBpXVwiPlxuICAgIDxoMiBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkXCI+e3sgbm90ZS50aXRsZX19PC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtc2xhdGUtNjAwIFwiPnt7bm90ZS5jb250ZW50IH19PC9wPlxuPC9kaXY+XG4gICAgfVxuICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5XCIgW3JvdXRlckxpbmtdPVwiWycvbmV3LW5vdGUnXVwiPlxuICAgICAgICArIE5ldyBOb3RlXG4gICAgPC9idXR0b24+XG5cbjwvbWFpbj4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ub3RlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOb3Rlc1NlcnZpY2Uge1xuICBub3RlOiBCZWhhdmlvclN1YmplY3Q8Tm90ZVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Tm90ZVtdPihbXSlcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzYXZlTm90ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKVxuICAgIGlmKHNhdmVOb3Rlcyl7XG4gICAgICB0aGlzLm5vdGUubmV4dChKU09OLnBhcnNlKHNhdmVOb3RlcykpXG4gICAgfVxuICBcbiAgICB0aGlzLm5vdGUuc3Vic2NyaWJlKChub3Rlc0FycmF5OiBOb3RlW10pID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdub3RlcycgLCBKU09OLnN0cmluZ2lmeShub3Rlc0FycmF5KSlcblxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVOb3RlKG5ld05vdGU6IE5vdGUpIHtcbiAgICB0aGlzLm5vdGVcbiAgICAucGlwZSh0YWtlKDEpKVxuICAgIC5zdWJzY3JpYmUoKG5vdGVzQXJyYXk6IE5vdGVbXSkgPT4ge1xuICAgICAgbm90ZXNBcnJheS51bnNoaWZ0KG5ld05vdGUpXG4gICAgICB0aGlzLm5vdGUubmV4dChub3Rlc0FycmF5KVxuXG4gICAgfSlcblxuXG4gIH1cblxuICBnZXROb3RlcygpOiBPYnNlcnZhYmxlPE5vdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGU7XG4gICAgXG4gIH1cblxuICBkZWxldGVOb3RlKG5vdGVJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5ub3RlXG4gICAgLnBpcGUodGFrZSgxKSlcbiAgICAuc3Vic2NyaWJlKChub3Rlc0FycmF5OiBOb3RlW10pID0+IHtcbiAgICAgIG5vdGVzQXJyYXkuc3BsaWNlKG5vdGVJZCAsMSlcbiAgICAgIHRoaXMubm90ZS5uZXh0KG5vdGVzQXJyYXkpXG4gIH0pXG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbm90ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1EYXNoYm9hcmQtQ2FyZCcsXG4gIHN0YW5kYWxvbmU6dHJ1ZSxcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9EYXNoYm9hcmQtQ2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL0Rhc2hib2FyZC1DYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBub3RlITogTm90ZTtcbkBJbnB1dCgpIGkhOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGwtbS0xMVwiIFtyb3V0ZXJMaW5rXT1cIlsnL25vdGUvJywgaV1cIj5cbiAgICAgIDxoMiBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkXCI+e3sgbm90ZS50aXRsZX19PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1zbGF0ZS02MDAgXCI+e3tub3RlLmNvbnRlbnQgfX08L3A+XG4gIDwvZGl2PiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4uL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IF9fdmFsdWVzIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbm90ZSc7XG5pbXBvcnQgeyBOb3Rlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3Rlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZXctbm90ZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlICxdLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LW5vdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbmV3LW5vdGUuY29tcG9uZW50LnNjc3MnXG59KVxuXG5leHBvcnQgY2xhc3MgTmV3Tm90ZUNvbXBvbmVudCB7XG4gIHJvdXRlciA9IGluamVjdChSb3V0ZXIpXG4gIGZiID0gaW5qZWN0IChGb3JtQnVpbGRlcik7XG4gIG5vdGVzU2VydmljZSA9IGluamVjdChOb3Rlc1NlcnZpY2UpXG4gIG5ld05vdGVGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICB0aXRsZTogWycnICwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgY29udGVudDogWycnICwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgfSlcbiAgXG5cbiAgc3VibWl0Rm9ybSh2YWx1ZXM6IGFueSkge1xuICAgIGNvbnN0IG5vdGU6IE5vdGUgPSB7XG4gICAgICB0aXRsZTogdmFsdWVzLnRpdGxlLFxuICAgICAgY29udGVudDogdmFsdWVzLmNvbnRlbnQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgfVxudGhpcy5ub3Rlc1NlcnZpY2UuY3JlYXRlTm90ZShub3RlKVxudGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSlcbiAgfVxufVxuXG4iLCI8bWFpbiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm5ld05vdGVGb3JtXCIgPlxuICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJibG9ja1wiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCIgICAgdHlwZT1cInRleHRcIiBjbGFzcz1cImJsb2NrIFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJibG9ja1wiPkNvbnRldDwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBmb3JtQ29udHJvbE5hbWU9XCJjb250ZW50XCIgbmFtZT1cIlwiIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgY2xhc3M9XCJibG9ja1wiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicHJpbWFyeVwiKGNsaWNrKT1cInN1Ym1pdEZvcm0obmV3Tm90ZUZvcm0udmFsdWUpXCI+Q3JlYXRlIE5vdGU8L2J1dHRvbj5cblxuICAgIDwvZm9ybT5cbjwvbWFpbj5cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ub3QtZm91bmQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdC1mb3VuZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kQ29tcG9uZW50IHtcblxufVxuIiwiPHA+bm90LWZvdW5kIHdvcmtzITwvcD5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ub3RlJztcbmltcG9ydCB7IE5vdGVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4uLy4uL2FwcC5yb3V0ZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbm90ZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL25vdGUuY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICByb3V0ZSA9IGluamVjdChBY3RpdmF0ZWRSb3V0ZSk7XG4gIG5vdGVzU2VydmljZSA9IGluamVjdChOb3Rlc1NlcnZpY2UpXG4gIHJvdXRlciA9IGluamVjdChSb3V0ZXIpXG5cbiAgbm90ZUlkOiBhbnlcbiAgbm90ZTogTm90ZSB8IHVuZGVmaW5lZFxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUucGFyYW1NYXAucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHBhcmFtKSA9PntcbiAgICAgIHRoaXMubm90ZUlkID0gcGFyYW0uZ2V0KCdpZCcpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm5vdGVJZCk7XG4gICAgICBcbiAgICAgIHRoaXMubm90ZXNTZXJ2aWNlLmdldE5vdGVzKClcbiAgICAgIC5zdWJzY3JpYmUoKG5vdGVzOiBOb3RlW10pID0+IHtcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZXNbdGhpcy5ub3RlSWRdXG4gICAgICB9KVxuICAgIFxuICAgIH0pXG5cbiAgfVxuZGVsZXRlTm90ZSgpe1xuICB0aGlzLm5vdGVzU2VydmljZS5kZWxldGVOb3RlKHRoaXMubm90ZUlkKVxuICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKVxufVxuXG4vLyBlZGl0Tm90ZShub3RlOiBhbnkpIHtcbi8vICAgLy8gUMOrciBzaGVtYnVsbCwgcMOrcmNha3RvbmkgbmrDqyBycnVnw6sgKHJvdXRlKSBww6tyIGZhcWVuIGUgZWRpdGltaXRcbi8vICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZWRpdC1ub3RlJywgbm90ZS5pZF0pO1xuLy8gfVxuXG59XG4iLCI8bWFpbiBjbGFzcz1cIndyYXBwZXJcIj5cbjxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi01XCI+XG4gICAgPGJ1dHRvbiBbcm91dGVyTGlua109XCJbJyddXCIgY2xhc3M9XCJwcmltYXJ5XCI+R28gQmFjazwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwiZGVsZXRlTm90ZSgpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgPCEtLSA8YnV0dG9uIFtyb3V0ZXJMaW5rXT1cIlsnLi4vLi4vZWRpdC1ub3RlJ11cIiAoY2xpY2spPVwiZWRpdE5vdGUobm90ZSlcIj5FZGl0PC9idXR0b24+IC0tPlxuPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgb3ZlcmZsb3ctYXV0b1wiPiBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgPGgxIGNsYXNzPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTUwXCI+e3tub3RlPy50aXRsZX19PC9oMT4gXG4gICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNsYXRlLTQwMFwiPiB7e25vdGU/LmRhdGUgfCBkYXRlIH19IDwvcD5cbiAgICA8L2Rpdj5cbiAgICAgICA8cCBjbGFzcz1cInRleHQtc2xhdGUtNjAwICBvdmVyZmxvdy1hdXRvXCI+IHt7bm90ZT8uY29udGVudH19IDwvcD5cbiAgICA8L2Rpdj5cbjwvbWFpbj4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZXdOb3RlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL25vdGUvbm90ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50XG59LHtcbiAgICBwYXRoOiAnbmV3LW5vdGUnLFxuICAgIGNvbXBvbmVudDogTmV3Tm90ZUNvbXBvbmVudFxufSx7XG4gICAgcGF0aDogJ25vdGUvOmlkJyxcbiAgICBjb21wb25lbnQ6IE5vdGVDb21wb25lbnRcbn0se1xuICAgIHBhdGg6ICcqKicsXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudFxufV1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgXG4gICAgUm91dGVyT3V0bGV0LCBcbiAgICBIZWFkZXJDb21wb25lbnQsIFxuICAgIEZvb3RlckNvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYXBwLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdmaXJzLWFuZ3VsYXItYXBwJztcbn0iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG48YXBwLWZvb3Rlcj48L2FwcC1mb290ZXI+XG5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuXG59XG4iLCI8aGVhZGVyIGNsYXNzPVwiYmctd2hpdGUgc2hhZG93IHRleHQtY2VudGVyXCI+XG4gICAgPGgxIGNsYXNzPVwicC00IHRleHQtMnhsIGZvbnQtYm9sZFwiPk5vdGVzIEFwcDwvaDE+XG48L2hlYWRlcj4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcblxufVxuIiwiPGZvb3RlciBjbGFzcz1cInRleHQtY2VudGVyIGJvcmRlciBiZy1zbGF0ZS0xMDAgZmxleFwiPlxuICAgIDxwIGNsYXNzPVwidGV4dC1zbGF0ZS03MDAgcC00XCI+QnVpbHQgYnkgQWxkaW4gRW1uaTwvcD5cbjwvZm9vdGVyPlxuIl0sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyw0QkFBNEI7OztBQ0NyQyxTQUFTLHFCQUFxQjs7O0FDRDlCLFNBQVMsYUFBQUEsWUFBbUIsY0FBYztBQUMxQyxTQUFTLGdCQUFBQyxxQkFBb0I7OztBRUQ3QixTQUFTLGtCQUFrQjtBQUUzQixTQUFTLGlCQUE2QixZQUFZOztBQUs1QyxJQUFPLGdCQUFQLE1BQU8sY0FBWTtFQUd2QixjQUFBO0FBRkEsU0FBQSxPQUFnQyxJQUFJLGdCQUF3QixDQUFBLENBQUU7QUFHNUQsVUFBTSxZQUFZLGFBQWEsUUFBUSxPQUFPO0FBQzlDLFFBQUcsV0FBVTtBQUNYLFdBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7O0FBR3RDLFNBQUssS0FBSyxVQUFVLENBQUMsZUFBc0I7QUFDekMsbUJBQWEsUUFBUSxTQUFVLEtBQUssVUFBVSxVQUFVLENBQUM7SUFFM0QsQ0FBQztFQUNIO0VBRUEsV0FB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VDVCLElBQUEsNkJBQUEsR0FBQSxVQUFBLENBQUEsRUFBcUQsR0FBQSxLQUFBLENBQUE7QUFDbkIsSUFBQSxxQkFBQSxHQUFBLHFCQUFBO0FBQW1CLElBQUEsMkJBQUEsRUFBSTs7O0FEUW5ELElBQU8sa0JBQVA7O2lGQUFPLGlCQUFlLEVBQUEsV0FBQSxrQkFBQSxDQUFBO0FBQUEsR0FBQTs7OztBSlF0QixJQUFPLGdCQUFQLE1BQU8sY0FBWTtFQVh6QixjQUFBO0FBWUUsU0FBQSxRQUFROzs7O21CQURHLGVBQVk7QUFBQTtrRkFBWixlQUFZLFdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLFlBQUEsTUFBQSxVQUFBLENBQUEsaUNBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFVBQUEsU0FBQSxzQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQ2pCekIsSUFBQSx3QkFBQSxHQUFBLFlBQUEsRUFBeUIsR0FBQSxlQUFBLEVBQUEsR0FBQSxZQUFBOzs7RURVckJDO0VBQ0E7RUFDQTtFQUNBO0FBQWUsR0FBQSxRQUFBLENBQUEsdUxBQUEsRUFBQSxDQUFBO0FBSWIsSUFBTyxlQUFQOztpRkFBTyxjQUFZLEVBQUEsV0FBQSxlQUFBLENBQUE7QUFBQSxHQUFBOzs7QWRiekIscUJBQXFCLGNBQWMsU0FBUyxFQUN6QyxNQUFNLENBQUMsUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsIl9jMCIsIlJvdXRlck1vZHVsZSIsIkNvbXBvbmVudCIsImluamVjdCIsImluamVjdCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudCIsImluamVjdCIsIlJvdXRlciIsIlJvdXRlck1vZHVsZSIsInRha2UiLCJpbmplY3QiLCJSb3V0ZXIiLCJfYzAiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiXX0=