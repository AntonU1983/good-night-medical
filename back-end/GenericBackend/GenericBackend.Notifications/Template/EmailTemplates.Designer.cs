﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GenericBackend.Notifications.Template {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "4.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    public class EmailTemplates {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal EmailTemplates() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("GenericBackend.Notifications.Template.EmailTemplates", typeof(EmailTemplates).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        public static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to &lt;html&gt;
        ///    &lt;body&gt;
        ///         &lt;p&gt;Program : &lt;b&gt;{0}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;Email : &lt;b&gt;{1}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;FullName : &lt;b&gt;{2}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;Phone : &lt;b&gt;{3}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;Doctor Prescription : &lt;b&gt;{4}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;Contact Method : &lt;b&gt;{5}&lt;/b&gt;&lt;/p&gt;
        ///          &lt;p&gt;Comments: &lt;b&gt;{6}&lt;/b&gt;&lt;/p&gt;
        ///    &lt;/body&gt;
        ///&lt;/html&gt;
        ///.
        /// </summary>
        public static string RentProgramBody {
            get {
                return ResourceManager.GetString("RentProgramBody", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to {0} Requested {1} Program.
        /// </summary>
        public static string RentProgramSubject {
            get {
                return ResourceManager.GetString("RentProgramSubject", resourceCulture);
            }
        }
    }
}
